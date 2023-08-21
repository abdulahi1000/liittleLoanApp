document.addEventListener("DOMContentLoaded", function() {
    const dataForm = document.getElementById("dataForm");

    dataForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const existingUsers = JSON.parse(localStorage.getItem("userList")) || [];

        for (let index = 0; index < existingUsers.length; index++) {
            const element = existingUsers[index];
            if(element.email == email && element.password == password){
                localStorage.setItem("LoginUser", JSON.stringify(element));
                window.location.href = "/pages/dashboard.html"

            }else{
                alert("Email/password is not correct")
            }
            
        }

    });
});