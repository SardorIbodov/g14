import { images } from "./base.js";
const carouselContent = document.querySelector(".carousel-content");
const carouselDots = document.querySelector(".carousel-dots");
const display = () => {
  images.forEach((v) => {
    const img = document.createElement("img");
    const dot = document.createElement("span");
    img.setAttribute("src", v.src);
    img.setAttribute("alt", v.id);
    if (v.id === 1) {
      img.setAttribute("class", "active");
      dot.setAttribute("class", "active-dot");
    }
    dot.setAttribute("data-id", v.id);
    carouselContent.append(img);
    carouselDots.append(dot);
  });
};
display();

const createdImages = document.querySelectorAll("img");
const createdDots = document.querySelectorAll("span");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
nextBtn.onclick = () => {
  for (let i = 0; i < createdImages.length; i++) {
    if (createdImages[i].getAttribute("class") === "active") {
      createdImages[i].removeAttribute("class");
      createdDots[i].removeAttribute("class");
      if (i === createdImages.length - 1) {
        createdImages[0].setAttribute("class", "active");
        createdDots[0].setAttribute("class", "active-dot");
      } else {
        createdImages[i + 1].setAttribute("class", "active");
        createdDots[i + 1].setAttribute("class", "active-dot");
      }
      break;
    }
  }
};
prevBtn.onclick = () => {
  for (let i = 0; i < createdImages.length; i++) {
    if (createdImages[i].getAttribute("class") === "active") {
      createdImages[i].removeAttribute("class");
      createdDots[i].removeAttribute("class");
      if (i === 0) {
        createdImages[createdImages.length - 1].setAttribute("class", "active");
        createdDots[createdImages.length - 1].setAttribute(
          "class",
          "active-dot"
        );
      } else {
        createdImages[i - 1].setAttribute("class", "active");
        createdDots[i - 1].setAttribute("class", "active-dot");
      }
      break;
    }
  }
};

let clicked;
for (let i = 0; i < createdDots.length; i++) {
  createdDots[i].onclick = (e) => {
    clicked = +e.target.getAttribute("data-id");
    for (let i = 0; i < createdDots.length; i++) {
      createdDots[i].removeAttribute("class");
			createdImages[i].removeAttribute("class");
    }
    createdDots[clicked - 1].setAttribute("class", "active-dot");
    createdImages[clicked - 1].setAttribute("class", "active");
  };
}
