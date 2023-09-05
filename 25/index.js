// class MyArray extends Array {};
// let myArray = new MyArray();
// myArray.push("Bilol");
// console.log(myArray instanceof Array);
// console.log(myArray instanceof String);
// console.log(myArray instanceof Object);

//! Error handling => Error larni nazorat qilish
//! try-catch
//?
// try {
// console.log(a);
// } catch (error) {
// console.log(error.message);
// console.log(error.name);
// console.log(error.stack);
// console.log(error);
// }
// console.log(1);
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
//? error paramater
//? message
//? name
//? stack
// try {
//   let obj = JSON.parse(`{name: "Webbrain"}`);
//   console.log(obj);
// } catch (error) {
//   console.log("Nimadir xato ketdi!");
//   console.log(error.message, "message");
//   console.log(error.name, "name");
//   console.log(error.stack, "stack");
// }
// console.log(1);
// console.log("salom");

//! throw new Error(message) => error yasash
// console.log(1);
// try {
// 	throw new Error("Error yasaldi");
// } catch(error) {
// 	console.log(error);
// }
// console.log(2);

// let base = {
//   bilol: {
//     login: "bilol",
//     password: 1234,
//   },
//   ulugbek: {
//     login: "ulugbek",
//     password: 4321,
//   },
//   hojiakbar: {
//     login: "hojiakbar",
//     password: 2143,
//   },
// };
//! callback
// const loginFunction = (lg, ps, callback) => {
//   console.log("started...");
//   setTimeout(() => {
//     if (base.ulugbek.login === lg && base.ulugbek.password === ps) {
//       console.log("Saytga xush kelibsiz!");
//       callback(base.bilol.login);
//     } else {
//       console.log("Parol yoki login xato!");
//       callback(base.bilol.login);
//     }
//   }, 2000);
// };
// loginFunction("ulugbek", 4321, (password) => {
//   console.log("finished...");
//   console.log(password);
// });
//! promise
//? then
//? catch
//? finally
// console.log("started");
// let login = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (base.ulugbek.login === "ulugbek" && base.ulugbek.password === 4321) {
//       resolve("Saytga xush kelibsiz!");
//     } else {
//       reject("Parol yoki login xato!");
//     }
//   }, 1000);
// });
// login
//   .then((message) => console.log(message))
//   .then(() => console.log("2-then"))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finished..."));
//! Promise.all([])
// console.log("started...");
// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (base.ulugbek.login === "ulugbek" && base.ulugbek.password === 4321) {
//         resolve("Saytga xush kelibsiz!");
//       } else {
//         reject("Parol yoki login xato!");
//       }
//     }, 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (base.bilol.login === "bilol" && base.bilol.password === 1234) {
//         resolve("Saytga xush kelibsiz!");
//       } else {
//         reject("Parol yoki login xato!");
//       }
//     }, 1000);
//   }),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finished..."));
//! async-await
// let login = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (base.ulugbek.login === "ulugbek" && base.ulugbek.password === 4321) {
//       resolve("Saytga xush kelibsiz!");
//     } else {
//       reject("Parol yoki login xato!");
//     }
//   }, 1000);
// });
// async function loginFunction() {
//   console.log("started...");
//   let message = await login;
//   console.log(message);
//   console.log("finished...");
// }
// loginFunction();
// const loginFunction = async () => {
//   console.log("started...");
//   let message = await login;
//   console.log(message);
//   console.log("finished...");
// };
// loginFunction();
// const loginFunction = async () => {
//   console.log("started...");
//   let message = await 1;
//   console.log(message);
//   console.log("finished...");
// };
// loginFunction();
