const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
    const dataLength = Number(event.currentTarget.getAttribute("data-length"));
    const text = event.currentTarget.value;
    if (text.length === dataLength) {
        if (textInput.classList.contains("invalid")) {
            textInput.classList.replace("invalid", "valid");
        } else if (!textInput.classList.contains("valid")) {
            textInput.classList.add("valid");
        }
    } else {
        if (textInput.classList.contains("valid")) {
            textInput.classList.replace("valid", "invalid");
        } else if (!textInput.classList.contains("invalid")) {
            textInput.classList.add("invalid");
        }
    }    
});