document.addEventListener("DOMContentLoaded", function() {
    const dataForm = document.getElementById("dataForm");

    dataForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };

        const existingUsers = JSON.parse(localStorage.getItem("userList")) || [];
        existingUsers.push(formData);
        localStorage.setItem("userList", JSON.stringify(existingUsers));

        alert("You've register please login");
    });
});