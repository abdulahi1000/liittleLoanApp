document.addEventListener("DOMContentLoaded", function() {
    const loginUser = JSON.parse(localStorage.getItem("LoginUser")) || {};
    var greet = document.getElementById("greet")
    greet.innerHTML= `Hi, ${loginUser.firstName}`

    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function() {
        console.log("workinggg")
        localStorage.removeItem("LoginUser")
        localStorage.removeItem("last_loan")
        window.location.href = "/"
    });

    // function logout(){
    //     console.log("workinggg")
    //     localStorage.removeItem("LoginUser")
    //     localStorage.removeItem("last_loan")
    //     window.location.href = "/"
    // }

    

    const userTableBody = document.querySelector("#userTable tbody");

    function updateUserTable() {
        userTableBody.innerHTML = ""; // Clear the existing table body

        const userLoan = JSON.parse(localStorage.getItem("user_loan")) || [];
        let total = 0;
        if(userLoan.length === 0){
            const row = document.createElement("tr");
                row.innerHTML = `
                <td>No data</td>
                   
                `;

        }
        userLoan.forEach(function(loan) {
            if(loan.user === loginUser.id){
                total += Number(loan.amount)
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${loan.id}</td>
                    <td>${loan.amount}</td>
                    <td>${loan.payType}%</td>
                    <td>${loan.duration } ${loan.payType == 3 ? "Month":"year"}</td>
                   
                `;
                userTableBody.appendChild(row);

            }
           
        });

        var amount = document.getElementById("amount")
        amount.innerHTML= `NGN ${total}`
    }
    updateUserTable()
});