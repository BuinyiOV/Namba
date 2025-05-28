import { dishes } from './js/modules/dishes.js';
import { initLanguageSwitcher } from './js/modules/language.js';
import { mainPageText } from './js/modules/mainPage.js';
import { advertisement } from './js/modules/advertisement.js';

let currentLanguage = 'pl'; // Початкове значення, наприклад, 'pl' для польської мови
let currentDish = null; // Початкове значення
let cart = []; // Кошик

// Змінні для перемикання мови та контенту
const plElements = document.querySelectorAll('[data-pl]');
const contentDetails = document.getElementById('content-details');
const cartItemsContainer = document.getElementById('cart-items');

// Ініціалізуємо перемикач мови
document.addEventListener('DOMContentLoaded', () => {
	initLanguageSwitcher();
	loadCart(); // Загружаємо кошик з локального сховища
});

// Функція для зміни мови
function changeLanguage(lang) {
	plElements.forEach(el => {
		el.innerText = el.getAttribute(`data-${lang}`);
	});
	currentLanguage = lang;
	currentDish ? updateContent(currentDish) : goToMain();
	renderCart();
	stopAdRotation();
	startAdRotation();
}

// Додаємо обробники подій для кнопок мови
document.getElementById('pl-lang').addEventListener('click', () => changeLanguage('pl'));
document.getElementById('ua-lang').addEventListener('click', () => changeLanguage('ua'));

// Функція для зміни контенту
function goToMain() {
	const pageContent = mainPageText[currentLanguage];
	currentDish = null;

	// Додаємо клас fade перед оновленням контенту
	contentDetails.classList.add('fade');
	// Видаляємо клас visible
	contentDetails.classList.remove('visible');

	setTimeout(() => {
		contentDetails.innerHTML = `
			<h1 class="green_text">${pageContent.title}</h1>
			<div class="menu_btn">${pageContent.menuTitle}</div>
			<p>${pageContent.greatings}</p>
			<p>${pageContent.menu}</p>
			<h2 class="green_text">${pageContent.featuresTitle}</h2>
			<ul>${pageContent.features.map((feature) => `<li class="center_text">${feature}</li>`).join('')}</ul>
			<h2 class="green_text">${pageContent.contactsTitle}</h2>
			<div class="contakts_box">${pageContent.contacts.map((contact) => `<div>
				<a href="${contact.contactRoad}">
					<img class="contakt_item" src="${contact.contactImg}" alt="${contact.contactName}">
					<p>${contact.contactName}</p>
				</a></div>`).join('')}
			<div>
				<a href="tel:${pageContent.phoneNum}">
					<img class="contakt_item" src="${pageContent.phoneImg}" alt="${pageContent.phoneTitle}">
					<p>${pageContent.phoneTitle}</p>
				</a></div>
			</div>
			<h2 class="green_text">${pageContent.chartTitle}</h2>
			<ul>${pageContent.chart.map((char) => `<li class="center_text">${char}</li>`).join('')}</ul>
			<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6852.410948368693!2d16.581667417815652!3d52.611317557454726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470417586cfb9613%3A0x7894ac0df066068f!2sSushi%20Namba!5e0!3m2!1suk!2spl!4v1738857429787!5m2!1suk!2spl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<p>${pageContent.conclusion}</p>
			`;

		// Видаляємо клас fade після оновлення контенту
		contentDetails.classList.remove('fade');
		// Додаємо клас visible, щоб елемент став видимим
		contentDetails.classList.add('visible');

		// Додаємо слухачів подій для кнопок
		addQuantityEventListeners();
	}, 500); // Затримка в 500 мс перед оновленням контенту
}

//burger--------------------------

document.addEventListener("DOMContentLoaded", function () {
	const burger = document.querySelector(".burger");
	const menuBtn = document.querySelector(".menu_btn");
	const navLinks = document.querySelector(".nav-links");
	const links = document.querySelectorAll(".nav-links a");

	function toggleMenu() {
		navLinks.classList.toggle("active-menu");
		burger.classList.toggle("active-menu");
	}

	burger.addEventListener("click", toggleMenu);

	contentDetails.addEventListener("click", function (event) {
		if (event.target.classList.contains("menu_btn")) {
			toggleMenu();
		}
	});

	links.forEach(link => {
		link.addEventListener("click", function () {
			navLinks.classList.remove("active-menu");
			burger.classList.remove("active-menu");
		});
	});
});


// Функція для зміни контенту
function updateContent(dish) {
	const dishContent = dishes[currentLanguage][dish];
	currentDish = dish;

	if (dishContent) {
		// Додаємо клас fade перед оновленням контенту
		contentDetails.classList.add('fade');
		// Видаляємо клас visible
		contentDetails.classList.remove('visible');

		// Додаємо затримку перед оновленням контенту (наприклад, 500 мс)
		setTimeout(() => {
			if (dishContent.title === 'ZESTAWY' || dishContent.title === 'СЕТИ') {
				contentDetails.innerHTML = `
						<h2>${dishContent.title}</h2>
						<ul>
							${dishContent.items.map(item => `
								<li>
									<div class="roll_num">
										<span>${item.setNumber ? item.setNumber : ''}</span>
									</div>
									<div class="roll_text">
										${item.imageUrl ? `<img class="roll-img" src="${item.imageUrl}" alt="${item.title} image">` : ''}
										<p>${item.setName ? item.setName : ''} ${item.setQty} - <span>${item.setPrice}</span> zł</p>
										${item.setRolls ? `${item.setRolls.map(item => `
										<div class="roll_text">${item}</div>
										`
				).join('')}` : ''}
										<div class="roll_btn">
											<button class="decrease-quantity" data-name="${item.setNumber}">-</button>
											<span class="quantity" data-name="${item.setNumber}">1</span>
											<button class="increase-quantity" data-name="${item.setNumber}">+</button>
											<button class="add-to-cart" data-rollNum="${item.setNumber}" data-name="${item.setNumber}" data-price="${item.setPrice}">${currentLanguage === 'pl' ? `Dodaj do koszyka` : 'Додати до кошика'}</button>
										</div>
									</div>
								</li>`).join('')}
						</ul>
				`;

				// Видаляємо клас fade після оновлення контенту
				contentDetails.classList.remove('fade');
				// Додаємо клас visible, щоб елемент став видимим

				contentDetails.classList.add('visible');

				// Додаємо слухачів подій для кнопок
				addQuantityEventListeners();
			} else {
				contentDetails.innerHTML = `
						${dishContent.imageUrl ? `<img class="roll-img" src="${dishContent.imageUrl}" alt="${dishContent.title} image">` : ''}
						<h2>${dishContent.title}</h2>
						${dishContent.description ? `<p>${dishContent.description}</p>` : ''}
						<ul>
							${dishContent.items.map(item => `
								<li>
									<div class="roll_num">
										<span>${item.rollNumber ? item.rollNumber : ''}</span>
									</div>
									<div class="roll_text">
										<p>${item.rollName} - <span>${item.rollPrice}</span> zł <br/></p>
										${item.rollIngredients ? `(${item.rollIngredients})` : ''}
										<div class="roll_btn">
											<button class="decrease-quantity" data-name="${item.rollName}">-</button>
											<span class="quantity" data-name="${item.rollName}">1</span>
											<button class="increase-quantity" data-name="${item.rollName}">+</button>
											<button class="add-to-cart" data-rollNum="${item.rollNumber}" data-name="${item.rollName}" data-price="${item.rollPrice}">${currentLanguage === 'pl' ? `Dodaj do koszyka` : 'Додати до кошика'}</button>
										</div>
									</div>
								</li>`).join('')}
						</ul>
				`;

				// Видаляємо клас fade після оновлення контенту
				contentDetails.classList.remove('fade');
				// Додаємо клас visible, щоб елемент став видимим

				contentDetails.classList.add('visible');

				// Додаємо слухачів подій для кнопок
				addQuantityEventListeners();
			}
		}, 500); // Затримка в 500 мс перед оновленням контенту
	}

}


// Додаємо обробники подій для навігаційних пунктів
document.querySelector('img[href="#logo"]').addEventListener('click', () => goToMain());
document.querySelector('a[href="#sets"]').addEventListener('click', () => updateContent('sets'));
document.querySelector('a[href="#hosomaki"]').addEventListener('click', () => updateContent('hosomaki'));
document.querySelector('a[href="#futomaki"]').addEventListener('click', () => updateContent('futomaki'));
document.querySelector('a[href="#futomaki-tempura"]').addEventListener('click', () => updateContent('futomaki_tempura'));
document.querySelector('a[href="#futomaki-pieczone"]').addEventListener('click', () => updateContent('futomaki_baked'));
document.querySelector('a[href="#uramaki-california"]').addEventListener('click', () => updateContent('uramak_california'));
document.querySelector('a[href="#uramaki-philadelphia"]').addEventListener('click', () => updateContent('uramak_philadelphia'));
document.querySelector('a[href="#uramaki-philadelphia-grill"]').addEventListener('click', () => updateContent('uramak_philadelphia_grill'));
document.querySelector('a[href="#uramaki-philadelphia-cheese"]').addEventListener('click', () => updateContent('uramak_philadelphia_cheese'));
document.querySelector('a[href="#uramaki-caterpillar"]').addEventListener('click', () => updateContent('uramak_caterpillar'));
document.querySelector('a[href="#uramaki-max"]').addEventListener('click', () => updateContent('uramak_max'));
document.querySelector('a[href="#volcano"]').addEventListener('click', () => updateContent('volcano'));
document.querySelector('a[href="#datemaki"]').addEventListener('click', () => updateContent('datemaki'));
document.querySelector('a[href="#sashimi-roll"]').addEventListener('click', () => updateContent('sashimi_roll'));
document.querySelector('a[href="#przystawki"]').addEventListener('click', () => updateContent('appetizers'));

// Функція для зміни активного класу
function setActiveLink() {
	// Знаходимо всі навігаційні посилання
	const navLinks = document.querySelectorAll('.nav-link');

	// Додаємо обробник подій для кожного з посилань
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			// Видаляємо клас active з усіх посилань
			navLinks.forEach(item => item.classList.remove('active'));

			// Додаємо клас active до натиснутого посилання
			link.classList.add('active');
		});
	});
}

// Викликаємо функцію після завантаження контенту
document.addEventListener('DOMContentLoaded', () => {
	setActiveLink();
});

// Завантажити головну 
window.onload = () => goToMain();



// Додаємо обробники подій для кнопок кількості
function addQuantityEventListeners() {
	document.querySelectorAll('.increase-quantity').forEach(button => {
		button.addEventListener('click', () => {
			const quantitySpan = document.querySelector(`.quantity[data-name="${button.dataset.name}"]`);
			let quantity = parseInt(quantitySpan.innerText);
			quantitySpan.innerText = quantity + 1; // Збільшуємо кількість на 1
		});
	});

	document.querySelectorAll('.decrease-quantity').forEach(button => {
		button.addEventListener('click', () => {
			const quantitySpan = document.querySelector(`.quantity[data-name="${button.dataset.name}"]`);
			let quantity = parseInt(quantitySpan.innerText);
			if (quantity > 1) {
				quantitySpan.innerText = quantity - 1; // Зменшуємо кількість на 1
			}
		});
	});

	// Обробник події для кнопки "Додати до кошика"
	document.querySelectorAll('.add-to-cart').forEach(button => {
		button.addEventListener('click', () => {
			const quantitySpan = document.querySelector(`.quantity[data-name="${button.dataset.name}"]`);
			const quantity = parseInt(quantitySpan.innerText);
			addToCart(button.dataset.rollnum, button.dataset.name, parseFloat(button.dataset.price), quantity);
		});
	});
}

// Функція для додавання страви до кошика
function addToCart(rollnum, name, price, quantity) {
	const existingItemIndex = cart.findIndex(item => item.rollnum === rollnum);
	if (existingItemIndex > -1) {
		cart[existingItemIndex].quantity += quantity; // Збільшуємо кількість, якщо товар вже в кошику
	} else {
		cart.push({ rollnum, name, price, quantity });
	}
	renderCart();
	saveCart(); // Зберігаємо кошик у локальному сховищі
	updateCartCount(); // Оновлюємо кількість товарів у кошику
}

// Функція для рендерингу кошика
function renderCart() {
	if (cart.length) {
		cartItemsContainer.innerHTML = cart.map(item => `
			<li>
					<div class="cart-items">
						<div class="cart-info"> ${item.rollnum !== 'undefined' ? item.rollnum : ''} 
														${item.rollnum !== item.name ? item.name : ''}
														 - ${item.price} zł x ${item.quantity} = ${item.price * item.quantity} zł</div>
						<div class="cart-btn">
							<button class="decrease-cart" data-rollnum="${item.rollnum}">-</button>
							<span class="cart-quantity" data-rollnum="${item.rollnum}">${item.quantity}</span>
							<button class="increase-cart" data-rollnum="${item.rollnum}">+</button>
							<button class="remove-from-cart" data-rollnum="${item.rollnum}">
								${currentLanguage === 'pl' ? `<p>Usunąć</p>` : '<p>Видалити</p>'}</button>
						</div>
					</div>
			</li>
		`).join('') + `
			<div class="cart-items cart-sum">
				<div class="cart-info">
					<p>${currentLanguage === 'pl' ? `Razem:` : 'Разом:'} ${calculateTotal()} zł</p>
				</div>
				<div class="cart-btn">
					<button id="clear-cart">${currentLanguage === 'pl' ? `<p>Wyczyść koszyk</p>` : `<p>Очистити кошик</p>`}</button>
				</div>
			</div>
			<div class="cart-items">${currentLanguage === 'pl' ? `<p>Aby złożyć zamówienie, prosimy o kontakt telefoniczny: +48 792 466 362</p>` : `<p>Щоб зробити замовлення просимо зателефонувати за номером: +48 792 466 362</p>`}</div>
		`;

		// Додаємо обробники подій для кнопок "Видалити" та зміну кількості
		document.querySelectorAll('.remove-from-cart').forEach(button => {
			button.addEventListener('click', () => {
				removeFromCart(button.dataset.rollnum);
			});
		});

		document.querySelectorAll('.increase-cart').forEach(button => {
			button.addEventListener('click', () => {
				increaseCartItem(button.dataset.rollnum);
			});
		});

		document.querySelectorAll('.decrease-cart').forEach(button => {
			button.addEventListener('click', () => {
				decreaseCartItem(button.dataset.rollnum);
			});
		});

		// Додаємо обробник події для кнопки "Очистити кошик"
		document.getElementById('clear-cart').addEventListener('click', clearCart);
	} else {
		cartItemsContainer.innerHTML = `
				<div class="cart-items">
						${currentLanguage === 'pl' ? `<div class="cart-info">Kosz jest pusty</div>` : `<div class="cart-info">Кошик пустий</div>`}
					</div>
		`;

	}

}

// Функція для обчислення загальної суми кошика
function calculateTotal() {
	return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

// Функція для видалення товару з кошика
function removeFromCart(rollnum) {
	cart = cart.filter(item => item.rollnum !== rollnum); // Фільтруємо кошик, залишаючи тільки ті елементи, які не видаляються
	renderCart();
	saveCart(); // Зберігаємо зміни у локальному сховищі
	updateCartCount(); // Оновлюємо кількість товарів у кошику
}

// Функція для збільшення кількості товару в кошику
function increaseCartItem(rollnum) {
	const item = cart.find(item => item.rollnum === rollnum);
	if (item) {
		item.quantity += 1; // Збільшуємо кількість на 1
	}
	renderCart();
	saveCart(); // Зберігаємо зміни у локальному сховищі
	updateCartCount(); // Оновлюємо кількість товарів у кошику
}

// Функція для зменшення кількості товару в кошику
function decreaseCartItem(rollnum) {
	const item = cart.find(item => item.rollnum === rollnum);
	if (item && item.quantity > 1) {
		item.quantity -= 1; // Зменшуємо кількість на 1
	}
	renderCart();
	saveCart(); // Зберігаємо зміни у локальному сховищі
	updateCartCount(); // Оновлюємо кількість товарів у кошику
}

// Функція для очищення кошика
function clearCart() {
	cart = []; // Очищуємо кошик
	renderCart(); // Оновлюємо відображення кошика
	saveCart(); // Зберігаємо зміни у локальному сховищі
	updateCartCount(); // Оновлюємо кількість товарів у кошику
}

// Функція для завантаження кошика з локального сховища
function loadCart() {
	const savedCart = localStorage.getItem('cart');
	cart = savedCart ? JSON.parse(savedCart) : [];
	renderCart(); // Оновлюємо відображення кошика
	updateCartCount(); // Оновлюємо кількість товарів у кошику
}

// Функція для збереження кошика в локальному сховищі
function saveCart() {
	localStorage.setItem('cart', JSON.stringify(cart));
}

// Функція для оновлення кількості товарів у кошику
function updateCartCount() {
	const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
	cartCountDisplay.innerText = cartCount > 0 ? cartCount : ''; // Сховати, якщо кількість 0
}

// Додаємо кнопку для відкриття/закриття кошика
const cartButton = document.createElement('button');
cartButton.id = 'toggle-cart';
document.body.appendChild(cartButton);

// Додаємо контейнер для кошика
const cartContainer = document.createElement('div');
cartContainer.style.display = 'none'; // Сховати за замовчуванням
cartContainer.id = 'cart-container';
cartContainer.appendChild(cartItemsContainer);

// Додаємо кнопку закриття
const closeButton = document.createElement('button');
closeButton.innerText = '✖'; // Хрестик
closeButton.id = 'close-cart';
closeButton.style.position = 'absolute'; // Абсолютне позиціювання
closeButton.style.top = '5px'; // Відстань від верхнього краю
closeButton.style.right = '10px'; // Відстань від правого краю
closeButton.style.fontSize = '20px'; // Розмір шрифту
closeButton.style.border = 'none'; // Без рамки
closeButton.style.background = 'none'; // Без фону
closeButton.style.color = 'red'; // Без фону
closeButton.style.cursor = 'pointer'; // Курсор-стрілка при наведенні
cartContainer.appendChild(closeButton);
document.body.appendChild(cartContainer);

// Додаємо елемент для відображення кількості товарів у кошику у вигляді кружечка
const cartCountDisplay = document.createElement('div');
cartCountDisplay.id = 'cart-count';
cartCountDisplay.style.position = 'relative'; // Абсолютне позиціювання
cartCountDisplay.style.top = '-25px'; // Відстань над кнопкою
cartCountDisplay.style.right = '-35px'; // Відстань праворуч
cartCountDisplay.style.width = '25px'; // Ширина кружечка
cartCountDisplay.style.height = '25px'; // Висота кружечка
cartCountDisplay.style.borderRadius = '50%'; // Робимо кружечком
cartCountDisplay.style.backgroundColor = 'red'; // Червоний фон
cartCountDisplay.style.color = 'white'; // Білий текст
cartCountDisplay.style.display = 'flex'; // Для центрування тексту
cartCountDisplay.style.alignItems = 'center'; // Вертикальне вирівнювання
cartCountDisplay.style.justifyContent = 'center'; // Горизонтальне вирівнювання
cartCountDisplay.style.fontSize = '14px'; // Розмір шрифту
cartCountDisplay.innerText = '0'; // Встановлюємо початкове значення
cartButton.insertAdjacentElement('afterbegin', cartCountDisplay);

// Обробник події для кнопки "Кошик"
//cartButton.addEventListener('click', () => {
//cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none'; // Перемикаємо видимість
//});

// Створення та додавання бекдропу в документ
const backdrop = document.createElement('div');
backdrop.style.position = 'fixed';
backdrop.style.top = '0';
backdrop.style.left = '0';
backdrop.style.width = '100%';
backdrop.style.height = '100%';
backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
backdrop.style.zIndex = '999';
backdrop.style.display = 'none'; // За замовчуванням приховано
backdrop.style.transition = 'opacity 0.3s ease'; // Додаємо анімацію для бекдропу
backdrop.style.opacity = '0'; // Початковий стан
document.body.appendChild(backdrop);

// Додаємо анімації до модального вікна
cartContainer.style.transition = 'transform 0.3s ease, opacity 0.3s ease'; // Анімація для модального вікна
cartContainer.style.transform = 'translate(-50%, -50%) scale(0.8)'; // Початковий стан (зменшене вікно)
cartContainer.style.opacity = '0'; // Початкова прозорість

cartButton.addEventListener('click', () => {
	const isHidden = cartContainer.style.display === 'none';

	if (isHidden) {
		// Показуємо модальне вікно з анімацією
		cartContainer.style.display = 'block';
		backdrop.style.display = 'block';
		setTimeout(() => {
			cartContainer.style.transform = 'translate(-50%, -50%) scale(1)';
			cartContainer.style.opacity = '1';
			backdrop.style.opacity = '1';
		}, 10); // Невелика затримка для активації transition
	} else {
		// Ховаємо модальне вікно з анімацією
		cartContainer.style.transform = 'translate(-50%, -50%) scale(0.8)';
		cartContainer.style.opacity = '0';
		backdrop.style.opacity = '0';
		setTimeout(() => {
			cartContainer.style.display = 'none';
			backdrop.style.display = 'none';
		}, 300); // Час закінчення анімації (збігається з transition)
	}
});

// Закриття при кліку на бекдроп
backdrop.addEventListener('click', () => {
	cartContainer.style.transform = 'translate(-50%, -50%) scale(0.8)';
	cartContainer.style.opacity = '0';
	backdrop.style.opacity = '0';
	setTimeout(() => {
		cartContainer.style.display = 'none';
		backdrop.style.display = 'none';
	}, 300); // Час закінчення анімації
});


// Обробник події для кнопки закриття
closeButton.addEventListener('click', () => {
	cartContainer.style.transform = 'translate(-50%, -50%) scale(0.8)';
	cartContainer.style.opacity = '0';
	backdrop.style.opacity = '0';
	setTimeout(() => {
		cartContainer.style.display = 'none';
		backdrop.style.display = 'none';
	}, 300); // Час закінчення анімації
});

// add
let currentIndex = 0;
const adText = document.getElementById("ad-text");
const adBox = document.getElementById("ad-box");
const closeBtn = document.getElementById("close-btn");

let intervalId;
const changeInterval = 5000; // кожні 5 секунди

function startAdRotation() {
	const texts = advertisement[currentLanguage];

	intervalId = setInterval(() => {
		adText.classList.remove('add-in');
		adText.classList.add('add-fade');

		setTimeout(() => {
			currentIndex = (currentIndex + 1) % texts.points.length;
			adText.textContent = texts.points[currentIndex];
			adText.classList.remove('add-fade');
			adText.classList.add('add-in');
		}, 1000);
	}, changeInterval);
}

function stopAdRotation() {
	clearInterval(intervalId);
}

// Старт
startAdRotation();

// Зупинка при наведенні
adBox.addEventListener("mouseenter", stopAdRotation);
adBox.addEventListener("mouseleave", startAdRotation);

// Закрити рекламу
closeBtn.addEventListener("click", () => {
	adBox.style.opacity = 0;
	setTimeout(() => {
		adBox.style.display = "none";
	}, 300);
});

// preloder

window.addEventListener("load", function () {
	document.getElementById("preloader").classList.add("hidden-preloader");

	setTimeout(function () {
		preloader.style.display = 'none';  // Приховуємо прелоадер
	}, 2000); // Час очікування має відповідати часу анімації
});


//works
