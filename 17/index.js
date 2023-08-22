//! Scope
//? Global
//? Block
//? Functional scope

//! 1
// if (true) {
//   let b = 10;
//   window.a = 10;
// }
// console.log(a); // global
// console.log(b); // local, block

//! 2
// function getData() {
//   let a = 10;
//   var b = 20;
//   window.c = 30;
// }
// getData();
// console.log(a); // block
// console.log(b); // functional
// console.log(c); // global

//! var => functional scope
//! let => block scope
//! window, globalThis => global scope

// console.log(globalThis); => JS 
// console.log(window); => HTML
// console.log(global); // => NodeJS

//! Closure
// let a = 10;
// function getData() {
// 	let a = 20
// 	console.log(a); // {local: {a: 20}, global: {a : 10}}
// }
// getData();
