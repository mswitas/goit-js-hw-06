const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("input", (event) => {
    console.log(event.currentTarget.value);
    text.setAttribute("style", "font-size: " + event.currentTarget.value + "px");
});

// demo.style.color = "red";
// demo.style.fontSize = "96px";