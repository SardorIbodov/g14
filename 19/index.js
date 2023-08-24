//! Sinxron kod
// console.log(1);
// console.log(2);
// console.log(3);

//! Asinxron kod
//? asinxron kod
//? ...
//? ...
//? ...
//? ...

//! setTimeout(() => {}, time)
// setTimeout(() => {
//   console.log(1);
// }, 5000);
// console.log("webbrain");

//! savollar
// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
//! event loop

//! setInterval
// let i = 0;
// setInterval(() => {
//   i++;
//   console.log(i);
// }, 1000);

//! soat
// let h = 0;
// let m = 0;
// let s = 0;
// setInterval(() => {
//   s++;
//   if (s === 60) {
//     m++;
//     s = 0;
//   }
//   if (m === 60) {
//     h++;
//     m = 0;
//   }
//   console.log(`${h}:${m}:${s}`);
// }, 1000);

//! clearInterval, clearTimeout
// let i = 0;

// let interval = setInterval(() => {
//   i++;
//   console.log(i);
// 	if(i >= 5) clearInterval(interval)
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 30 * 1000);

// let after2 = setTimeout(() => {
//   console.log(2);
// 	clearTimeout(after2);
//   console.log(3);
// }, 2000);
