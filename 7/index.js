//! Object creation
//? 1 => Literal
// const obj = {name: "Web", title: "IT"};
// console.log(obj);
//? 2 => new Object
// const obj = new Object({name: "Web"});
// console.log(obj);

//! Accessing => elementlariga(keylariga) murojat
// let user = {
// 	name: "Bilol",
// 	id: 2
// }
//? 1 => Static
// console.log(user.name);
// console.log(user.id);
// console.log(user.surname);
//? 2 => Dynamic
// let key1 = "name";
// console.log(user[key1]);
// console.log(user["id"]);
// let title = "name";
// let name = "title";
// let user = {
// 	name: "wba",
// 	title: "webbrain",
// 	class: "g14"
// };
// console.log(user.title); // "webbrain"
// console.log(user[title]); // "wba"
// console.log(user.name); // "wba"
// console.log(user[name]); // "webbrain"

//! Edit, add, delete
// let user = {
// 	name: "wba",
// 	title: "webbrain",
// 	class: "g14"
// };
//? Edit
// console.log(user);
// user.name = "web";
// user["name"] = "WEB";
// console.log(user);
//? Add
// user.id = 1;
// user.age = 18;
// console.log(user);
//? Delete
// delete user.title;
// console.log(user);

//! Object.freeze()
// let student = {
// 	name: "Eshmat",
// 	id: 2023,
// 	age: 20,
// }
// Object.freeze(student);
// student.name = "Eshmat1";
// delete student.id;
// student.birthYear = 2003;
// console.log(student);

//! Object.seal()
// let student = {
// 	name: "Eshmat",
// 	id: 2023,
// 	age: 20,
// }
// Object.seal(student);
// student.name = "Eshmat1";
// delete student.id;
// student.birthYear = 2003;
// console.log(student);

//! Clone
// let obj1 = {name: "webbrain"};
// let obj2 = obj1;
// let obj3 = structuredClone(obj1);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

//! Adding
// let obj1 = {id: 1};
// let obj2 = {name: "webbrain"};
// let obj3 = {title: "academy"};
// console.log(obj1 + obj2);
// Object.assign(obj1, obj2, obj3);
// console.log(obj1);
// console.log(obj2);

//! Abbriviation
// let name = "webbrain";
// let founded = 2020;
// let center = {
//   name,
//   founded,
// };
// console.log(center);
// console.log(center.name);
// console.log(center.founded);

//! in
// let key = "birthYear";
// let student = {
// 	name: "Eshmat",
// 	id: 2023,
// 	age: 20,
// 	[key]: 2003
// }
// console.log("birthYear" in student);
//! for-in
// for(let key in student) {
// 	console.log(student[key]);
// }

// let user = {
// 	name: "Eshmat",
// 	age: 18,
// 	surname: "Toshmatov",
// 	isStudent: true,
// }
// for(let key in user) {
// 	if(typeof user[key] === "number") {
// 		console.log(user[key]);
// 	}
// }

// let user = {
// 	name: "Eshmat",
// 	surname: "Toshmatov",
// 	getFullName: function() {
// 		return `${user.name} ${user.surname}`
// 	}
// }
// let user = {
//   name: "Eshmat",
//   surname: "Toshmatov",
//   getFullName() {
//     `${user.name} ${user.surname}`;
//   },
// };
// let user = {
//   name: "Eshmat",
//   surname: "Toshmatov",
//   getFullName: () => `${user.name} ${user.surname}`,
// };
// console.log(user.getFullName());

// let uchburchak = {
// 	balandlik: 5,
// 	tomon: 10,
// 	getArea() {
// 		console.log(uchburchak.balandlik * uchburchak.tomon / 2);
// 	}
// }
// uchburchak.getArea();

// let uchburchak = {
// 	balandlik: 5,
// 	tomon: 10,
// 	getArea() {
// 		console.log(this.balandlik * this.tomon / 2);
// 	}
// }
// let uchburchak2 = uchburchak;
// uchburchak = null;
// uchburchak2.getArea();

// console.log(this);
// let user = {
//   name: "wba",
//   showThis() {
//     console.log(this.name);
//   },
// };
// user.showThis();
