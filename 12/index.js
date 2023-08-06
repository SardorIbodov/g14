// const numbers = [1, 3, 5, 7, 9];
//! for
//! for-in
//! for-of
//! eval
//?
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);
//?
// const str = numbers.join("+");
// const result = eval(str);
// console.log(result);

//? filter((value, index, array) => {})
//! callback => agar funksiya parametrida yana funksiya kelsa
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const users = [
//   { id: 1, name: "Bilol" },
//   { id: 2, name: "Muhammadjon" },
//   { id: 3, name: "Hojiakbar" },
// ];
//?
// const result = [];
// for(let item of numbers) {
// 	if(item % 2 === 0) result.push(item);
// }
// console.log(result);
//?
// let newNumbers = numbers.filter(value => value % 2 === 0);
// console.log(newNumbers);
//?
// let newUsers = users.filter((v) => !v.name.includes("i"));
// console.log(newUsers);

//? sort((a, b) => {})
//? o'sish tartibida | number => (a - b) | string => a.localeCompare(b) |
//? kamayish tartibi | number => (b - a) | string => b.localeCompare(a) |
// const numbers = [4, 2, 8, 7, 5, 3, 21];
// const sortedNumbers = numbers.sort((a, b) => a - b);
// const sortedNumbers = numbers.sort((a, b) => b - a);
// console.log(sortedNumbers);
// const names = ["Bilol", "Muhammadjon", "Hojiakbar", "Ulug'bek"];
// const sortedNames = names.sort((a, b) => a.localeCompare(b));
// const sortedNames = names.sort((a, b) => b.localeCompare(a));
// console.log(names);

// const users = [
//   { id: 1, name: "Bilol", age: 15 },
//   { id: 2, name: "Muhammadjon", age: 18 },
//   { id: 3, name: "Hojiakbar", age: 19 },
//   { id: 4, name: "Ulug'bek", age: 19 },
// ];
// const sortedAge = users.sort((a, b) => b.age - a.age);
// console.log(sortedAge);
// const sortedName = users.sort((a, b) => b.name.localeCompare(a.name));
// console.log(sortedName);

//? forEach((value, index, array) => {})
// const users = [
//   { id: 1, name: "Bilol", age: 15 },
//   { id: 2, name: "Muhammadjon", age: 18 },
//   { id: 3, name: "Hojiakbar", age: 19 },
//   { id: 4, name: "Ulug'bek", age: 19 },
// ];
// let sum = 0;
// users.forEach((value, index, array) => {
//   sum += value.age;
// });
// console.log(sum);

//? map((value, index, array) => {})
// const users = [
//   { id: 1, name: "Bilol", age: 15 },
//   { id: 2, name: "Muhammadjon", age: 18 },
//   { id: 3, name: "Hojiakbar", age: 19 },
//   { id: 4, name: "Ulug'bek", age: 19 },
// ];
// const updatedUsers = users.map((value, index, array) => {
//   if (value.age === 18) {
//     return { ...value, name: value.name.toUpperCase() };
//   }
//   return value;
// });
// console.log(updatedUsers);

//? find((value, index, array) => {})
// const users = [
//   { id: 1, name: "Bilol", age: 15 },
//   { id: 2, name: "Muhammadjon", age: 18 },
//   { id: 3, name: "Hojiakbar", age: 19 },
//   { id: 4, name: "Ulug'bek", age: 19 },
// ];
// const user = users.find((v) => v.age === 19);
// console.log(user);

//? findIndex((value, index, array) => {})
// const users = [
//   { id: 1, name: "Bilol", age: 15 },
//   { id: 2, name: "Muhammadjon", age: 18 },
//   { id: 3, name: "Hojiakbar", age: 19 },
//   { id: 4, name: "Ulug'bek", age: 19 },
// ];
// const index = users.findIndex((v) => v.age === 19);
// console.log(index);

//? findLastIndex((value, index, array) => {})
// const users = [
//   { id: 1, name: "Bilol", age: 15 },
//   { id: 2, name: "Muhammadjon", age: 18 },
//   { id: 3, name: "Hojiakbar", age: 19 },
//   { id: 4, name: "Ulug'bek", age: 19 },
// ];
// const index = users.findLastIndex((v) => v.age === 19);
// console.log(index);

//? flat()
// const array = [[[[1]]]];
// console.log(array.flat(2));
// console.log(array.flat(Infinity));

//? some((v) => {}), every()
// const array = [1, 5, 10, 8, 3];
// const result = array.some((v) => v > 0);
// const result = array.some((v) => {
//   console.log(v);
// });
// const result = array.every((v) => {
//   console.log(v);
//   return true;
// });
// console.log(result);

//? fill(to'ldirmoqchi bo'lgan element, boshlang'ich index, tugash index(bu kirmaydi)) => to'ldirish
// const numbers = [1, 2, 3, 4, 5];
// numbers.fill("webbrain", 1, 4); // [1, "webbrain", "webbrain", "webbrain", 5]
// numbers.fill("webbrain", 4, 8)
// console.log(numbers);

//? copyWithin(o'zgartirilayotgan qiymat index, qo'yilayotgan elementni boshlang'ich index, qo'yilayotgan elementni oxirgi index(bu kirmaydi))
// const numbers = [1, 2, 3, 4, 5]; // [4, 5, 3, 4, 5]
// numbers.copyWithin(0, 3, 5);
// console.log(numbers);

//? reduce((ikkinchi, hozirgi) => {})
// const numbers = [1, 2, 3];
// let sum = numbers.reduce((value, current) => {
//   return value + current;
// }, 0);
// console.log(sum);

// function tidyNumber(n) {
//   let isTidy = true;
//   const array = `${n}`.split("");
//   const newArray = array.map((v) => +v);
//   let sortedArray = [...newArray];
//   sortedArray = sortedArray.sort((a, b) => a - b);
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] !== sortedArray[i]) isTidy = false;
//   }
//   return isTidy;
// }
// console.log(tidyNumber(102));
