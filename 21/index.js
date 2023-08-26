//! Advanced objects
// let user = {
//   login: "wba",
//   password: 12345,
//   job: "frontend",
// };

//! Object.defineProperty(object, {writable: ..., configurable: ..., enumerable: ...})
//? writable: false
// Object.defineProperty(user, "password", {
//   writable: false,
//   configurable: true,
//   enumerable: true,
// });
// console.log(user);
// user.password = 54321;
// user.login = "WBA";
// console.log(user);
//? configurable: false
// Object.defineProperty(user, "job", {
//   writable: true,
//   configurable: false,
//   enumerable: true,
// });
// console.log(user);
// delete user.job;
// console.log(user);
//? enumerable: false
// Object.defineProperty(user, "login", {
//   writable: true,
//   configurable: true,
//   enumerable: false,
// });
// for (let key in user) {
//   user[key] = +user[key];
// }
// console.log("----------- ");
// console.log(user.login);
// user.login = "WBA";
// console.log(user.login);
// console.log(user);

//! Object.getOwnPropertyDescriptor(object, key)
// console.log(Object.getOwnPropertyDescriptor(user, "login"));

//! Object.preventExtensions(object)
// Object.preventExtensions(user);
// user.status = true;
// console.log(user);
// user.login = "WBA";
// delete user.password;
// console.log(user);

//! getter, setter
// let student = {
// 	firstName: "Muhammadjon",
//   course: 2,
//   major: "Frontend",
// 	_password: 12345,
//   get getData() {
//     console.log(
//       `${this.firstName} ismli student ${this.major} yo'nalishda ${this.course} kursda o'qiydi`
//     );
//   },
// 	get parol() {
// 		console.log(`${this.firstName} ismli studentni paroli: ${this._password}`);
// 	},
// 	set changePassword(newPassword) {
// 		this._password = newPassword;
// 	}
// };
// student.parol;
// student.changePassword = 54321;
// student.parol;

// let uchburchak = {
// 	tomoni: 15,
// 	balandligi: 10,
// 	get yuza() {
// 		console.log(this.tomoni * this.balandligi / 2);
// 	},
// 	set ozgartirish(newTomoni) {
// 		this.tomoni = newTomoni;
// 	}
// }
// uchburchak.yuza; // 75
// uchburchak.ozgartirish = 10;
// uchburchak.yuza // 50