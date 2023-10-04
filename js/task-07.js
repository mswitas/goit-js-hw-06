const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("input", (event) => {
    text.setAttribute("style", "font-size: " + event.currentTarget.value + "px");
});
