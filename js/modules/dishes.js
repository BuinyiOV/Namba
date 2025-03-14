// Контент для кожної страви

export const dishes = {
	pl: {
		sets: {
			title: "ZESTAWY",
			imageUrl: 'logo/Neon.svg',
			items: [
				{
					setNumber: "Set 1", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "88", setQty: "22 szt", setRolls: ["Futomak Łosoś", "California Surimi", "Hosomak Oshinko"]
				},
				{
					setNumber: "Set 2", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "125", setQty: "32 szt", setRolls: ["California Krewetka w tempurze", "Caterpillar Łosoś z awokado", "Volcano Surimi Goma Wakame", "Hosomak Kampyo"]
				},
				{
					setNumber: "Set 3", setName: "Wege", imageUrl: 'logo/Neon.svg', setPrice: "145", setQty: "36 szt", setRolls: ["Futomak Wege", "Uramak \"Max\" Wege", "Volcano Awokado Goma Wakame", "Sashimi roll Wege", "Hosomak Awokado"]
				},
				{
					setNumber: "Set 4", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "160", setQty: "24 szt", setRolls: ["Datemak Grillowany łosoś na słodko", "Datemak Grillowany łosoś na ostro", "Uramak \"Max\" Pasta z tuńczyka", "Uramak \"Max\" Surimi"]
				},
				{
					setNumber: "Set 5", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "170", setQty: "32 szt", setRolls: ["Philadelphia Awokado z łososiem", "Philadelphia Ogórek z wędzonym łososiem", "Philadelphia Grill Gruszka z łososiem", "Philadelphia Cheese Krewetka w tempurze"]
				},
				{
					setNumber: "Set 6", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "170", setQty: "32 szt", setRolls: ["Caterpillar Krewetka w tempurze z awokado", "Caterpillar Krewetka w tempurze z mango", "Philadelphia Grill Ogórek z łososiem", "Philadelphia Cheese Łosoś wędzony"]
				},
				{
					setNumber: "Set 7", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "190", setQty: "36 szt", setRolls: ["Uramak \"Max\" Łosoś", "Volcano Tuńczyk Goma Wakame", "Caterpillar Krewetka w tempurze z awokado", "Datemak Sałatka Krabowa", "Hosomak Ogórek"]
				},
				{
					setNumber: "Set 8", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "200", setQty: "52 szt", setRolls: ["Philadelphia Cheese Surimi", "Futomak Surimi", "Uramak \"Max\" Surimi", "California Surimi", "Volcano Surimi Goma Wakame", "Hosomak Ogórek", "Hosomak Kampyo"]
				},
				{
					setNumber: "Set 9", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "210", setQty: "40 szt", setRolls: ["Caterpillar Łosoś z awokado", "Caterpillar Krewetka w tempurze z mango", "Philadelphia Ogórek z łososiem", "California Grillowany łosoś na ostro", "Volcano Krewetka w tempurze tatar z łososia"]
				},
				{
					setNumber: "Set 10", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "220", setQty: "40 szt", setRolls: ["Futomak w tempurze Tatar z łososia", "Futomak Pasta z tuńczyka", "Datemak Grillowany łosoś na słodko", "Uramak \"Max\" Surimi", "Philadelphia Cheese Łosoś", "Hosomak shitake"]
				},
				{
					setNumber: "Set 11", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "310", setQty: "60 szt", setRolls: ["Philadelphia Cheese Łosoś w tempurze", "Philadelphia Ogórek z łososiem", "Caterpillar Łosoś z mango", "Caterpillar Tuńczyk z awokado", "California Surimi", "Volcano Łosoś tobiko", "Futomak Warzywa w tempurze", "Futomak Surimi"]
				},
				{
					setNumber: "Set 12", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "365", setQty: "58 szt", setRolls: ["Futomak Tuńczyk \"Hashi\"", "Futomak Krewetka na maśle czosnkowym", "Uramak \"Max\" Pasta z tuńczyka", "Philadelphia Ogórek z tuńczykiem", "Volcano Łosoś tobiko", "Sashimi roll Umami", "Hosomak Tuńczyk", "Hosomak Awokado"]
				}
			]
		},
		hosomaki: {
			title: "Hosomaki (8 szt)",
			description: "Cienkie rolki z niewielką ilością ryżu i dodatkiem tylko jednego składnika",
			imageUrl: 'img/Photo/H.png',
			items: [
				{ rollNumber: "Roll 1", rollName: "Ogórek", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 2", rollName: "Awokado", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 3", rollName: "Oshinko", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 4", rollName: "Kampyo", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 5", rollName: "Shitake", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 6", rollName: "Łosoś", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 7", rollName: "Grillowany łosoś na słodko", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 8", rollName: "Grillowany łosoś na ostro", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 9", rollName: "Tuńczyk", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 10", rollName: "Surimi", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 11", rollName: "Krewetka w tempurze", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 12", rollName: "Ryba maślana", rollPrice: "30", plateColor: "Red" }
			]
		},
		futomaki: {
			title: "Futomaki (6 szt)",
			description: "Grube rolki z minimum czterema składnikami. Algi Nori są owinięte od zewnątrz.",
			imageUrl: 'img/Photo/F2.png',
			items: [
				{ rollNumber: "Roll 13", rollName: "Wege", rollPrice: "30", plateColor: "Red", rollIngredients: "Ogórek, awokado, oshinko, kampyo, grzyby shitake, sałatka, ser" },
				{ rollNumber: "Roll 14", rollName: "Warzywa w tempurze", rollPrice: "35", plateColor: "Orange", rollIngredients: "Kilka rodzajów warzyw smażonych w tempurze" },
				{ rollNumber: "Roll 15", rollName: "Łosoś", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś, awokado, ogórek, sałatka, ser" },
				{ rollNumber: "Roll 16", rollName: "Grillowany łosoś na słodko", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Grillowany łosoś na słodko, ogórek, kampyo, sałatka, ser" },
				{ rollNumber: "Roll 17", rollName: "Grillowany łosoś na ostro", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Grillowany łosoś na ostro, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 18", rollName: "Tatar z łososia", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Tatar z łososia, sałatka, ser" },
				{ rollNumber: "Roll 19", rollName: "Łosoś wędzony", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś wędzony, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 20", rollName: "Ryba maślana", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Ryba maślana, ogórek, awokado, sałatka, ser" },
				{ rollNumber: "Roll 21", rollName: "Grillowana ryba maślana", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Grillowana ryba maślana, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 22", rollName: "Mix ryb", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Mix ryb, ogórek, awokado, sałatka, ser" },
				{ rollNumber: "Roll 23", rollName: "Surimi", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Surimi, sałatka, ogórek, oshinko, ser" },
				{ rollNumber: "Roll 24", rollName: "Sałatka Krabowa", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Sałatka Krabowa, sałatka, ser" },
				{ rollNumber: "Roll 25", rollName: "Tuńczyk", rollPrice: "45", plateColor: "Green", rollIngredients: "Tuńczyk, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 26", rollName: "Tuńczyk \"Hashi\"", rollPrice: "45", plateColor: "Green", rollIngredients: "Tuńczyk \"Hashi\", ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 27", rollName: "Pasta z tuńczyka", rollPrice: "45", plateColor: "Green", rollIngredients: "Pasta z tuńczyka, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 28", rollName: "Krewetka w tempurze", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, ogórek, awokado, sałatka, ser" },
				{ rollNumber: "Roll 29", rollName: "Kalmary w tempurze", rollPrice: "45", plateColor: "Green", rollIngredients: "Kalmary w tempurze, ogórek, oshinko, kampyo, sałatka, ser" },
				{ rollNumber: "Roll 30", rollName: "Łosoś w tempurze", rollPrice: "45", plateColor: "Green", rollIngredients: "Łosoś w tempurze, ogórek, awokado, sałatka, ser" },
				{ rollNumber: "Roll 31", rollName: "Krewetka na maśle czosnkowym", rollPrice: "55", plateColor: "Purple", rollIngredients: "Krewetka na maśle czosnkowym, ogórek, oshinko, sałatka, ser" }
			]
		},
		futomaki_tempura: {
			title: "Futomaki w tempurze (6 szt)",
			description: "Cała rolka smażona w tempurze. Grube rolki z minimum czterema składnikami. Algi Nori są owinięte od zewnątrz",
			imageUrl: 'img/Photo/FT.png',
			items: [
				{ rollNumber: "Roll 32", rollName: "Wege", rollPrice: "35", plateColor: "Red", rollIngredients: "Ogórek, awokado, oshinko, kampyo, grzyby shitake, sałatka, ser" },
				{ rollNumber: "Roll 33", rollName: "Warzywa w tempurze", rollPrice: "40", plateColor: "Orange", rollIngredients: "Kilka rodzajów warzyw smażonych w tempurze" },
				{ rollNumber: "Roll 34", rollName: "Łosoś", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Łosoś, awokado, ogórek, sałatka, ser" },
				{ rollNumber: "Roll 35", rollName: "Grillowany łosoś na słodko", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Grillowany łosoś na słodko, ogórek, kampyo, sałatka, ser" },
				{ rollNumber: "Roll 36", rollName: "Grillowany łosoś na ostro", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Grillowany łosoś na ostro, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 37", rollName: "Tatar z łososia", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Tatar z łososia, sałatka, ser" },
				{ rollNumber: "Roll 38", rollName: "Łosoś wędzony", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Łosoś wędzony, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 39", rollName: "Ryba maślana", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Ryba maślana, ogórek, awokado, sałatka, ser" },
				{ rollNumber: "Roll 40", rollName: "Grillowana ryba maślana", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Grillowana ryba maślana, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 41", rollName: "Mix ryb", rollPrice: "45", plateColor: "Green", rollIngredients: "Mix ryb, ogórek, awokado, sałatka, ser" },
				{ rollNumber: "Roll 42", rollName: "Surimi", rollPrice: "45", plateColor: "Green", rollIngredients: "Surimi, sałatka, ogórek, oshinko, ser" },
				{ rollNumber: "Roll 43", rollName: "Sałatka Krabowa", rollPrice: "45", plateColor: "Green", rollIngredients: "Sałatka Krabowa, sałatka, ser" },
				{ rollNumber: "Roll 44", rollName: "Tuńczyk", rollPrice: "50", plateColor: "Blue", rollIngredients: "Tuńczyk, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 45", rollName: "Tuńczyk \"Hashi\"", rollPrice: "50", plateColor: "Blue", rollIngredients: "Tuńczyk 'Hashi', ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 46", rollName: "Pasta z tuńczyka", rollPrice: "50", plateColor: "Blue", rollIngredients: "Pasta z tuńczyka, ogórek, oshinko, sałatka, ser" },
				{ rollNumber: "Roll 47", rollName: "Krewetka w tempurze", rollPrice: "50", plateColor: "Purple", rollIngredients: "Krewetka w tempurze, ogórek, awokado, sałatka, ser" },
				{ rollNumber: "Roll 48", rollName: "Kalmary w tempurze", rollPrice: "50", plateColor: "Purple", rollIngredients: "Kalmary w tempurze, ogórek, oshinko, kampyo, sałatka, ser" },
				{ rollNumber: "Roll 49", rollName: "Łosoś w tempurze", rollPrice: "50", plateColor: "Purple", rollIngredients: "Łosoś w tempurze, ogórek, awokado, sałatka, ser" },
				{ rollNumber: "Roll 50", rollName: "Krewetka na maśle czosnkowym", rollPrice: "60", plateColor: "Purple", rollIngredients: "Krewetka na maśle czosnkowym, ogórek, oshinko, sałatka, ser" },
			]
		},
		futomaki_baked: {
			title: "Futomaki Pieczone (10 szt)",
			description: "Grube rolki z minimum czterema składnikami. Algi Nori są owinięte od zewnątrz. Pieczone.",
			imageUrl: 'img/Photo/FP.png',
			items: [
				{ rollNumber: "Roll 102", rollName: "Surimi", rollPrice: "40", plateColor: "Red", rollIngredients: "Surimi, grusza, kampyo, shitake, ser" },
				{ rollNumber: "Roll 103", rollName: "Łosoś", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Łosoś, awokado, ogórek, ser" },
				{ rollNumber: "Roll 104", rollName: "Łosoś wędzony", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Łosoś wędzony, awokado, ogórek, ser" },
				{ rollNumber: "Roll 105", rollName: "Krewetka w tempurze z gruszką", rollPrice: "50", plateColor: "Green", rollIngredients: "Krewetka w tempurze, grusza, kampyo, ser" },
			]
		},
		uramak_california: {
			title: "Uramak \"California\" (8 szt)",
			description: "Nadzienie jest umieszczone wewnątrz, a zewnętrzną warstwę stanowi ryż, obsypany sezamem, bonito lub masago/tobiko (ikra rybna).",
			imageUrl: 'img/Photo/Cal.png',
			items: [
				{ rollNumber: "Roll 51", rollName: "Surimi", rollPrice: "30", plateColor: "Red", rollIngredients: "Surimi, ogórek, kampyo, ser, sezam" },
				{ rollNumber: "Roll 52", rollName: "Krewetka w tempurze", rollPrice: "40", plateColor: "Orange", rollIngredients: "Krewetka w tempurze, awokado, ogórek, ser, sezam" },
				{ rollNumber: "Roll 53", rollName: "Łosoś", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś, awokado, ogórek, ser, masago/tobiko" },
				{ rollNumber: "Roll 54", rollName: "Grillowany łosoś na słodko", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Grillowany łosoś na słodko, ogórek, kampyo, ser, sezam" },
				{ rollNumber: "Roll 55", rollName: "Grillowany łosoś na ostro", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Grillowany łosoś na ostro, ogórek, oshinko, ser, sezam" },
				{ rollNumber: "Roll 56", rollName: "Łosoś wędzony", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś wędzony, ogórek, oshinko, ser, bonito" },
				{ rollNumber: "Roll 57", rollName: "Tuńczyk", rollPrice: "45", plateColor: "Green", rollIngredients: "Tuńczyk, ogórek, oshinko, ser, bonito" },
			]
		},
		uramak_philadelphia: {
			title: "Uramak \"Philadelphia\" (8 szt)",
			description: "Nadzienie jest umieszczone wewnątrz, a zewnętrzną warstwę stanowi ryż. Dużo sera. Wierzch pokryty rybą.",
			imageUrl: 'img/Photo/P.png',
			items: [
				{ rollNumber: "Roll 58", rollName: "Ogórek z łososiem", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Ogórek, łosoś, ser" },
				{ rollNumber: "Roll 59", rollName: "Awokado z łososiem", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Awokado, łosoś, ser" },
				{ rollNumber: "Roll 60", rollName: "Gruszka z łososiem", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Gruszka, łosoś, ser" },
				{ rollNumber: "Roll 61", rollName: "Surimi z łososiem", rollPrice: "45", plateColor: "Green", rollIngredients: "Surimi, łosoś, ser" },
				{ rollNumber: "Roll 62", rollName: "Ogórek z tuńczykiem", rollPrice: "45", plateColor: "Green", rollIngredients: "Ogórek, tuńczyk, ser" },
				{ rollNumber: "Roll 63", rollName: "Ogórek z łososiem wędzonym", rollPrice: "45", plateColor: "Green", rollIngredients: "Ogórek, łosoś wędzony, ser" },
				{ rollNumber: "Roll 64", rollName: "Awokado z tuńczykiem", rollPrice: "45", plateColor: "Green", rollIngredients: "Awokado, tuńczyk, ser" },
				{ rollNumber: "Roll 65", rollName: "Krewetka w tempurze z łososiem", rollPrice: "50", plateColor: "Purple", rollIngredients: "Krewetka w tempurze, łosoś, ser" },
			]
		},
		uramak_philadelphia_grill: {
			title: "Uramak \"Philadelphia Grill\" (8 szt)",
			description: "Nadzienie jest umieszczone wewnątrz, a zewnętrzną warstwę stanowi ryż. Dużo sera. Wierzch pokryty grillowaną rybą.",
			imageUrl: 'img/Photo/PG.png',
			items: [
				{ rollNumber: "Roll 66", rollName: "Ogórek z łososiem", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Ogórek, łosoś grill, ser" },
				{ rollNumber: "Roll 67", rollName: "Awokado z łososiem", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Awokado, łosoś grill, ser" },
				{ rollNumber: "Roll 68", rollName: "Gruszka z łososiem", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Gruszka, łosoś grill, ser" },
				{ rollNumber: "Roll 69", rollName: "Surimi z łososiem", rollPrice: "45", plateColor: "Green", rollIngredients: "Surimi, łosoś grill, ser" },
				{ rollNumber: "Roll 70", rollName: "Ogórek z tuńczykiem", rollPrice: "45", plateColor: "Green", rollIngredients: "Ogórek, tuńczyk grill, ser" },
				{ rollNumber: "Roll 71", rollName: "Awokado z tuńczykiem", rollPrice: "45", plateColor: "Green", rollIngredients: "Awokado, tuńczyk grill, ser" },
				{ rollNumber: "Roll 72", rollName: "Krewetka w tempurze z łososiem", rollPrice: "50", plateColor: "Purple", rollIngredients: "Krewetka w tempurze, łosoś grill, ser" },
				{ rollNumber: "Roll 73", rollName: "Łosoś z łososiem", rollPrice: "55", plateColor: "Purple", rollIngredients: "Łosoś, łosoś grill, ser" },
			]
		},
		uramak_philadelphia_cheese: {
			title: "Uramak \"Philadelphia Cheese\" (8 szt)",
			description: "Nadzienie jest umieszczone wewnątrz, a zewnętrzną warstwę stanowi ryż. Dużo sera. Wierzch pokryty serem.",
			imageUrl: 'img/Photo/PC.png',
			items: [
				{ rollNumber: "Roll 74", rollName: "Surimi", rollPrice: "35", plateColor: "Red", rollIngredients: "Surimi, kampyo, ser" },
				{ rollNumber: "Roll 75", rollName: "Łosoś", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś, awokado, ser" },
				{ rollNumber: "Roll 76", rollName: "Łosoś wędzony", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś wędzony, oshinko, ser" },
				{ rollNumber: "Roll 77", rollName: "Krewetka w tempurze", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, awokado, ser" },
				{ rollNumber: "Roll 78", rollName: "Łosoś w tempurze", rollPrice: "45", plateColor: "Green", rollIngredients: "Łosoś w tempurze, awokado, ser" },
			]
		},
		uramak_caterpillar: {
			title: "Uramak \"Caterpillar\" (8 szt)",
			description: "Nadzienie jest umieszczone wewnątrz, a zewnętrzną warstwę stanowi ryż. Wierzch pokryty awokado lub mango.",
			imageUrl: 'img/Photo/Cat2.png',
			items: [
				{ rollNumber: "Roll 79", rollName: "Łosoś z awokado", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś, awokado, ogórek, ser" },
				{ rollNumber: "Roll 80", rollName: "Łosoś z mango", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś mango, kampyo, ser" },
				{ rollNumber: "Roll 81", rollName: "Łosoś wędzony z awokado", rollPrice: "45", plateColor: "Green", rollIngredients: "Łosoś wędzony, awokado, ogórek, ser" },
				{ rollNumber: "Roll 82", rollName: "Łosoś wędzony z mango", rollPrice: "45", plateColor: "Green", rollIngredients: "Łosoś wędzony, mango, ogórek, ser" },
				{ rollNumber: "Roll 83", rollName: "Tuńczyk z awokado", rollPrice: "45", plateColor: "Green", rollIngredients: "Tuńczyk, awokado, ogórek, ser" },
				{ rollNumber: "Roll 84", rollName: "Krewetka w tempurze z awokado", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, awokado, ogórek, ser" },
				{ rollNumber: "Roll 85", rollName: "Krewetka w tempurze z mango", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, kampyo, ser" },
			]
		},
		uramak_max: {
			title: "Uramak \"Max\" (6 szt)",
			description: "Duża rolka. Nadzienie jest umieszczone wewnątrz, a zewnętrzną warstwę stanowi ryż, obsypany sezamem lub masago/tobiko (ikra rybna).",
			imageUrl: 'img/Photo/UM.png',
			items: [
				{ rollNumber: "Roll 86", rollName: "Wege", rollPrice: "30", plateColor: "Red", rollIngredients: "Ogórek, awokado, oshinko, kampyo, grzyby shitake, ser, sezam" },
				{ rollNumber: "Roll 87", rollName: "Surimi", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Surimi, ogórek, kampyo, ser, sezam" },
				{ rollNumber: "Roll 88", rollName: "Łosoś", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś, ogórek, awokado, ser, sezam" },
				{ rollNumber: "Roll 89", rollName: "Łosoś wędzony", rollPrice: "45", plateColor: "Green", rollIngredients: "Łosoś wędzony, ogórek, oshinko, ser, masago/tobiko" },
				{ rollNumber: "Roll 90", rollName: "Tuńczyk", rollPrice: "45", plateColor: "Green", rollIngredients: "Tuńczyk, ogórek, oshinko, ser, masago/tobiko" },
				{ rollNumber: "Roll 91", rollName: "Krewetka w tempurze", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, ogórek, awokado, ser, masago/tobiko" },
				{ rollNumber: "Roll 92", rollName: "Pasta z tuńczyka", rollPrice: "45", plateColor: "Green", rollIngredients: "Pasta z tuńczyka, ogórek, oshinko, ser, masago/tobiko" },
			]
		},
		volcano: {
			title: "Volcano (8 szt)",
			description: "Nadzienie jest umieszczone wewnątrz, a zewnętrzną warstwę stanowi ryż. Na wierzchu układa się tatar, ikrę rybną lub goma wakame.",
			imageUrl: 'img/Photo/V.png',
			items: [
				{ rollNumber: "Roll 93", rollName: "Surimi Goma Wakame", rollPrice: "35", plateColor: "Red", rollIngredients: "Surimi, Goma Wakame, ogórek, ser" },
				{ rollNumber: "Roll 94", rollName: "Awokado Goma Wakame", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Awokado, Goma Wakame, ogórek, ser" },
				{ rollNumber: "Roll 95", rollName: "Krewetka w tempurze tatar z łososia", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, tatar z łososia, awokado, ser" },
				{ rollNumber: "Roll 96", rollName: "Krewetka w tempurze Goma Wakame", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, Goma Wakame, awokado, ser" },
				{ rollNumber: "Roll 97", rollName: "Krewetka w tempurze tobiko", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, tobiko, awokado, ser" },
				{ rollNumber: "Roll 98", rollName: "Łosoś tobiko", rollPrice: "45", plateColor: "Green", rollIngredients: "Łosoś, tobiko, awokado, ser" },
				{ rollNumber: "Roll 99", rollName: "Łosoś wędzony tobiko", rollPrice: "50", plateColor: "Blue", rollIngredients: "Łosoś wędzony, tobiko, ogórek, ser" },
				{ rollNumber: "Roll 100", rollName: "Tuńczyk Goma Wakame", rollPrice: "50", plateColor: "Blue", rollIngredients: "Tuńczyk, Goma Wakame, awokado, ser" },
				{ rollNumber: "Roll 101", rollName: "Tuńczyk tobiko", rollPrice: "50", plateColor: "Blue", rollIngredients: "Tuńczyk, tobiko, awokado, ser" },
			]
		},
		datemaki: {
			title: "Datemaki (6 szt)",
			description: "Rolki zawijane zamiast w nori w słodki omlet jajeczny.",
			imageUrl: 'img/Photo/D2.png',
			items: [
				{ rollNumber: "Roll 106", rollName: "Surimi", rollPrice: "40", plateColor: "Red", rollIngredients: "Surimi, ogórek, oshinko, ser" },
				{ rollNumber: "Roll 107", rollName: "Sałatka Krabowa", rollPrice: "40", plateColor: "Red", rollIngredients: "Sałatka Krabowa, ser" },
				{ rollNumber: "Roll 108", rollName: "Łosoś", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Łosoś, awokado, ogórek, ser" },
				{ rollNumber: "Roll 109", rollName: "Grillowany łosoś na słodko", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Grillowany łosoś na słodko, grusza, ogórek, ser" },
				{ rollNumber: "Roll 110", rollName: "Grillowany łosoś na ostro", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Grillowany łosoś na ostro, ogórek, oshinko, ser" },
				{ rollNumber: "Roll 111", rollName: "Tatar z łososia", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Tatar z łososia, ser" },
				{ rollNumber: "Roll 112", rollName: "Krewetka w tempurze", rollPrice: "45", plateColor: "Green", rollIngredients: "Krewetka w tempurze, awokado, ogórek, ser" },
			]
		},
		sashimi_roll: {
			title: "Sashimi roll (8 szt)",
			description: "Nadzienie zawinięte w papier ryżowy. Bez ryżu.",
			imageUrl: 'img/Photo/SR2.png',
			items: [
				{ rollNumber: "Roll 113", rollName: "Wege", rollPrice: "30", plateColor: "Green", rollIngredients: "Goma Wakame, ogórek, awokado, oshinko, kampyo, grzyby shitake, sałatka, ser" },
				{ rollNumber: "Roll 114", rollName: "Łosoś", rollPrice: "50", plateColor: "Red", rollIngredients: "Łosoś, ogórek, awokado, oshinko, kampyo, sałatka, ser" },
				{ rollNumber: "Roll 115", rollName: "Krewetka w tempurze", rollPrice: "60", plateColor: "Yellow", rollIngredients: "Krewetka w tempurze, ogórek, awokado, oshinko, kampyo, sałatka, ser" },
				{ rollNumber: "Roll 116", rollName: "Tuńczyk", rollPrice: "60", plateColor: "Yellow", rollIngredients: "Tuńczyk, ogórek, awokado, oshinko, kampyo, sałatka, ser" },
				{ rollNumber: "Roll 117", rollName: "Mix ryb", rollPrice: "60", plateColor: "Yellow", rollIngredients: "Mix ryb, ogórek, awokado, oshinko, kampyo, sałatka, ser" },
				{ rollNumber: "Roll 118", rollName: "Umami", rollPrice: "65", plateColor: "Orange", rollIngredients: "Tatar z łososia, krewetka w tempurze, awokado, ser, Tabasco" }
			]
		},
		appetizers: {
			title: "Przystawki",
			imageUrl: 'logo/Neon.svg',
			items: [
				{ rollName: "Sałatka Goma Wakame", plateColor: "White", rollPrice: "18" },
				{ rollName: "Chipsy krewetkowe (15 szt)", plateColor: "White", rollPrice: "18" },
				{ rollName: "Onigiri (8 szt)", plateColor: "White", rollPrice: "18", description: "kuleczki ryżu obtoczone w sezamie (8szt)" },
				{ rollName: "Warzywa w tempurze", plateColor: "Red", rollPrice: "30" },
				{ rollName: "Sałatka Krabowa", plateColor: "Orange", rollPrice: "35" },
				{ rollName: "Kalmary w tempurze (7 szt)", plateColor: "Yellow", rollPrice: "40" },
				{ rollName: "Krewetka w tempurze (5 szt)", plateColor: "Green", rollPrice: "45" },
				{ rollName: "Łosoś w tempurze (6 szt)", plateColor: "Green", rollPrice: "45" },
				{ rollName: "Mix ryb w tempurze (6 szt)", plateColor: "Green", rollPrice: "45" },
				{ rollName: "Tatar z łososia", plateColor: "Purple", rollPrice: "55" }
			]
		}
	},
	ua: {
		sets: {
			title: "СЕТИ",
			imageUrl: 'logo/Neon.svg',
			items: [
				{
					setNumber: "Сет 1", setName: "Сет 1", imageUrl: 'logo/Neon.svg', setPrice: "88", setQty: "22 шт", setRolls: ["Futomak Лосось", "California Сурімі", "Hosomak Ошінко"]
				},
				{
					setNumber: "Сет 2", setName: "Сет 1", imageUrl: 'logo/Neon.svg', setPrice: "125", setQty: "32 шт", setRolls: ["California Креветка в темпурі", "Caterpillar Лосось з авокадо", "Volcano Сурімі Goma Wakame", "Hosomak Кампьо"]
				},
				{
					setNumber: "Сет 3", setName: "Wege", imageUrl: 'logo/Neon.svg', setPrice: "145", setQty: "36 шт", setRolls: ["Futomak Wege", "Uramak \"Max\" Wege", "Volcano Авокадо Goma Wakame", "Sashimi roll Wege", "Hosomak Авокадо"]
				},
				{
					setNumber: "Сет 4", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "160", setQty: "24 шт", setRolls: ["Datemak Лосось грильований на солодко", "Datemak Лосось грильований на гостро", "Uramak \"Max\" Паста з тунця", "Uramak \"Max\" Сурімі"]
				},
				{
					setNumber: "Сет 5", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "170", setQty: "32 шт", setRolls: ["Philadelphia Авокадо з лососем", "Philadelphia Огірок з копченим лососем", "Philadelphia Grill Груша з лососем", "Philadelphia Cheese Креветка в темпурі"]
				},
				{
					setNumber: "Сет 6", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "170", setQty: "32 шт", setRolls: ["Caterpillar Креветка в темпурі з авокадо", "Caterpillar Креветка в темпурі з манго", "Philadelphia Grill Огірок з лососем", "Philadelphia Cheese Копчений лосось"]
				},
				{
					setNumber: "Сет 7", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "190", setQty: "36 шт", setRolls: ["Uramak \"Max\" Лосось", "Volcano Тунець Goma Wakame", "Caterpillar Креветка в темпурі з авокадо", "Datemak Крабовий салат", "Hosomak Огірок"]
				},
				{
					setNumber: "Сет 8", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "200", setQty: "52 шт", setRolls: ["Philadelphia Cheese Сурімі", "Futomak Сурімі", "Uramak \"Max\" Сурімі", "California Сурімі", "Volcano Сурімі Goma Wakame", "Hosomak Огірок", "Hosomak Кампьо"]
				},
				{
					setNumber: "Сет 9", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "210", setQty: "40 шт", setRolls: ["Caterpillar Лосось з авокадо", "Caterpillar Креветка в темпурі з манго", "Philadelphia Огірок з лососем", "California Лосось грильований на гостро", "Volcano Креветка в темпурі тартар з лосося"]
				},
				{
					setNumber: "Сет 10", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "220", setQty: "40 шт", setRolls: ["Futomak в темпурі Тартар з лосося", "Futomak Паста з тунця", "Datemak Лосось грильований на солодко", "Uramak \"Max\" Сурімі", "Philadelphia Cheese Лосось", "Hosomak шитаке"]
				},
				{
					setNumber: "Сет 11", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "310", setQty: "60 шт", setRolls: ["Philadelphia Cheese Лосось в темпурі", "Philadelphia Огірок з лососем", "Caterpillar лосось з манго", "Caterpillar Тунець з авокадо", "California Сурімі", "Volcano Лосось Тобіко", "Futomak Овочі в темпурі", "Futomak Сурімі"]
				},
				{
					setNumber: "Сет 12", setName: " ", imageUrl: 'logo/Neon.svg', setPrice: "365", setQty: "58 шт", setRolls: ["Futomak Тунець \"Hashi\"", "Futomak Креветка на часниковому маслі", "Uramak \"Max\" Паста з тунця", "Philadelphia Огірок з тунцем", "Volcano Лосось Тобіко", "Sashimi roll Umami", "Hosomak Тунець", "Hosomak Авокадо"]
				}
			]
		},
		hosomaki: {
			title: "Hosomaki (8 шт)",
			description: "Тонкі роли з невеликою кількістю рису та тільки одним інгредієнтом",
			imageUrl: 'img/Photo/H.png',
			items: [
				{ rollNumber: "Roll 1", rollName: "Огірок", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 2", rollName: "Авокадо", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 3", rollName: "Ошінко", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 4", rollName: "Кампіо", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 5", rollName: "Шітаке", rollPrice: "18", plateColor: "White" },
				{ rollNumber: "Roll 6", rollName: "Лосось", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 7", rollName: "Грильований лосось на солодко", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 8", rollName: "Грильований лосось на остро", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 9", rollName: "Тунець", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 10", rollName: "Сурімі", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 11", rollName: "Креветка в темпурі", rollPrice: "30", plateColor: "Red" },
				{ rollNumber: "Roll 12", rollName: "Риба масляна", rollPrice: "30", plateColor: "Red" }
			]
		},
		futomaki: {
			title: "Futomaki (6 шт)",
			description: "Грубі роли з мінімум чотирма інгредієнтами. Водорості Норі обгорнуті зовні.",
			imageUrl: 'img/Photo/F2.png',
			items: [
				{ rollNumber: "Roll 13", rollName: "Веге", rollPrice: "30", plateColor: "Red", rollIngredients: "Огірок, авокадо, ошінко, кампьо, гриби шітаке, салат, сир" },
				{ rollNumber: "Roll 14", rollName: "Овочі в темпурі", rollPrice: "35", plateColor: "Orange", rollIngredients: "Кілька видів овочів, смажених у темпурі" },
				{ rollNumber: "Roll 15", rollName: "Лосось", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось, авокадо, огірок, салат, сир" },
				{ rollNumber: "Roll 16", rollName: "Грильований лосось на солодко", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Грильований лосось на солодко, огірок, кампьо, салат, сир" },
				{ rollNumber: "Roll 17", rollName: "Грильований лосось на остро", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Грильований лосось на остро, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 18", rollName: "Татар з лосося", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Татар з лосося, салат, сир" },
				{ rollNumber: "Roll 19", rollName: "Лосось копчений", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось копчений, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 20", rollName: "Риба масляна", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Риба масляна, огірок, авокадо, салат, сир" },
				{ rollNumber: "Roll 21", rollName: "Грильована риба масляна", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Грильована риба масляна, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 22", rollName: "Мікс риб", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Мікс риб, огірок, авокадо, салат, сир" },
				{ rollNumber: "Roll 23", rollName: "Сурімі", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Сурімі, салат, огірок, ошінко, сир" },
				{ rollNumber: "Roll 24", rollName: "Крабовий салат", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Крабовий салат, салат, сир" },
				{ rollNumber: "Roll 25", rollName: "Тунець", rollPrice: "45", plateColor: "Green", rollIngredients: "Тунець, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 26", rollName: "Тунець \"Hashi\"", rollPrice: "45", plateColor: "Green", rollIngredients: "Тунець \"Хаші\", огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 27", rollName: "Паста з тунця", rollPrice: "45", plateColor: "Green", rollIngredients: "Паста з тунця, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 28", rollName: "Креветка в темпурі", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, огірок, авокадо, салат, сир" },
				{ rollNumber: "Roll 29", rollName: "Кальмари в темпурі", rollPrice: "45", plateColor: "Green", rollIngredients: "Кальмари в темпурі, огірок, ошінко, кампьо, салат, сир" },
				{ rollNumber: "Roll 30", rollName: "Лосось в темпурі", rollPrice: "45", plateColor: "Green", rollIngredients: "Лосось в темпурі, огірок, авокадо, салат, сир" },
				{ rollNumber: "Roll 31", rollName: "Креветка на часниковому маслі", rollPrice: "55", plateColor: "Purple", rollIngredients: "Креветка на часниковому маслі, огірок, ошінко, салат, сир" }
			]
		},
		futomaki_tempura: {
			title: "Futomaki в темпурі (6 шт)",
			description: "Увесь рол смажений в темпурі. Грубі роли з мінімум чотирма інгредієнтами. Водорості Норі обгорнуті зовні.",
			imageUrl: 'img/Photo/FT.png',
			items: [
				{ rollNumber: "Roll 32", rollName: "Веге", rollPrice: "35", plateColor: "Red", rollIngredients: "Огірок, авокадо, ошінко, кампьо, гриби шітаке, салат, сир" },
				{ rollNumber: "Roll 33", rollName: "Овочі в темпурі", rollPrice: "40", plateColor: "Orange", rollIngredients: "Кілька видів овочів, смажених у темпурі" },
				{ rollNumber: "Roll 34", rollName: "Лосось", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Лосось, авокадо, огірок, салат, сир" },
				{ rollNumber: "Roll 35", rollName: "Грильований лосось на солодко", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Грильований лосось на солодко, огірок, кампьо, салат, сир" },
				{ rollNumber: "Roll 36", rollName: "Грильований лосось на остро", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Грильований лосось на остро, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 37", rollName: "Татар з лосося", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Татар з лосося, салат, сир" },
				{ rollNumber: "Roll 38", rollName: "Лосось копчений", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Лосось копчений, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 39", rollName: "Риба масляна", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Риба масляна, огірок, авокадо, салат, сир" },
				{ rollNumber: "Roll 40", rollName: "Грильована риба масляна", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Грильована риба масляна, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 41", rollName: "Мікс риб", rollPrice: "45", plateColor: "Green", rollIngredients: "Мікс риб, огірок, авокадо, салат, сир" },
				{ rollNumber: "Roll 42", rollName: "Сурімі", rollPrice: "45", plateColor: "Green", rollIngredients: "Сурімі, салат, огірок, ошінко, сир" },
				{ rollNumber: "Roll 43", rollName: "Крабовий салат", rollPrice: "45", plateColor: "Green", rollIngredients: "Крабовий салат, салат, сир" },
				{ rollNumber: "Roll 44", rollName: "Тунець", rollPrice: "50", plateColor: "Blue", rollIngredients: "Тунець, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 45", rollName: "Тунець \"Hashi\"", rollPrice: "50", plateColor: "Blue", rollIngredients: "Тунець 'Хаші', огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 46", rollName: "Паста з тунця", rollPrice: "50", plateColor: "Blue", rollIngredients: "Паста з тунця, огірок, ошінко, салат, сир" },
				{ rollNumber: "Roll 47", rollName: "Креветка в темпурі", rollPrice: "50", plateColor: "Purple", rollIngredients: "Креветка в темпурі, огірок, авокадо, салат, сир" },
				{ rollNumber: "Roll 48", rollName: "Кальмари в темпурі", rollPrice: "50", plateColor: "Purple", rollIngredients: "Кальмари в темпурі, огірок, ошінко, кампьо, салат, сир" },
				{ rollNumber: "Roll 49", rollName: "Лосось в темпурі", rollPrice: "50", plateColor: "Purple", rollIngredients: "Лосось в темпурі, огірок, авокадо, салат, сир" },
				{ rollNumber: "Roll 50", rollName: "Креветка на часниковому маслі", rollPrice: "60", plateColor: "Purple", rollIngredients: "Креветка на часниковому маслі, огірок, ошінко, салат, сир" }
			]
		},
		futomaki_baked: {
			title: "Futomaki Печені (10 шт)",
			description: "Грубі роли з мінімум чотирма інгредієнтами. Водорості Норі обгорнуті зовні. Печені.",
			imageUrl: 'img/Photo/FP.png',
			items: [
				{ rollNumber: "Roll 102", rollName: "Сурімі", rollPrice: "40", plateColor: "Red", rollIngredients: "Сурімі, груша, кампьо, шітаке, сир" },
				{ rollNumber: "Roll 103", rollName: "Лосось", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Лосось, авокадо, огірок, сир" },
				{ rollNumber: "Roll 104", rollName: "Лосось копчений", rollPrice: "45", plateColor: "Yellow", rollIngredients: "Лосось копчений, авокадо, огірок, сир" },
				{ rollNumber: "Roll 105", rollName: "Креветка в темпурі з грушкою", rollPrice: "50", plateColor: "Green", rollIngredients: "Креветка в темпурі, груша, кампьо, сир" }
			]
		},
		uramak_california: {
			title: "Uramak \"California\" (8 шт)",
			description: "Начинка розміщена всередині, а зовнішній шар складається з рису, посипаного сезамом, bonito або масаго/тобіко (ікра).",
			imageUrl: 'img/Photo/Cal.png',
			items: [
				{ rollNumber: "Roll 51", rollName: "Сурімі", rollPrice: "30", plateColor: "Red", rollIngredients: "Сурімі, огірок, кампьо, сир, сезам" },
				{ rollNumber: "Roll 52", rollName: "Креветка в темпурі", rollPrice: "40", plateColor: "Orange", rollIngredients: "Креветка в темпурі, авокадо, огірок, сир, сезам" },
				{ rollNumber: "Roll 53", rollName: "Лосось", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось, авокадо, огірок, сир, масаго/тобіко" },
				{ rollNumber: "Roll 54", rollName: "Грильований лосось на солодко", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Грильований лосось на солодко, огірок, кампьо, сир, сезам" },
				{ rollNumber: "Roll 55", rollName: "Грильований лосось на гостро", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Грильований лосось на гостро, огірок, ошінко, сир, сезам" },
				{ rollNumber: "Roll 56", rollName: "Лосось копчений", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось копчений, огірок, ошінко, сир, боніто" },
				{ rollNumber: "Roll 57", rollName: "Тунець", rollPrice: "45", plateColor: "Green", rollIngredients: "Тунець, огірок, ошінко, сир, боніто" }
			]
		},
		uramak_philadelphia: {
			title: "Uramak \"Philadelphia\" (8 шт)",
			description: "Начинка розміщена всередині, а зовнішній шар складається з рису. Багато сиру. Верх покритий рибою.",
			imageUrl: 'img/Photo/P.png',
			items: [
				{ rollNumber: "Roll 58", rollName: "Огірок з лососем", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Огірок, лосось, сир" },
				{ rollNumber: "Roll 59", rollName: "Авокадо з лососем", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Авокадо, лосось, сир" },
				{ rollNumber: "Roll 60", rollName: "Груша з лососем", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Груша, лосось, сир" },
				{ rollNumber: "Roll 61", rollName: "Сурімі з лососем", rollPrice: "45", plateColor: "Green", rollIngredients: "Сурімі, лосось, сир" },
				{ rollNumber: "Roll 62", rollName: "Огірок з тунцем", rollPrice: "45", plateColor: "Green", rollIngredients: "Огірок, тунець, сир" },
				{ rollNumber: "Roll 63", rollName: "Огірок з копченим лососем", rollPrice: "45", plateColor: "Green", rollIngredients: "Огірок, лосось копчений, сир" },
				{ rollNumber: "Roll 64", rollName: "Авокадо з тунцем", rollPrice: "45", plateColor: "Green", rollIngredients: "Авокадо, тунець, сир" },
				{ rollNumber: "Roll 65", rollName: "Креветка в темпурі з лососем", rollPrice: "50", plateColor: "Purple", rollIngredients: "Креветка в темпурі, лосось, сир" }
			]
		},
		uramak_philadelphia_grill: {
			title: "Uramak \"Philadelphia Grill\" (8 шт)",
			description: "Начинка розміщена всередині, а зовнішній шар складається з рису. Багато сиру. Верх покритий грильованою рибою.",
			imageUrl: 'img/Photo/PG.png',
			items: [
				{ rollNumber: "Roll 66", rollName: "Огірок з лососем", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Огірок, лосось гриль, сир" },
				{ rollNumber: "Roll 67", rollName: "Авокадо з лососем", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Авокадо, лосось гриль, сир" },
				{ rollNumber: "Roll 68", rollName: "Груша з лососем", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Груша, лосось гриль, сир" },
				{ rollNumber: "Roll 69", rollName: "Сурімі з лососем", rollPrice: "45", plateColor: "Green", rollIngredients: "Сурімі, лосось гриль, сир" },
				{ rollNumber: "Roll 70", rollName: "Огірок з тунцем", rollPrice: "45", plateColor: "Green", rollIngredients: "Огірок, тунець гриль, сир" },
				{ rollNumber: "Roll 71", rollName: "Авокадо з тунцем", rollPrice: "45", plateColor: "Green", rollIngredients: "Авокадо, тунець гриль, сир" },
				{ rollNumber: "Roll 72", rollName: "Креветка в темпурі з лососем", rollPrice: "50", plateColor: "Purple", rollIngredients: "Креветка в темпурі, лосось гриль, сир" },
				{ rollNumber: "Roll 73", rollName: "Лосось з лососем", rollPrice: "55", plateColor: "Purple", rollIngredients: "Лосось, лосось гриль, сир" }
			]
		},
		uramak_philadelphia_cheese: {
			title: "Uramak \"Philadelphia Cheese\" (8 шт)",
			description: "Начинка розміщена всередині, а зовнішній шар складається з рису. Багато сиру. Верх покритий сиром.",
			imageUrl: 'img/Photo/PC.png',
			items: [
				{ rollNumber: "Roll 74", rollName: "Сурімі", rollPrice: "35", plateColor: "Red", rollIngredients: "Сурімі, кампйо, сир" },
				{ rollNumber: "Roll 75", rollName: "Лосось", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось, авокадо, сир" },
				{ rollNumber: "Roll 76", rollName: "Лосось копчений", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось копчений, ошінко, сир" },
				{ rollNumber: "Roll 77", rollName: "Креветка в темпурі", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, авокадо, сир" },
				{ rollNumber: "Roll 78", rollName: "Лосось в темпурі", rollPrice: "45", plateColor: "Green", rollIngredients: "Лосось в темпурі, авокадо, сир" }
			]
		},
		uramak_caterpillar: {
			title: "Uramak \"Caterpillar\" (8 шт)",
			description: "Начинка розміщена всередині, а зовнішній шар складається з рису. Верх покритий авокадо або манго.",
			imageUrl: 'img/Photo/Cat2.png',
			items: [
				{ rollNumber: "Roll 79", rollName: "Лосось з авокадо", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось, авокадо, огірок, сир" },
				{ rollNumber: "Roll 80", rollName: "Лосось з манго", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось, манго, кампйо, сир" },
				{ rollNumber: "Roll 81", rollName: "Лосось копчений з авокадо", rollPrice: "45", plateColor: "Green", rollIngredients: "Лосось копчений, авокадо, огірок, сир" },
				{ rollNumber: "Roll 82", rollName: "Лосось копчений з манго", rollPrice: "45", plateColor: "Green", rollIngredients: "Лосось копчений, манго, огірок, сир" },
				{ rollNumber: "Roll 83", rollName: "Тунець з авокадо", rollPrice: "45", plateColor: "Green", rollIngredients: "Тунець, авокадо, огірок, сир" },
				{ rollNumber: "Roll 84", rollName: "Креветка в темпурі з авокадо", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, авокадо, огірок, сир" },
				{ rollNumber: "Roll 85", rollName: "Креветка в темпурі з манго", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, кампйо, сир" }
			]
		},
		uramak_max: {
			title: "Uramak \"Max\" (6 шт)",
			description: "Великий ролл. Начинка розміщена всередині, а зовнішній шар складається з рису, посипаного сезамом або масаго/тобіко (ікра).",
			imageUrl: 'img/Photo/UM.png',
			items: [
				{ rollNumber: "Roll 86", rollName: "Веге", rollPrice: "30", plateColor: "Red", rollIngredients: "Огірок, авокадо, ошінко, кампйо, гриби шиітаке, сир, сезам" },
				{ rollNumber: "Roll 87", rollName: "Сурімі", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Сурімі, огірок, кампйо, сир, сезам" },
				{ rollNumber: "Roll 88", rollName: "Лосось", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось, огірок, авокадо, сир, сезам" },
				{ rollNumber: "Roll 89", rollName: "Лосось копчений", rollPrice: "45", plateColor: "Green", rollIngredients: "Лосось копчений, огірок, ошінко, сир, масаго/тобіко" },
				{ rollNumber: "Roll 90", rollName: "Тунець", rollPrice: "45", plateColor: "Green", rollIngredients: "Тунець, огірок, ошінко, сир, масаго/тобіко" },
				{ rollNumber: "Roll 91", rollName: "Креветка в темпурі", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, огірок, авокадо, сир, масаго/тобіко" },
				{ rollNumber: "Roll 92", rollName: "Паста з тунця", rollPrice: "45", plateColor: "Green", rollIngredients: "Паста з тунця, огірок, ошінко, сир, масаго/тобіко" }
			]
		},
		volcano: {
			title: "Volcano (8 шт)",
			description: "Начинка розміщена всередині, а зовнішній шар складається з рису. Зверху викладається тартар, рибна ікра або Goma Wakame.",
			imageUrl: 'img/Photo/V.png',
			items: [
				{ rollNumber: "Roll 93", rollName: "Сурімі Goma Wakame", rollPrice: "35", plateColor: "Red", rollIngredients: "Сурімі, Goma Wakame, огірок, сир" },
				{ rollNumber: "Roll 94", rollName: "Авокадо Goma Wakame", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Авокадо, Goma Wakame, огірок, сир" },
				{ rollNumber: "Roll 95", rollName: "Креветка в темпурі з тартаром з лосося", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, тартар з лосося, авокадо, сир" },
				{ rollNumber: "Roll 96", rollName: "Креветка в темпурі з Goma Wakame", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, Goma Wakame, авокадо, сир" },
				{ rollNumber: "Roll 97", rollName: "Креветка в темпурі з тобіко", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, тобіко, авокадо, сир" },
				{ rollNumber: "Roll 98", rollName: "Лосось з тобіко", rollPrice: "45", plateColor: "Green", rollIngredients: "Лосось, тобіко, авокадо, сир" },
				{ rollNumber: "Roll 99", rollName: "Лосось копчений з тобіко", rollPrice: "50", plateColor: "Blue", rollIngredients: "Лосось копчений, тобіко, огірок, сир" },
				{ rollNumber: "Roll 100", rollName: "Тунець з Goma Wakame", rollPrice: "50", plateColor: "Blue", rollIngredients: "Тунець, Goma Wakame, авокадо, сир" },
				{ rollNumber: "Roll 101", rollName: "Тунець з тобіко", rollPrice: "50", plateColor: "Blue", rollIngredients: "Тунець, тобіко, авокадо, сир" }
			]
		},
		datemaki: {
			title: "Datemaki (6 шт)",
			description: "Роли загорнуті не в норі, а в солодкий яєчний омлет.",
			imageUrl: 'img/Photo/D2.png',
			items: [
				{ rollNumber: "Roll 106", rollName: "Сурімі", rollPrice: "40", plateColor: "Red", rollIngredients: "Сурімі, огірок, ошінко, сир" },
				{ rollNumber: "Roll 107", rollName: "Крабовий салат", rollPrice: "40", plateColor: "Red", rollIngredients: "Крабовий салат, сир" },
				{ rollNumber: "Roll 108", rollName: "Лосось", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Лосось, авокадо, огірок, сир" },
				{ rollNumber: "Roll 109", rollName: "Грильований лосось солодкий", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Грильований лосось солодкий, груша, огірок, сир" },
				{ rollNumber: "Roll 110", rollName: "Грильований лосось гострий", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Грильований лосось гострий, огірок, ошінко, сир" },
				{ rollNumber: "Roll 111", rollName: "Татар з лосося", rollPrice: "40", plateColor: "Yellow", rollIngredients: "Татар з лосося, сир" },
				{ rollNumber: "Roll 112", rollName: "Креветка в темпурі", rollPrice: "45", plateColor: "Green", rollIngredients: "Креветка в темпурі, авокадо, огірок, сир" }
			]
		},
		sashimi_roll: {
			title: "Sashimi roll (8 шт)",
			description: "Начинка загорнута в рисовий папір. Без рису.",
			imageUrl: 'img/Photo/SR2.png',
			items: [
				{ rollNumber: "Roll 113", rollName: "Вегетаріанський", rollPrice: "30", plateColor: "Green", rollIngredients: "Goma Wakame, огірок, авокадо, ошінко, кампйо, гриби шітаке, салат, сир" },
				{ rollNumber: "Roll 114", rollName: "Лосось", rollPrice: "50", plateColor: "Red", rollIngredients: "Лосось, огірок, авокадо, ошінко, кампйо, салат, сир" },
				{ rollNumber: "Roll 115", rollName: "Креветка в темпурі", rollPrice: "60", plateColor: "Yellow", rollIngredients: "Креветка в темпурі, огірок, авокадо, ошінко, кампйо, салат, сир" },
				{ rollNumber: "Roll 116", rollName: "Тунець", rollPrice: "60", plateColor: "Yellow", rollIngredients: "Тунець, огірок, авокадо, ошінко, кампйо, салат, сир" },
				{ rollNumber: "Roll 117", rollName: "Мікс риб", rollPrice: "60", plateColor: "Yellow", rollIngredients: "Мікс риб, огірок, авокадо, ошінко, кампйо, салат, сир" },
				{ rollNumber: "Roll 118", rollName: "Умамі", rollPrice: "65", plateColor: "Orange", rollIngredients: "Татар з лосося, креветка в темпурі, авокадо, сир, Табаско" }
			]
		},
		appetizers: {
			title: "Закуски",
			imageUrl: 'logo/Neon.svg',
			items: [
				{ rollName: "Салат Goma Wakame", plateColor: "White", rollPrice: "18" },
				{ rollName: "Чіпси з креветок (15 шт)", plateColor: "White", rollPrice: "18" },
				{ rollName: "Онiгірі (8 шт)", plateColor: "White", rollPrice: "18", description: "кульки рису обваляні в кунжуті (8шт)" },
				{ rollName: "Овочі в темпурі", plateColor: "Red", rollPrice: "30" },
				{ rollName: "Салат крабовий", plateColor: "Orange", rollPrice: "35" },
				{ rollName: "Кальмари в темпурі (7 шт)", plateColor: "Yellow", rollPrice: "40" },
				{ rollName: "Креветка в темпурі (5 шт)", plateColor: "Green", rollPrice: "45" },
				{ rollName: "Лосось в темпурі (6 шт)", plateColor: "Green", rollPrice: "45" },
				{ rollName: "Мікс риб в темпурі (6 шт)", plateColor: "Green", rollPrice: "45" },
				{ rollName: "Тартар з лосося", plateColor: "Purple", rollPrice: "55" }
			]
		},
	}
};

//працює
