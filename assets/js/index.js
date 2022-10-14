const loginForm = document.getElementById("form");
const loginButton = document.getElementById("submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "makmurinspektorat@gdriveme.id" && password === "Takawa1#") {
        location.replace("home.html")   
    } 
    else if (email.length === 0 || password.length === 0) {
        alert("Email and password must be filled!");
        return;
    }
    else {
        alert("Please enter valid information");
    return;
    }
})