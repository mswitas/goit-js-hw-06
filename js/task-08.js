const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = {};
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert("Proszę wypełnić wszystkie pola");
    } 
    
    values.email = email;
    values.password = password;
    form.reset();
    return console.log(values);
}
