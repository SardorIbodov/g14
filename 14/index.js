//! Destructure => qayta qurish
//! Object
// const name = "Webbrain";
// const user = {
//   name: "eshmat",
//   password: 1234,
//   info: {
//     weight: 70,
//     height: 178,
//   },
// };
// const {
//   name: userName,
//   password,
//   info: { weight, height },
// } = user;
// const {password: pw} = user;
// console.log(pw);
//! Array
// const favourites = ["apple", "banana", "grapes", "melon"];
// const [olma, banan, uzum] = favourites;
// console.log(olma);
// console.log(banan);
// console.log(uzum);
// const [olma, banan, ...others] = favourites; //! rest
// console.log(olma);
// console.log(banan);
// console.log(others);
// const copy = ["biz", ...favourites] //! spread
//! Function
// const welcomeMessage = ([surname, name]) => {
// 	console.log(`${surname} ${name} o'quv markazimizga xush kelibsiz!`);
// };
// welcomeMessage(["Ibodov", "Sardor"]);
// const welcomeMessage = ({ name: newName, surname }) => {
//   let name = "WBA";
//   console.log(`${surname} ${newName} o'quv markazimizga xush kelibsiz!`);
// };
// welcomeMessage({ name: "Sardor", surname: "Ibodov" });

//! JSON => JavaScript Object Notation
// const user = {
//   login: "wba2020",
//   password: 12345,
//   gender: "male",
//   job: "programmer",
//   isMarried: false,
// };
//? Object => JSON
//? JSON.stringify(object, dependenciesArray, format)
// const userJson = JSON.stringify(user, Object.keys(user), 4);
// const newUser = JSON.parse(userJson);
// console.log(userJson);
// console.log(newUser);

//! new Date()
// const date = new Date();
// console.log(date);
//! getFullYear()
// console.log(date.getFullYear());
//! getMonth()
let months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];
// console.log(months[date.getMonth()]);
//! getDay()
// const days = [
//   "Yakshanba",
//   "Dushanba",
//   "Seshanba",
//   "Chorshanba",
//   "Payshanba",
//   "Juma",
//   "Shanba",
// ];
// console.log(days[date.getDay()]);
//! getDate()
// console.log(date.getDate());
//! getHours()
// console.log(date.getHours());
//! getMinutes()
//! getSeconds()
//! getMilliSeconds()
//! Date.now()
// console.log(Date.now());

// const getTime = () => {
//   const date = new Date();
//   return `${
//     date.getHours() >= 13 ? date.getHours() - 12 : date.getHours()
//   }:${date.getMinutes()} ${date.getHours() >= 13 ? "PM" : "AM"} ${
//     date.getMonth() + 1
//   }/${date.getDate()}/${date.getFullYear()}`;
// };
// console.log(getTime());

//! Moment
// const moment = () => {
//   return {
//     format(param) {
//       if (param === "dddd") return months[new Date().getMonth()];
//     },
//   };
// };
// console.log(moment().format("dddd"));