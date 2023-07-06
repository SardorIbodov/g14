//! JS ni Compile
//? 1 => HTML
// console.log("Hello World");
//? 2 => Node
// console.log("Hello World");
//? 3 => Online compiler

//! O'zgaruvchi
//! let => yangi ES6
//! var => eski
//! const => o'zgarmas
//? 1
// console.log(1+2);
//? 2
// let a = 1;
// let b = 2;
// console.log(a + b);
// var a = 1;
// var b = 2;
// console.log(a + b);
// const a = 1;
// a = 3;
// const b = 2;
// console.log(a + b);
//? 3
// let a = 1, b = 2;
// console.log(a + b);
//? O'zgartirish
// let name = "Webbrain";
// name = "WEBBRAIN";
// console.log(name);

//! Nomlash qoidalari
//? Oldindan band qilingan so'zlar (reserved keywords)
//? Probel
//? -, +, /, *

//! typeof
// console.log(typeof rost);
// console.log(typeof yolgon);
// console.log(typeof 1);
// console.log(typeof 1n);

//! Data Types
//? Number (-9007199254740992) ~ (+9007199254740992)

//? BigInt (oxirida n)
// let a = 9007199254740992n;
// let b = 5n;
// let c = 2;
// console.log(a + c);

//? Boolean (Mantiqiy)
// let rost = true;
// let yolgon = false;

//? String
// let hello1 = "Assalomu 'alaykum' 1+1";
// let hello2 = 'Assalomu "alaykum" 1+1';
// let hello3 = `"Assalomu" 'alaykum' ${1+1}`; // Yangi
// console.log(hello1);
// console.log(hello2);
// console.log(hello3);
// console.log(typeof hello1);
// console.log(typeof hello2);
// console.log(typeof hello3);

//? Null
// let empty = null;
// console.log(empty);
// console.log(typeof empty);

//? Undefined
// let un;
// console.log(un);

//? Symbol => (Yagona id yaratish uchun)
// let sym1 = Symbol("id");
// let sym2 = Symbol("id");
// console.log(sym1 === sym2);

//? Object
//? object
// let student = {name: "Ism", age: 18, isEmployed: true};
//? array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = [1, "2", true, false, undefined, {}, []];
// console.log(arr);
// console.log(numbers);
//? function
// function sayHello() {
// 	console.log("salom");
// }
// sayHello()

//! Practice
// let a = 1; // a = 1
// let b = a; // b = 1
// a = 2; // a = 2
// console.log(a); // 2
// console.log(b); // 1

// let obj1 = {age: 20}; //  obj1 => age = 20
// let obj2 = obj1; // obj2 => age = 24
// obj1.age = 24; // obj1 => age = 24
// console.log(obj1, "object 1");
// console.log(obj2, "object 2");
