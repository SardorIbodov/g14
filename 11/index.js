// Array
//? 1
// const array = [1, "2", true, () => {}, {}];
// console.log(array);
//? 2
// const array1 = new Array(5); // number
// const array2 = new Array("5"); // any type except number
// console.log(array1);
// console.log(array2);

//? length
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length);
// const array1 = new Array(5); // number
// console.log(array1.length);
// const array2 = new Array("5"); // any type except number
// console.log(array2.length);

//? accessing (elementlarga murojat)
// const numbers = [1, 2, 3, 4, 5];
//? 1
// console.log(numbers[2]);
// console.log(numbers[-1]); // undefined
// console.log(numbers[10]); // undefined
//? 2
// console.log(numbers.at(2));
// console.log(numbers.at(-2));
//? farqi
// numbers[2] = true;
// console.log(numbers);
// numbers.at(2) = true;
// console.log(numbers);

//? adding
// const empty = [];
// empty[0] = "birinchi element";
// console.log(empty);
// empty[5] = "element";
// console.log(empty.length);
// empty[10] = "ten";
// empty[90] = "ninety";
// console.log(empty);

//? join() (Array => String)
// const array = [1, 2, 3, 4, 5];
// const string = array.join(); // "1,2,3,4,5"
// const string = array.join(""); // "12345"
// const string = array.join("*"); // "1*2*3*4*5"
// console.log(string);

//? Adding
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // console.log(typeof (arr1 + arr2));
// const arr3 = arr1.concat(arr2);
// const arr4 = arr2.concat(arr1);
// console.log(arr3);
// console.log(arr4);

//? type => Array.isArray(array)
// const arr1 = {1:2};
// console.log(typeof arr1);
// console.log(Array.isArray(arr1));

//? comparison
// if([]) {
// console.log(1);
// }
// console.log([] == true);
// console.log(Boolean([]));
// console.log({} == true);

//? loops
// const numbers = [1, 2, 3, 4, 5, 6];
//? 1 => for
// for(let i = 0; i < numbers.length; i++) {
// 	if(numbers[i] % 2 === 1) console.log(i); // 0, 2, 4,
// }
//? 2 => for-in
// for(let index in numbers) {
// 	console.log(numbers[index]);
// }
//? 3 => for-of
// for(let item of numbers) {
// 	console.log(item);
// }

// const array = ["frontend", "backend", "mobile"];
//! push() => Arrayni oxiridan element qo'shish
// array.push("mobile", "flutter");
// console.log(array);
//! pop() => Arrayni oxiridagi elementni o'chiradi
// array.pop();
// console.log(array);
//! unshift() => Arrayni boshidan element qo'shish
// array.unshift("ai", "data science");
// console.log(array);
//! shift() => Arrayni boshidan elementni o'chiradi
// array.shift();
// console.log(array);

//! slice(boshlangichIndex, oxirgiIndex)
// const array = ["frontend", "backend", "mobile"];
// const array2 = array.slice(0, 1);
// const array3 = array.slice(2, 3);
// console.log(array);
// console.log(array2.concat(array3));

//! splice(boshlang'ichIndex, nechtaElementO'chishi, yangiElementlar)
// const array = ["frontend", "backend", "mobile"];
// array.splice(1, 2, "flutter", "ai", "data science");
// console.log(array);

//! indexOf, lastIndexOf
// const array = ["frontend", "backend", "mobile", "backend"];
// console.log(array.indexOf("backend", 2));

//! includes() => 1ta parametrni tekshiradi
// const array = ["frontend", "backend", "mobile"];
// console.log(array.includes("mobile"));

//! reverse() => teskari qilish
// const array = ["frontend", "backend", "mobile"];
// console.log(array.reverse());

//! Codewars
// const dominator = (arr) => {
//   if (arr.length > 0) {
//     let obj = {};
//     for (let item of arr) {
//       if (obj[item]) {
//         obj[item]++;
//       } else obj[item] = 1;
//     }
//     for (let key in obj) {
//       if (obj[key] > arr.length / 2) return +key;
//     }
//     return -1;
//   } else return -1;
// };
// console.log(dominator([1,1,1,2,2,2,2]));
