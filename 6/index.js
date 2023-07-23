//! Functions => dynamic, re-usable
//? 1 => Function declarition
// function sayHi() {
// 	console.log("Salom");
// }
// sayHi();
//? 2 => Function expression
// const sayHi = function () {
//   console.log("Salom");
// };
// sayHi();
//? 3 => Arrow function
// const sayHi = () => {
//   console.log("Salom");
// };
// const sayHi = () => console.log("Salom");
// sayHi();

//? Function with parameters
// function sayHi(name, surname) {
//   console.log(`Salom ${name} ${surname}`);
// }
// sayHi("Bilol", "Abdug'ofurov");
// sayHi("Muhammadjon", "Murodullayev");

//? Function with return
// function sayHi(name, surname) {
//   console.log(`Salom ${name} ${surname}`);
// 	return 1;
// 	console.log("Returndan keyin");
// }
// sayHi("Bilol", "Abdug'ofurov");
// console.log(sayHi("Bilol", "Abdug'ofurov"));

//? Shadowed variable
// let a = 5;
// function sayHi() {
// 	let a = 4;
// 	console.log(a);
// }
// console.log(a);
// sayHi()

//? Practice
//! 2ta sondan kattasini topadigan function
// function getMax(a, b) {
// 	if(a > b) return a;
// 	else if(b > a) return b;
// 	else return "Ikkalasi teng!"
// }
// console.log(getMax(1, 2));
// console.log(getMax(4, 2));
// console.log(getMax(5, 5));
//! 2ta sondan kichigini topib unga 2ni qo'shadigan
// function getMin(a, b) {
// 	if(a < b) return a + 2;
// 	else if(b < a) return b + 2;
// 	else return "Ikkalasi teng!"
// }
// console.log(getMin(1, 2));
// console.log(getMin(4, 2));
// console.log(getMin(5, 5));
//! 1 - n ga juft sonlarni topadigan function
// const getEven = (n) => {
// 	for(let i = 1; i <= n; i++) {
// 		if(i % 2 === 0) console.log(i);
// 	}
// }
// getEven(100)
//! n Faktorial
// const factorial = (n) => {
// 	let result = 1;
// 	for(let i = 1; i <= n; i++) {
// 		result *= i;
// 	}
// 	return result;
// }
// console.log(factorial(4));
//! | -4 | = 4, | 4 | = 4, | 0 | = 0, Modul
// function getModule(n) {
// 	if(n >= 0) return n;
// 	else return n * (-1);
// }
// console.log(getModule(-4));
// console.log(getModule(4));
// console.log(getModule(0));

// function getPrime(n) {
// 	for(let i = 1; i <= n; i++) {
// 		let count = 0;
// 		for(let j = 1; j <= i; j++) {
// 			if(i % j === 0) {
// 				count++;
// 			}
// 		}
// 		if(count <= 2 && i !== 1) {
// 			console.log(i);
// 		}
// 	}
// }
// getPrime(100)

//! 1234 => 4321
//! 10 => 01
//! 21 => 12

// const getReversed = (n) => {
// 	let number = n;
// 	let result = 0;
// 	let maxCount = 0; // 3
// 	while(n > 0) {
// 		n = (n - n % 10) / 10;
// 		console.log(n);
// 		maxCount++;
// 	}
// 	for(let i = maxCount - 1; i >= 0; i--) {
// 		let num = number % 10;
// 		number = (number - number % 10) / 10;
// 		result += 10 ** i * num; // 100 * 1 + 10 * 2 + 1 * 3
// 	}
// 	return result;
// }
// // console.log(getReversed(321));

// const toBinary = (number) => {
// 	let result = "";
// 	while(number > 0) {
// 		let qoldiq = number % 2;
// 		result += qoldiq;
// 		number = parseInt(number / 2);
// 	}
// 	let final = "";
// 	for(let i = result.length - 1; i >= 0; i--) {
// 		final += result[i];
// 	}
// 	return final;
// }
// console.log(toBinary(24));
// console.log(toBinary(22));

// function checkAge1(age) {
//   if (age > 18) {
//     return true;
//   } else return console.log("Did parents allow you?");
// }
// function checkAge2(age) {
//   return age > 18 ? true : confirm("Did parents allow you");
// }

// console.log(checkAge2(8));

// const pow = (son, daraja) => {
// 	return son ** daraja;
// }
// console.log(pow(2, 3));

// ?? => nullish 
// || => or 
// && => and
// ! => inkor

