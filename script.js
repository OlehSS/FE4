// Задача 1

let d = Number(7);

console.log(d);
console.log(d ** 2);
console.log(d ** 3);

// Задача 2

let x = Number(prompt('Enter the number'))

if(x > 0){
    console.log(x ** 2);
}
else if(x <= 0){
    console.log('Ноль или меньше');
}

// Задача 3

let a = Number(prompt('Enter first number'));
let b = Number(prompt('Enter second number'));

if(a > b){
    console.log(a + b);
}
if(a < b){
    console.log(a * b);
}
else if(a == b){
    console.log('Чила одинаковые');
}

// Задача 4

let g = Number(prompt('Enter the number'))

if(g < 0){0
    console.log(g ** 2);
}
else if(g >= 0){
    console.log('Ошибка');
}

// Задача 5

let t = Number(prompt('Введите количество учеников в классе'));
let j = Number(prompt('Введите количество стульев в кабинете'));

if(j >= t){
    console.log('Стульев хватает');
}
else if(j < t){
    console.log('Стульев не хватает');
}