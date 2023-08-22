//! Recursion => funksiya ichida o'zini chaqirish
//? 1 - n gacha bo'lgan sonlar yig'indisi
// const n = 10;
// const sum = (n) => {
// 	let result = 0;
// 	for(let i = 1; i <= n; i++) {
// 		result += i;
// 	}
// 	return result;
// }
// console.log(sum(n));

// const sum = (n) => {
// 	if(n === 1) return 1;
// 	else return n + sum(n - 1);
// }
// console.log(sum(n));

//? 1, n = 10
//? return 10 + sum(9)

//? 2, n = 9
//? return 10 + 9 + sum(8)

//? 3, n = 8
//? return 10 + 9 + 8 + sum(7)

//? ...

//? 10, n = 1
//? return 10 + 9 + 8 + ... + 2 + sum(1)

//? n faktorial
// const factorial = (n) => {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// };
// console.log(factorial(5)); // 1 * 2 * 3 * 4 * 5 => 120

//? task
// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };
// const totalSalary = (company) => {
//   if (Array.isArray(company)) {
//     console.log("Array");
//     return company.reduce((v, c) => v + c.salary, 0);
//   } else {
//     console.log("object");
//     let sum = 0;
//     for (let subItem of Object.values(company)) {
//       sum += totalSalary(subItem);
//     }
//     return sum;
//   }
// };
// console.log(totalSalary(company));

//! Fibonacci
// const fibonacci = (n) => {
// 	if(n < 1) return 1;
// 	else return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci());

// 1
// f(4) + f(3)
// 2
// f(3) + f(2) + f(2) + f(1)
// 3
// f(2) + f(1) + f(1) + 1 + f(1) + 1 + f(1)
// 4
// f(2) + 4 * f(1) + 1 + 1
// f(1) + f(0) + 4 * f(1) + 1 + 1
// 5
// 5 * f(1) + 2 + 1
// 5 * (f(0) + f(-1)) + 2 + 1
// 5 * (1 + 1) + 2 // 12 + 1 = 13