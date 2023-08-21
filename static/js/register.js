document.addEventListener("DOMContentLoaded", function() {
    // Function to Check if email is Valid
function checkEmail(input) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Regular expression pattern for email validation
    if (re.test(input.trim())) {
      // Test if the trimmed value of the email input matches the pattern
    //   showSuccess(input); // Show success outline
    return true
    } else {
        alert("Email is not valid")
        return false
    //   showError(input, "Email is not valid"); // Show error message
    }
  }
  function checkPasswordsMatch(input1, input2) {
    if (input1 !== input2) {
      alert("Passwords do not match");
      return false
    }
    return true
  }
    const dataForm = document.getElementById("dataForm");

    dataForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        const existingUsers = JSON.parse(localStorage.getItem("userList")) || [];
        
        if (checkEmail(email) && checkPasswordsMatch(password,password2)){
            const formData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                id: existingUsers.length+1
            };
    
            existingUsers.push(formData);
            localStorage.setItem("userList", JSON.stringify(existingUsers));
    
            alert("You've register please login");

        }

       
    });
});