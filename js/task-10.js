const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy");
const target = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  const input = document.querySelector("input");
  createBoxes(input.value);
});

buttonDestroy.addEventListener("click", () => {
  target.innerHTML = "";
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    const color = getRandomHexColor();
    element.style.minHeight = `${size}px`;
    element.style.width = `${size}px`;
    element.style.backgroundColor = color;
    elements.push(element);
    size += 10;
  }
  
  target.append(...elements);
}

