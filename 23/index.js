//! Class => ES6(let, const, destructure, default parameter, class)
//? Object yasab beradigan shablon

//! Syntax
// class User {
//   login = "web";
//   password = 12345;
//   getDetails() {
//     console.log(
//       `Foydalanuvchi logini: ${this.login}, paroli: ${this.password}`
//     );
//   }
// }
// let user1 = new User();
// console.log(user1);
// user1.getDetails();

//! constructor => class dan object yasalganida ishlaydigan birinchi metod
// class User {
//   constructor(userLogin, userPassword, userAge) {
//     this.login = userLogin;
//     this.password = userPassword;
// 		this.age = userAge;
//   }
//   getDetails() {
//     console.log(
//       `Foydalanuvchi logini: ${this.login}, paroli: ${this.password}, yoshi: ${this.age}`
//     );
//   }
// }
// let user1 = new User("backend", 87654321, 30);
// user1.getDetails();
// let user2 = new User("frontend", 12345678, 28);
// user2.getDetails();

// class Car {
// 	currentYear = 2023;
//   constructor(carBrand, carModel, carYear, carEngine, carType) {
//     this.brand = carBrand;
//     this.model = carModel;
//     this.year = carYear;
//     this.engine = carEngine;
//     this.type = carType;
//   }
//   holati() {
// 		if(this.currentYear - this.year <= 1) console.log("Yangi");
// 		else if(this.currentYear - this.year > 1 && this.currentYear - this.year <= 3) console.log("O'rta");
// 		else if(this.currentYear - this.year > 3) console.log("Qoniqarli");
// 	}
// }

// const gentra = new Car("Ravon", "Gentra", 2022, 1.5, "Sedan");
// const cobalt = new Car("Ravon", "Cobalt", 2020, 1.5, "Sedan");
// const captiva = new Car("Chevrolet", "Captiva", 2019, 3, "Krossover");
// console.log(gentra);
// gentra.holati();
// console.log(cobalt);
// cobalt.holati();
// console.log(captiva);
// captiva.holati();

//! getter, setter in class
// class Animal {
//   constructor(animalName, animalChildren) {
//     this.name = animalName;
//     this.children = animalChildren;
//   }
//   get getName() {
//     console.log(this.name);
//   }
//   set setChildren(count) {
//     this.children = count;
//   }
// }
// const dog = new Animal("Kuchuk", 5);
// dog.getName;
// console.log(dog.children);
// dog.setChildren = 8;
// console.log(dog.children);

// class BankAccount {
//   #money = 20_000_000;
//   get getMoney() {
//     console.log(this.#money);
//   }
//   set changeMoney(newMoney) {
//     this.#money = newMoney;
//   }
// }

// const bankAccount = new BankAccount();
// console.log(bankAccount);
// bankAccount.getMoney;
// bankAccount.changeMoney = 10_000_000;
// bankAccount.getMoney;

//! Inheritance => meros olish (class dan class ga)
// class Animal {
//   constructor(animalName, animalAge, animalColor) {
//     this.animalName = animalName;
//     this.age = animalAge;
//     this.color = animalColor;
//   }
//   voice() {
//     console.log(`I am a/an ${this.animalName}`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, color, sound) {
//     super(name, age, color);
//     this.sound = sound;
//   }
// }
// let cat = new Cat("cat", 4, "white", "meow");
// console.log(cat);
// cat.voice();

// class Dog extends Animal {
//   constructor(name, age, color, hasTail) {
//     super(name, age, color);
//     this.hasTail = hasTail;
//   }
// }
// let dog = new Dog("dog", 6, "black", true);
// console.log(dog);
// dog.voice();
