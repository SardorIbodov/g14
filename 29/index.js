//! DOM => Document Object Module
//! BOM => Brawser Object Module
//? window => global object
// console.log(window);
//? alert
// alert("Salom dunyo!");
//? prompt
// let fullName = prompt("Ismingizni kiriting:");
// console.log(fullName);
//? confirm
// let result = confirm("Siz shartlarga rozimisiz?");
// console.log(result);

//! Selectors
//? id in HTML
// console.log(title);
//? tag
// let sarlavha = document.getElementsByTagName("h1");
// console.log(sarlavha);
//? class
// let sarlavha = document.getElementsByClassName("title");
// console.log(sarlavha);
//? id with getElementById
// let sarlavha = document.getElementById("web");
// console.log(sarlavha);
//? querySelector()
// let list = document.querySelector("ul");
// console.log(list);
// let birinchi = document.querySelector("#first");
// console.log(birinchi);
// let ikkinchi = document.querySelector(".second");
// console.log(ikkinchi);
//? querySelectorAll()
// let ikkinchi = document.querySelectorAll(".second");
// console.log(ikkinchi);

//! Element vs Node
//? Element => Tag
//? Node => Tag + Space + Text
// console.log(list.childNodes); // 11
// console.log(list.children); // 5

//! Parent child relationship
//? Node:    childNodes, previousSibling       , nextSibling       , parentNode
//? Element: children  , previousElementSibling, nextElementSibling, parentElement

// let html = document.children[0];
// let body = html.children[1];
// let ul = body.children[0];
// let firstLi = ul.children[0];
// let secondLi = firstLi.nextElementSibling;
// console.log(secondLi.parentNode);

//! innerHTML, innerText, textContent
//? innerHTML => tag + space
//? innerText => -
//? textContent => space
// let list = document.querySelector("ul");
// console.log(list.innerHTML);
// console.log(list.innerText);
// console.log(list.textContent);
// list.innerHTML = `<a href="https://youtube.com">YouTube</a>`;
// list.innerText = `       <a href="https://youtube.com">YouTube</a>`;
// list.textContent = `       <a href="https://youtube.com">YouTube</a>`;

//! hidden
// let list = document.querySelector("ul");
// list.hidden = true;

// const reverseMessage = str => str.split(" ").reverse().map(v => v.slice(-1).toUpperCase() + v.slice(0, -1).toLowerCase().split("").reverse().join("")).join(" ")