document.addEventListener("DOMContentLoaded", function() {
    const loginUser = JSON.parse(localStorage.getItem("LoginUser")) || {};
    var greet = document.getElementById("greet")
    greet.innerHTML= `Hi, ${loginUser.firstName}`

    var amount = document.getElementById("amount")
    greet.innerHTML= `NGN ${loginUser.firstName}`
});