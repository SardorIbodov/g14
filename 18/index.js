//! old var
//? var: hoisting, scope, < ES6,
//? let: hoisting, scope, ES6  ,
// var a;
// console.log(a); // undefined
// var a = 20;

// let a;
// console.log(a); // Cannot access
// let a = 20;

// console.log(a); // Is not defined

// for(let i = 1; i < 5; i++) {};
// console.log(i);

// for(var i = 1; i < 5; i++) {};
// console.log(i);

// var a = 20;
// if(true) {
// 	var a = 10;
// }
// console.log(a);

// let a = 20;
// if(true) {
// 	let a = 10;
// 	console.log(a, "ichkari");
// }
// console.log(a, "tashqari");

//! IIFE => Immediately invoked function expression
//! => E'lon qilinishi bilan birdaniga yurgizilgan function expression
//? Private o'zgaruvchi e'lon qilish uchun;
// (function () {
// 	var password = 543;
// 	console.log("Ishladi");
// })();
// console.log(password);

//! NFE => Named Function Expression
// const factorial = function factorial2(n) {
//   if (n === 1 || n === 0) return 1;
//   return n * factorial2(n - 1);
// };
// console.log(factorial(5));

//! new Function
// const sayHello = new Function(`let text = "salom"; console.log(text + " dunyo");`);
// sayHello();
// function sayHello() {
// 	let a = 20;
// 	return new Function(`console.log(a)`);
// }
// sayHello()();