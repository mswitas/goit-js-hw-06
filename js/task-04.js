const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

const increment = () => {
    counterValue++;
    displayValue("value", counterValue);
};

const decrement = () => {
    counterValue--;
    displayValue("value", counterValue);
}

function displayValue(id, value) {
    document.getElementById(id).textContent = value;
}

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);
