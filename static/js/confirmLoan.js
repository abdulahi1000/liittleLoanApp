document.addEventListener("DOMContentLoaded", function() {
    const loginUser = JSON.parse(localStorage.getItem("LoginUser")) || {};
    var greet = document.getElementById("greet")
    greet.innerHTML= `Dear, ${loginUser.firstName}`

    var loanData = JSON.parse(localStorage.getItem("user_loan"))
console.log("loan data", loanData.amount)
var p1Data = document.getElementsByTagName("p")
p1Data[0].innerHTML = `You're applying for NGN ${loanData.amount} `
p1Data[1].innerHTML = `Your interest will be NGN ${loanData.interest} `
p1Data[2].innerHTML = `You'll paying back ${loanData.payType}% increment every ${loanData.payType == 3 ? "Monthly":"yearly"} `
p1Data[3].innerHTML = `Your to total payback will be NGN ${loanData.payback} `

});









