document.addEventListener("DOMContentLoaded", function() {
    const dataForm = document.getElementById("dataForm");

    dataForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const existingUsers = JSON.parse(localStorage.getItem("userList")) || [];
        const matchedUser = existingUsers.find(user => user.email === email && user.password === password);
        // console.log("exist", matchedUser)
        if (matchedUser) {
            localStorage.setItem("LoginUser", JSON.stringify(matchedUser));
            window.location.href = "/pages/dashboard.html"
        } else {
            alert("Login failed. Invalid email or password.");
        }

    });
});