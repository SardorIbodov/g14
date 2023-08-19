//! Map(), Set(), WeakMap(), WeakSet()
//! Object vs Map => key ni data-type da, Map da istalgan data-type dagi key dan foydalansa bo'ladi
//? Map()
// let object = {};
// let map = new Map();
// object.title = "webbrain";
// map.title = "webbrain";
// console.log(object, "=> object");
// console.log(object.title); //! to'g'ri
// console.log(map, "=> map");
// console.log(map.title); //! xatolik

//? Map methods
//? set(key, value)
// let objKey = {};
// let arrayKey = [];
// let functionKey = () => {};
// map.set(true, "haqiqat");
// map.set(objKey, "object qiymat");
// map.set(arrayKey, "array qiymat");
// map.set(Symbol("id"), "symbol qiymat");
// map.set(functionKey, "function qiymat");
// map.set(12, "number qiymat");
// console.log(map);
// object[true] = "haqiqat";
// console.log(object);

//? get(key)
// console.log(map.get(true));
// console.log(map.get(objKey));
// console.log(map.get(arrayKey));
// console.log(map.get(functionKey));
// console.log(map.get(12));

//? has(key)
// console.log(map.has(true));
// console.log(map.has(12));
// console.log(map.has(21));
// console.log(map.has(objKey));

//? delete(key)
// console.log(map);
// map.delete(true);
// console.log(map);

//? clear()
// console.log(map);
// map.clear();
// console.log(map);

//? size
// console.log(map);
// console.log(map.size);

//? iteration
//? for-of
// for (let item of map) {
//   console.log(item);
// }
//? forEach
// map.forEach((value, key, map) => {
//   console.log(value);
// });

//? keys()
// let keys = map.keys();
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);

//? values()
// let values = map.values();
// console.log(values);
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);

//? entries()
// let entries1 = map.entries();
// console.log(entries);
// for (let item of entries) {
//   console.log(item);
// }

//? map => object
// console.log(map);
// let object = Object.fromEntries(map);
// console.log(object);

//! Set()
// let array = [];
// let set = new Set();
// console.log(array);
// console.log(set);

//? add(value)
// set.add("frontend");
// set.add("backend");
// set.add("mobile");
// set.add("frontend");
// set.add("AI");
// console.log(set);

//? has(value)
// console.log(set.has("frontend"));
// console.log(set.has("backend"));
// console.log(set.has("backend12"));

//? delete(value)
// set.delete("AI");
// console.log(set);

//? clear()
// set.clear();
// console.log(set);

//? size
// console.log(set.size);

//? iteration
//? for-of
// for (let item of set) {
//   console.log(item);
// }
//? forEach
// set.forEach((v) => console.log(v));

// let array = [1, 2, 5, 6, 1, 8, 6, 9, 8, 2];
// let set = new Set(array);
// let newArray = Array.from(set);
// console.log(newArray);

//! WeakMap
//? Map vs WeakMap
// 1. Garbage collection
// 2. Non-primite
// let weakmap = new WeakMap();
// let objectKey = {};
// let arrayKey = [];
// let functionKey = () => {};
// weakmap.set(objectKey, "object");
// weakmap.set(arrayKey, "array");
// weakmap.set(functionKey, "function");
// console.log(weakmap);
// console.log(weakmap.get(arrayKey));
// console.log(weakmap.has(functionKey));
// console.log(weakmap.delete(objectKey));
// console.log(weakmap);

//! WeakSet
//? Set vs WeakSet
// 1. Garbage collection
// 2. Non-primite
// let weakset = new WeakSet();
// let objectKey = {};
// let arrayKey = [];
// let functionKey = () => {};
// weakset.add(arrayKey);
// console.log(weakset);
