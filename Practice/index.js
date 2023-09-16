const container = document.querySelector(".container");

const display = () => {
  for (let i = 1; i <= 100; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.style.cssText = `
			width: 50px;
			height: 50px;
		`;
    container.append(button);
  }
};
display();

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    let number = +e.target.innerText;
    for (let b of buttons) {
      if (+b.innerText % number === 0) {
        b.innerText = "*";
      }
    }
  });
}
