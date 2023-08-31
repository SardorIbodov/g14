// class User {
// 	constructor(login, password) {
// 		this.login = login;
// 		this.password = password;
// 	}
// }

// const user1 = new User("web", 2003);
// console.log(user1);

// class Foydalunuvchi extends User {
// login = login
// pw = pw
// lv = lv
// constructor(login, password, level) {
// 	super(login, password);
// 	this.level = level;
// }
// };
// let foydalunuvchi1 = new Foydalunuvchi("front", 2000, "intermediate");
// console.log(foydalunuvchi1);

// class Car {
//   constructor(engine, year) {
//     this.engine = engine;
//     this.year = year;
//   }
// }
// class Ravon extends Car {
//   constructor(engine, year, color) {
//     super(engine, year);
//     this.color = color;
//   }
// }
// let gentra = new Ravon(1.5, 2022, "black");
// console.log(gentra);

//! Static o'zgaruvchi va static metod
// class Car {
//   engine = 1.5;
//   year = 2022;
//   static narxi = 10000;
//   getInfo() {
//     console.log(
//       `${this.year} yili ishlab chiqarilgan, ${this.engine} motorli, ${Car.narxi}$ li mashina`
//     );
//   }
//   static getPrice() {
//     console.log(this.narxi);
//   }
// }
// let car = new Car();
// console.log(car);
// car.getPrice();
// car.getInfo();
// console.log(Car.narxi);
// Car.getPrice();

//!
// class MyArray extends Array {};
// let myArray = new MyArray();
// myArray.push("Bilol");
// console.log(myArray);

//!
// class MyString extends String {}
// let myString = new MyString();
// myString = myString.concat("Salom", "Dunyo");
// console.log(myString);

//! Mixins => Class ga object ni biriktirish
// class Car {
//   engine = 1.5;
//   year = 2022;
// }
// let object = {
//   name: "Mercedes",	
// };
// Object.assign(Car.prototype, object);
// let car = new Car();
// console.log(car.name);
