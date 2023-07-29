//! Number
// console.log(typeof 12);
//? Number tipiga o'tish
// const str = "12b3.5$";
// console.log(typeof +str);
// console.log(typeof Number(str));
// console.log(typeof Number.parseInt(str));
// console.log(Number.parseInt(str));
// console.log(Number.parseFloat(str));
//?
// console.log(+str);
// console.log(Number(str));
// console.log(Number.parseInt(str));
// console.log(Number.parseFloat(str));

//? _
// let num1 = 1000000;
// let num2 = 1_000_000;
// console.log(num1 + 2);
// console.log(num2 + 2);

//? e
// let num1 = 2200000;
// let num2 = 2.2e-6;
// console.log(num2);

//? toFixed => string
// let num1 = 2.3456789;
// console.log(+num1.toFixed(2));

//? toPrecision => string
// let num1 = 2.3456789;
// console.log(+num1.toPrecision(3));

//? 2=>10, 10=>2
// let num1 = 1001;
// let result1 = parseInt(num1, 2);
// console.log(result1);
// let num2 = 9;
// let result2 = num2.toString(2);
// console.log(+result2);

//? isNaN()
// console.log(isNaN(NaN));
// console.log(isNaN(10));
// console.log(isNaN("salom"));

//? ==, === Object.is
// console.log(Object.is(23, "23"));
// console.log(Object.is(23, 23));

//? Math
// console.log(Math.PI);
//? abs() => modul
// console.log(Math.abs(-7));
// console.log(Math.abs(7));
// console.log(Math.abs(0));
//? pow(son, daraja) => daraja
// console.log(Math.pow(2, 5));
//? sqrt()
// 16 => 4
// 9 => 3
// 25 => 5
// console.log(Math.sqrt(16));
//? round() => yaxlitlaydi
// console.log(Math.round(4.5));
// console.log(Math.round(4.6));
// console.log(Math.round(4.49));
//? trunc() => butun qismini oladi
// console.log(Math.trunc(4.56));
// console.log(Math.trunc(4.999999999999999));
// console.log(Math.trunc(4.00000000000000001));
//? ceil() => yaxlitlaydi, yuqoriga
// console.log(Math.ceil(4.00000000000001));
// console.log(Math.ceil(4.99999999999999));
//? floor() => yaxlitlaydi, pastga
// console.log(Math.floor(4.999));
// console.log(Math.floor(4.00001));
// console.log(Math.floor(4.888)); // 4
// console.log(Math.trunc(4.888)); // 4
// console.log(Math.ceil(4.888)); // 5
// console.log(Math.round(4.888)); // 5

//? sign()
// console.log(Math.sign(-10)); // -1
// console.log(Math.sign(10)); // 1
// console.log(Math.sign(0)); // 0
// console.log(Math.sign(-0)); // -0

//? random() => [0 ..... 1)
// console.log(Math.random());

// 1 - 10 => 10 - 1 + 1
// console.log(Math.trunc(Math.random() * 10 + 1)); // 0 - 9.9999999999999999 => 1 - 10``

// 25 - 50 => 50 - 25 + 1
// console.log(Math.trunc(Math.random() * 26 + 25)); // 0 - 25 + 25 => 25 - 50

// const randomNumberGenerator = (a, b) => Math.trunc(Math.random() * (b - a + 1)) + a
// console.log(randomNumberGenerator(2, 10));