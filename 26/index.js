import { idGenerator, getData } from "./idGenerator.js";
// import obhavo from "./logic.js";
// fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=41.2647&longitude=69.2163&hourly=temperature_2m&timezone=auto"
// )
//   .then((res1) => res1.json())
//   .then((res2) => {
//     for (let i = 0; i < res2.hourly.time.length; i++) {
//       console.log(
//         `${res2.hourly.time[i].slice(11, res2.hourly.time[i].length)} => ${
//           res2.hourly.temperature_2m[i]
//         } C`
//       );
//     }
//   });

// const getWeather = async () => {
//   const data = await fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=41.2647&longitude=69.2163&hourly=temperature_2m&timezone=auto"
//   );
//   const dataJSON = await data.json();
//   for (let i = 0; i < dataJSON.hourly.time.length; i++) {
//     console.log(
//       `${dataJSON.hourly.time[i].slice(
//         11,
//         dataJSON.hourly.time[i].length
//       )} => ${dataJSON.hourly.temperature_2m[i]} C`
//     );
//   }
// };
// getWeather();
// obhavo();

//! Generator Functions
//?
// function* generatorFunc() {}
// function *generatorFunc() {}
//? yield
// function* generatorFunc() {
//   yield "salom";
//   yield 2;
// }
// let generator = generatorFunc();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
//? yield vs return
// function* generatorFunc() {
//   yield 1;
//   yield 2;
//   return "Tugadi!";
//   yield 3;
//   yield 4;
// }
// let generator = generatorFunc();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
//? for-of
// function* generatorFunc() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   yield 6;
//   yield 7;
// }
// let generator = generatorFunc();
// for (let item of generator) {
//   console.log(item);
// }

export let users = [
  { id: 1, name: "Bilol", age: 15 },
  { id: 2, name: "Muhammadjon", age: 18 },
  { id: 3, name: "Hojiakbar", age: 19 },
  { id: 4, name: "Ulug'bek", age: 19 },
];

let generator = idGenerator();

const deleteUser = (id) => {
  users = users.filter((v) => v.id !== id);
};

const addUser = (data) => {
  users = [...users, { id: generator.next().value, ...data }];
};

deleteUser(2);
addUser({ name: "Aziz", age: 17 });
addUser({ name: "Dilshod", age: 20 });
deleteUser(1);
addUser({ name: "Sardor", age: 20 });
console.log(users);

//! Modules
//? 1
// export
// import
//? 2
// export {}
// import {}
//? 3
// export default
