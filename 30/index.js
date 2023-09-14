//! Attribute manipulation
// let loginInput = document.getElementById("login");
// console.log(loginInput);
//! getAttribute(attributeName)
// console.log(loginInput.getAttribute("type"));
// console.log(loginInput.getAttribute("placeholder"));
// console.log(loginInput.getAttribute("type"));
//! setAttribute(attributeName, newValue)
// loginInput.setAttribute("placeholder", "Parol");
// loginInput.setAttribute("type", "password");
// loginInput.setAttribute("placeholder", "login");
//! removeAttribute(attributeName)
// loginInput.removeAttribute("placeholder");
// loginInput.removeAttribute("type");

//! Creating an element
// const title = document.createElement("h1");
// title.innerText = "DOM | 2";
// const body = document.querySelector("body");

//! Insertion
// const list = document.getElementsByTagName("ul")[0];
//? prepend(element)
// list.prepend(title);
//? append(element)
// list.append(title);
//? after(element)
// list.after(title);
//? before(element)
// list.before(title);

//! Cloning
// const copyList = list.cloneNode(true);
// list.after(copyList);
// console.log(list, "o");
// console.log(copyList, "c");

//! Style
// const list = document.querySelector("ul");
//?
// list.style.listStyleType = "square";
// list.style.color = "red";
// list.style.fontSize = "24px";
// list.style.fontFamily = "Monospace";
// list.style.border = "3px solid green";
// list.style.borderRadius = "40px";
// list.style.transform = "translateX(100px)";
//?
// list.style.cssText = `
// 	color: red;
// 	list-style-type: square;
// 	border: 1px solid red;
// `;

//! Geometry
// const box = document.querySelector("div");
//? offsetWidth, offsetHeight
// console.log(box.offsetWidth);
// console.log(box.offsetHeight);
//? clientWidth, clientHeight
// console.log(box.clientWidth);
// console.log(box.clientHeight);
//? scrollHeight, scrollWidth
// console.log(box.scrollHeight);
// console.log(box.scrollWidth);
//? scroll(x, y)
// box.scroll(0, 100);
//? scrollX()
//? scrollY()

//? scrollTo(x, y)
// box.scrollTo(0, 110);

//? scrollBy(x, y)
// box.scrollBy(0, 100);

//? getBoundingClientRect()
// console.log(box.getBoundingClientRect());
