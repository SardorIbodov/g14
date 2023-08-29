// let array = [1, 2, 3, 4, 5];
// array.push(6);
// console.log(array);

// let string = new String("Salom");
// console.log(string);

//! Object ni ulash, __proto__
// let obj1 = { name: "Webbrain" };
// let obj2 = { title: "Academy" };
// let obj3 = { founded: 2020 };
// Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(obj1.title);
// obj1.__proto__ = obj2;
// obj1.__proto__ = obj3;
// console.log(obj1);

//! prototype
// let array = [1, 2, 3, 10, 40, 5];
// function getMaximum(array) {
//   let maximum = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (maximum < array[i]) {
//       maximum = array[i];
//     }
//   }
//   return maximum;
// }
// Array.prototype.maximumTopish = getMaximum;
// let natija = array.maximumTopish(array);
// console.log(natija);

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let natija2 = array2.maximumTopish(array2);
// console.log(natija2);
// array.getMaximum(array);
// console.log(getMaximum(array));

//! removeDuplicates
// let array = [1, 2, 2, 1, 4, 6, 8, 5, 4, "s", "a", "s", "s"];
// function removeDuplicates(array) {
//   let result = new Set(array);
//   return Array.from(result);
// }
// Array.prototype.removeDuplicates = removeDuplicates;
// console.log(array.removeDuplicates(array));

//! instanseOf
// let array = [1, 2, 3, 4];
// let string = new String("");
// console.log(array instanceof Object);
// console.log(string instanceof Object);

function getData() {
  getData.getTitle = () => {
    console.log("webbrain");
  };
  // ...
}
getData();
getData.getTitle();

// function solution(str, ending){
//   for(let i = 0; i < ending.length; i++) {
//     if(str[str.length - 1 - i] !== ending[ending.length - 1 - i]) return false;
//   }
//   return true;
// }

