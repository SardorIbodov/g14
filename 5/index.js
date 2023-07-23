//! while
// 1 - 100
// let i = 1;
// while (i <= 100) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 1;
// while (i <= 100) {
//   if (i === 50) break;
//   console.log(i);
//   i++;
// }

// let i = 1;
// while(i >= 100) {
// 	console.log(i);
// 	i--;
// }

// let i = 100;
// while(i <= 50) {
// 	console.log(i);
// 	i--;
// }

// let i = 1000;
// while (i >= 100) {
//   if (i < 500) break;
//   console.log(i);
//   i++;
// }

// let i = 100;
// while (i >= 100) {
//   if (i < 500) break;
//   console.log(i);
//   i--;
// }

// let i = 50;
// while (i <= 100) {
//   console.log(i);
//   if (i < 500) break;
//   i++;
// }

// let i = 50;
// while (i <= 100) {
// 	i--;
//   console.log(i);
//   if (i > 500) break;
// }

// let i = 150;
// while (i >= 100) {
// 	i--;
//   console.log(i);
//   if (i > 50) break;
// }

// let i = 250;
// while (i >= 20) {
// 	i++;
//   console.log(i);
//   if (i > 50) break;
// }

// let i = 50;
// while (i >= 200) {
// 	i++;
//   console.log(i);
//   if (i > 10) break;
// }

//! cheksiz
//? white(condition) => condition faqat true bo'lsa
//? iterator o'zgarmasa

// let i = 100;
// while(true) {
// 	console.log(i);
// 	if(i === 50) break;
// 	i--;
// } // 100 - 50

//! do while
// let i = 20;
// do {
// 	console.log(i); // 20, 19, ..., 12, 11
// 	i--;
// } while(i > 10)

// 1) 20 => 19
// 2) 19 => 18
// ...

// .) 11 => 10

// 1 - 100 => 1 + 2 + 3 + 4 + 5 + ... + 100
// let sum = 0;
// let a = 1;
// do {
// 	sum += a;
// 	a++;
// } while(a <= 100)
// console.log(sum);

//! for(boshlangich, shart, qadam)
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }
// let j = 0;
// do {
//   j++;
//   console.log(j);
// } while (j <= 99);

// for(let i = 1; i <= 100; i++) {
// 	if(i % 2 === 0) console.log(i);
// }

// for(let i = 1; i <= 100; i++) {
// 	console.log(i);
// 	if(i === 50) break;
// }

// for(let i = 1; i <= 100; i++) {
// 	if(i === 50) continue;
// 	console.log(i);
// }

// for(let i = 1; i <= 100; ) {
// 	console.log(i);
// }

// for(let i = 1; ; i++) {
// 	console.log(i);
// }

// for(let i; i < 100 ; i++) {
// 	console.log(i);
// }

// for(;;) {
// 	console.log("ishladi");
// }

// let count = 0;
// for (;;) {
// 	if(count === 10) break;
//   console.log("ishladi");
// 	count++;
// }

// Tub sonlar => 2, 3, 5, 7, 11, 13, 17, 19, 23, ... 100 => 100 gacha bo'lgan tub sonlarni chiqaring
// for (let i = 1; i <= 100; i++) {
//   let count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count <= 2 && i !== 1) {
//     console.log(i);
//   }
// }

// for (let i = 100; i <= 200; i++) {
//   let count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count > 2) {
// 		console.log(i);
// 	}
// }

// Homework
//! 2
// a = 10
// b = 20
// 10 11 12 13 ... 20
// 19 18 ... 11
// let a = 10,
//   b = 20;
// for (let i = a; i <= b; i++) {
//   console.log(i);
// }
//! 3
// let a = 10, b = 20;
// for(let i = b - 1; i > a; i--) {
// 	console.log(i);
// }

// for(let i = 1; i < 20; i++) {
// 	console.log(i);
// }

// let narxi = 10000;
// 1kg => .... 10000 * 1
// 2kg => .... 10000 * 2
// 3kg => .... 10000 * 3
// 4kg => ....
// 5kg => ....
// 6kg => ....
// 7kg => ....
// 8kg => ....
// 9kg => ....
// 10kg => .... 10000 * 10

// for(let i = 1; i <= 10; i++) {
// 	console.log(i * narxi);
// }

// let i = 1;
// while(i <= 10) {
// 	console.log(i * narxi);
// 	i++;
// }

// let i = 1;
// do {
// 	console.log(i * narxi);
// 	i++;
// } while(i <= 10)