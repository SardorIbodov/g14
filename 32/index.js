//! Bubling
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const grandchild = document.querySelector(".grandchild");

// parent.addEventListener("click", () => {
//   console.log("Parent bosildi!");
// });

// child.addEventListener("click", (e) => {
//   e.stopImmediatePropagation();
//   console.log("Child bosildi!");
// });

// grandchild.addEventListener("click", (e) => {
// 	e.stopImmediatePropagation();
//   console.log("Grandchild bosildi!");
// });

//! e.preventDefault()
// const link = document.querySelector(".link");
// link.addEventListener("click", (e) => {
// 	e.preventDefault();
//   console.log(1);
// });

//! keyboard events
// const body = document.querySelector("body");
// body.addEventListener("keypress", (e) => {
//   if (e.charCode === 113) alert("Siz 'q' klavishini bosdingiz");
// });

//! Form
// const forms = document.forms;
// console.log(forms);
//? index bo'yicha
// console.log(forms[0]);
// console.log(forms[1]);
//? name bo'yicha
// console.log(forms.registratsiya);
// console.log(forms.login);
//? elementlari
// console.log(forms[0].elements);
// console.log(forms[1].elements);
// console.log(forms[0].fullName);
// console.log(forms[0].date);

//!
// const nameInput = document.querySelector("#fullName");
// const text = document.querySelector("p");
// nameInput.addEventListener("input", (e) => {
// 	text.innerText = e.target.value;
// });

// const dateInput = document.querySelector("#date");
// const text = document.querySelector("p");
// dateInput.addEventListener("input", (e) => {
//   text.innerText = e.target.value;
// });

//! Practice
// const passwordBox = document.querySelector(".passwordBox");
// const passwordInput = document.querySelector("#password");
// const icon = document.querySelector("#eye");
// const info = document.querySelector("#info");
// passwordInput.addEventListener("input", (e) => {
//   if (e.target.value) {
//     if (e.target.value.trim().length >= 8) {
//       info.style.display = "block";
//       passwordBox.style.border = "1px solid green";
//       info.innerText = "Parol ishonchli!";
//     } else {
//       passwordBox.style.border = "1px solid red";
//     }
//     icon.style.display = "inline-block";
//   } else {
//     icon.style.display = "none";
//     info.style.display = "none";
//   }
// });
// icon.addEventListener("click", () => {
//   if (passwordInput.getAttribute("type") === "text") {
//     passwordInput.setAttribute("type", "password");
//   } else passwordInput.setAttribute("type", "text");
// });

//! select
const language = document.querySelector("#til");
// const text = document.querySelector("#text");
// language.addEventListener("input", (e) => {
//   switch (e.target.value) {
//     case "uz":
//       text.innerText = "Salom";
//       break;
//     case "ru":
//       text.innerText = "Privet";
//       break;
//     case "eng":
//       text.innerText = "Hello";
//       break;
//   }
// });
// console.log(language.value);

//! Classlist
const suz = document.querySelector("#text");
const add = document.querySelector("#add");
const del = document.querySelector("#del");
const toggle = document.querySelector("#toggle");
const att = document.querySelector("#att");
//? classlist.add()
add.addEventListener("click", () => suz.classList.add("text"));
att.addEventListener("click", () => suz.setAttribute("class", "text"));
//? classlist.remove()
// del.addEventListener("click", () => suz.classList.remove("text"));
//? classlist.toggle()
// toggle.addEventListener("click", () => suz.classList.toggle("text"));
