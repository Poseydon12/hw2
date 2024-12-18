let celsius = 25;
let fahrenheit = (celsius * 1.8) + 32;
console.log(`Температура в Фаренгейтах: ${fahrenheit}`);

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин у місяці: ${hoursInMonth}`);
console.log(`Кількість хвилин у місяці: ${minutesInMonth}`);

let health = 100;
let energy = 100;
health -= 20;
energy -= 15;
console.log(`Рівень здоров'я: ${health}`);
console.log(`Рівень енергії: ${energy}`);

let purchaseAmount = 200;
let discount = 0.1;
let finalAmount = purchaseAmount * (1 - discount);
console.log(`Сума покупки після знижки: ${finalAmount}`);

let floatNumber = 7.8;
let flooredNumber = Math.floor(floatNumber);
console.log(`Округлене число: ${flooredNumber}`);

let floatString = "3.14";
let parsedFloat = parseFloat(floatString);
console.log(`Перетворене десяткове число: ${parsedFloat}`);

let intString = "42";
let parsedInt = parseInt(intString);
console.log(`Перетворене ціле число: ${parsedInt}`);

let number = 16;
let squareRoot = Math.sqrt(number);
console.log(`Квадратний корінь числа: ${squareRoot}`);

let intValue = 25;
let stringNumber = "30";
let parsedIntFromString = parseInt(stringNumber);
console.log(`Перетворене ціле число з рядка: ${parsedIntFromString}`);
let stringFromInt = intValue.toString();
console.log(`Цілочисельне значення у вигляді рядка: ${stringFromInt}`);
