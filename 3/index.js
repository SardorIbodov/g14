//! Nullish (??)
// console.log(null ?? "salom");
// console.log(null ?? false);
// console.log(undefined ?? "salom");
// console.log(undefined ?? false);
// console.log(false ?? undefined);
// console.log("salom" ?? null);

//! Task
// console.log(("xayr" ?? "salom") && "salom");

//! if-else
// if(true) {
// 	console.log("if ishladi");
// }
// if(1) {
// 	console.log("if ishladi");
// }
// if("salom") {
// 	console.log("if ishladi");
// }
// if({}) {
// 	console.log("if ishladi");
// }
// if([]) {
// 	console.log("if ishladi");
// }

//! Tasks
//? 1
// let age = 17;
// if(age >= 16) {
// 	console.log("Passport berilsin");
// } else {
// 	console.log("Voyaga yetmagan");
// }

//! {} larsiz if va else
// if(age >= 16) console.log("Passprot berilsin");
// else console.log("Voyaga yetmagan");

//! Tasks
// let fasl = "";
// if(fasl === "qish") console.log("sovuq");
// if(fasl === "bahor") console.log("iliq");
// if(fasl === "yoz") console.log("issiq");
// if(fasl === "kuz") console.log("salqin");

// if(fasl === "qish") console.log("sovuq");
// else if(fasl === "bahor") console.log("iliq");
// else if(fasl === "yoz") console.log("issiq");
// else console.log("salqin");

//! Ichma-ich if
// let age = 15;
// if(age >= 16) {
// 	console.log("Passport berilsin");
// 	if(age >= 18) {
// 		console.log("HG berilsin");
// 	} else console.log("HG berilmasin");
// } else {
// 	console.log("Voyaga yetmagan");
// }

//! Logical operator in if
// let age = 15;
// if(age >= 16 || age <= 18) {
// 	console.log("salom");
// }

//! Ternary operator
// let age = 15;
// if(age >= 16) console.log("Passport berilsin");
// else console.log("Voyaga yetmagan");

// age >= 16 ? console.log("Passport berilsin") : console.log("Voyaga yetmagan");

// let age = 15;
// if(age >= 16) {
// 	console.log("Passport berilsin");
// 	if(age >= 18) {
// 		console.log("HG berilsin");
// 	} else console.log("HG berilmasin");
// } else {
// 	console.log("Voyaga yetmagan");
// }

//! task
// let fasl = "yoz";
// if(fasl === "qish") console.log("sovuq");
// else if(fasl === "bahor") console.log("iliq");
// else if(fasl === "yoz") console.log("issiq");
// else console.log("salqin");
// fasl === "qish"
//   ? console.log("sovuq")
//   : fasl === "bahor"
//   ? console.log("iliq")
//   : fasl === "yoz"
//   ? console.log("issiq")
//   : console.log("salqin");

// let age = 16;
// age >= 16 ? console.log("Passport berilsin")