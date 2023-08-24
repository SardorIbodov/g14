//! Advanced functions
// let object1 = {
//   firstName: "eshmat",
//   age: 18,
// };
// console.log(`${object1.name} ismli o'quvchi ${object1.age} yoshda`);

// let object2 = {
//   firstName: "toshmat",
//   age: 20,
// };
// console.log(`${object2.name} ismli o'quvchi ${object2.age} yoshda`);

// let object3 = {
//   firstName: "xolmat",
//   age: 25,
// };
// console.log(`${object3.name} ismli o'quvchi ${object3.age} yoshda`);

// function getData() {
//   console.log(this);
//   console.log(`${this.firstName} ismli o'quvchi ${this.age} yoshda`);
// }
// getData();

//! apply, call, bind

//? apply(thisArg, [p1, p2, p3, ....])
// function getData(k1, k2) {
//   console.log(this);
//   console.log(`${this.firstName} ismli o'quvchi ${this.age} yoshda`);
//   console.log(`${this.firstName} - ${k1}, ${k2} dasturchi`);
// }
// getData();
// getData.apply(object1, ["frontend", "backend"]);
// getData.apply(object2, ["flutter", "mobile"]);
// getData.apply(object3, ["ai", "frontend"]);

//? call(thisArg, p1, p2, p3, ....)
// function getData(k1, k2) {
//   console.log(this);
//   console.log(`${this.firstName} ismli o'quvchi ${this.age} yoshda`);
//   console.log(`${this.firstName} - ${k1}, ${k2} dasturchi`);
// }
// getData.call(object1, "frontend", "backend");
// getData.call(object2, "flutter", "mobile");
// getData.call(object3, "ai", "frontend");

//? bind(thisArg, p1, p2, p3, ....) => function qaytaradi!
// function getData(k1, k2) {
//   console.log(this);
//   console.log(`${this.firstName} ismli o'quvchi ${this.age} yoshda`);
//   console.log(`${this.firstName} - ${k1}, ${k2} dasturchi`);
// }
// getData.bind(object1, "frontend", "backend")();

// let object1 = {
//   firstName: "eshmat",
//   age: 18,
//   getData() {
//     console.log(`${this.firstName} ismli o'quvchi ${this.age} yoshda`);
//   },
// };
// let object2 = {
//   firstName: "toshmat",
//   age: 20,
// };
// let object3 = {
//   firstName: "xolmat",
//   age: 25,
// };
// object1.getData.call(object2);
// object1.getData.call(object3);

//!
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//? for, for-in, for-of
// let max = Math.max(...array);
// console.log(max);
// let max2 = Math.max.apply(null, array);
// console.log(max2);
