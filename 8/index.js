//! Shallow copy vs Deep copy
// let obj = {
// 	title: "Webbrain Academy",
// 	location: "Tashkent",
// 	info: {
// 		room: {
// 			area: 100,
// 			table: 20
// 		},
// 		capacity: 30,
// 	}
// }
//? Shallow copy
//? 1
// let obj2 = {};
// Object.assign(obj2, obj);
// obj.title = "WBA";
// obj.info.room = 10;
// console.log(obj2);
//? 2
// let obj2 = {...obj};
// obj.title = "WBA";
// obj.info.room = 10;
// console.log(obj2);
//? Deep copy
// let obj2 = structuredClone(obj);
// obj.title = "WBA";
// obj.info.room.table = 10;
// console.log(obj2);

//! Object in object
// let grandfather = {
// 	name: "Eshmat",
// 	age: 80,
// 	child: {
// 		name: "Toshmat",
// 		age: 50,
// 		child: {
// 			name: "Xolmat",
// 			age: 20, 
// 			child: {
// 				name: "some",
// 				age: 1
// 			}
// 		}
// 	}
// }
// const sumAge = (obj) => {
// 	let result = 0;
// 	while(obj) {
// 		result += obj.age;
// 		obj = obj.child;
// 	}
// 	return result;
// }
// console.log(sumAge(grandfather));

//! Example
// const obj1 = {name: "webbrain"};
// const obj2 = obj1;
// obj1.name = "wba";
// console.log(obj2);

//! Garbage collection
// let obj1 = {name: "webbrain"};
// obj1 = 2;
// console.log(obj1);

//! Function inside object
// const sayHi = (name) => console.log(`Hello ${name}`);
// let user = {
// 	name: "Eshmat",
// 	salomBer: sayHi,
// }
// user.salomBer(user.name);

//! Arrow functionda this ishlamaydi
// const arrow = () => {
// 	let a = 1;
// 	console.log(this);
// }
// arrow();
// function arrow() {
//   return {
//     a: 1,
//     showThis() {
//       console.log(this);
//     },
//   };
// }
// arrow().showThis();

//! Symbol
// const symbol = Symbol("key");
// let obj = {
//   [symbol]: 12345,
// };
// console.log(obj[symbol]);

//! Destructure => qayta struktura qurish
// let name = "WBA";
// let user = {
//   name: "Eshmat",
//   surname: "Toshmatov",
//   age: 19,
//   isStudent: false,
//   info: {
//     weight: 65,
//     height: 175,
//   },
// };
// let {
//   name: newName,
//   surname,
//   age,
//   isStudent,
//   info: { weight, height },
// } = user;
// let name = user.name
// let surname = user.surname
// let age = user.age
// let isStudent = user.isStudent

// console.log(`Webbrain o'quvchisi ${newName} ${surname}, ${age} yoshli bola`);
// console.log(weight);
// console.log(height);

//! Practice
// let grandfather = {
//   name: "Eshmat",
//   age: 80,
//   child: {
//     name: "Toshmat",
//     age: 50,
//     child: {
//       name: "Xolmat",
//       age: 20,
//     },
//   },
// };
// let {
//   name,
//   age,
//   child: {
//     name: childName,
//     age: childAge,
//     child: { name: grandChildName, age: grandChildAge },
//   },
// } = grandfather;
// console.log(name);
// console.log(age);
// console.log(childName);
// console.log(childAge);
// console.log(grandChildName);
// console.log(grandChildAge);

//! Optional chaining => ?
// let user = {
//   name: "Eshmat",
//   surname: "Toshmatov",
//   age: 19,
//   isStudent: false,
//   info: {
//     weight: 65,
//     height: 175,
//   },
// };
// console.log(user.age.weight);
// console.log(user.age.weight?.height);

//! keys, values, entries
// let user = {
//   name: "Eshmat",
//   surname: "Toshmatov",
//   age: 19,
//   isStudent: false,
//   info: {
//     weight: 65,
//     height: 175,
//   },
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
