//! Proxy | Basic
//? new Proxy(object, {})
// let user = {
//   login: "frontend",
//   job: "programmer",
//   _password: 12345,
// };
// let proxyUser = new Proxy(user, {});

//? get(target, prop)
// let proxyUser = new Proxy(user, {
//   get(target, prop) {
//     if (prop.includes("_")) return "Sizni parol olishga huqiqingiz yo'q";
//     else return target[prop];
//   },
// });
// console.log(proxyUser.login); // frontend
// console.log(proxyUser.job); // programmer
// console.log(proxyUser._password); // -

//? set(target, prop, newValue)
// let proxyUser = new Proxy(user, {
//   set(target, prop, newValue) {
//     if (prop === "_password")
//       throw new Error("Siz bu key ni o'zgartira olmaysiz!");
//     else return (target[prop] = newValue);
//   },
// });
// proxyUser._password = 54321;
// console.log(proxyUser);

//! Proxy | Advanced
//? ownKeys(target)
// let proxyUser = new Proxy(user, {
//   ownKeys(target) {
//     let array = Object.keys(target);
//     array = array.filter((v) => !v.includes("_"));
//     return array;
//   },
// });
// for (let key in proxyUser) {
//   console.log(key);
// }
//? has(target, prop)
// let proxyUser = new Proxy(user, {
//   has(target, prop) {
//     if (prop === "_password") return false;
//     else return prop in target;
//   },
// });
// console.log("job" in proxyUser);
//? deleteProperty(target, prop)
// let proxyUser = new Proxy(user, {
//   deleteProperty(target, prop) {
//     if (prop === "_password") throw new Error("Siz parolni o'chira olmaysiz!");
//     else return delete target[prop];
//   },
// });
// delete proxyUser.job;
// console.log(proxyUser);

//! Reflect
// let user = {
//   login: "frontend",
//   job: "programmer",
//   _password: 12345,
// };
//? get(target, prop)
// console.log(Reflect.get(user, "login"));
// console.log(user.login);
//? set(target, prop, newValue)
// Reflect.set(user, "job", "doctor");
// console.log(user);

