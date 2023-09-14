// const logText = () => console.log(1);
// const button = document.querySelector("button");
// button.onclick = logText;

//! addEventListener
// button.addEventListener("click");

const box = document.querySelector("div");
const down1 = document.querySelector("#down");
const top1 = document.querySelector("#top1");
// box.addEventListener("mousemove", (event) => {
//   box.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, ${
//     255 - event.clientX
//   })`;
// });
down1.addEventListener("click", () => {
  box.scrollBy({
    top: 300,
    behavior: "smooth",
  });
  console.log(box.scrollHeight - box.scrollTop);
  if (box.scrollHeight - box.scrollTop <= 3000) {
    top1.style.display = "block";
    console.log("ishladi");
  }
});

top1.addEventListener("click", () => {
  box.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  top1.style.display = "none";
});
