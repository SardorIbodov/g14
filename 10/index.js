//! String
// let str1 = "Hello";
// let str2 = 'Hello';
// let str3 = `Hello`;
// let str4 = new String("Hello");
// console.log(str1);
// console.log(str2);
// console.log(str3);
// //? valueOf
// console.log(str4.valueOf());

//! Accessing
// let str = "webbrain academy";
//? []
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[5]);
// console.log(str[8]);
// console.log(str[10]);
//? at()
// console.log(str.at(0));
// console.log(str.at(-1));
// console.log(str.at(-6));
//? chatAt()
// console.log(str.charAt(0));
// console.log(str.charAt(-1));

//! Escape character \, \t, \n
// let str = "\"Webbrain Academy\"";
// let str2 = "Webbrain\nAcademy"
// console.log(str2);

//! localeCompare() => (0, 1, -1)
//! keyin => -1
//! oldin => 1
//! bir xil => 0
// let str1 = "xalom";
// let str2 = "sayr";
// console.log(str1.localeCompare(str2));

//! length
// let str = "webbrain\tacademy";
// let str2 = str;
// console.log(str2.length);

//! toUppercase(), toLowercase(), toLocaleUppercase(), toLocaleLowercase()
// let str = "Webbrain Academy";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//! indexOf => index, -1
// let str = "Webbrain Academy";
// console.log(str.indexOf("W"));
// console.log(str.indexOf("a"));
// console.log(str.indexOf("a", 6));
// console.log(str.indexOf("brain"));

//! lastIndexOf()
// let str = "Webbrain Academy";
// console.log(str.lastIndexOf("a"));
// console.log(str.lastIndexOf("y"));

//! includes => false, true
// let str = "Webbrain Academy";
// console.log(str.includes("a"));
// console.log(str.includes("o"));
// console.log(str.includes("brain"));
// console.log(str.includes("brain"));
// console.log(str.includes("brain cademy"));

//! startsWith, endsWith
// let str = "Webbrain Academy";
// console.log(str.startsWith("2"));
// console.log(str.endsWith("y"));

//! padStart, padEnd
// let str = "Hello";
// let result = str.padStart(2, "*")
// let result = str.padEnd(10, "*")
// console.log(result);

//! trim
// let str = "       Webbrain                Academy                 9";
// let result = str.trim();
// let result = str.trimStart();
// let result = str.trimEnd();
// console.log(result);

//! split() String => Array
// let str = "web[]brain[]aca[]demy";
// let result = str.split();
// let result = str.split("");
// let result = str.split(" ");
// let result = str.split("[]");
// console.log(result);

//! "salom" + "dunyo"
// let str1 = "salom";
// let str2 = "dunyo";
// console.log(str1 + str2);
// let str3 = str1.concat(" " ,str2)
// console.log(str3);

// let str = "webbrain academy";
//! for
// for(let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }
//! for-in
// for(let key in str) {
// 	console.log(str[key]);
// }
//! for-of
// for(let item of str) {
// 	console.log(item);
// }

// let str = "Webbrain";
//! slice(boshlanish, tugash)
// let result = str.slice(3, 7);
// console.log(result);
// console.log(str);
//! substr(boshlanish, soni) => minus qabul qiladi
// let result = str.substr(3, 5);
// console.log(result);
//! substring(boshlanish, tugash) => minus qabul qilmaydi
// let result = str.substring(0, -2);
// console.log(result);

// let word = "webbrain academy";
// let result = {};
// for (let item of word) {
//   if (item !== " ") {
//     if (result[item]) {
//       result[item]++;
//     } else result[item] = 1;
//   }
// }
// console.log(result);
