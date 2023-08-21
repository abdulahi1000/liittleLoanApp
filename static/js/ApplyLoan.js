function submitForm() {
    const amount = document.getElementById("amount").value;
    const payType = document.getElementById("payType").value;
    const duration = document.getElementById("duration").value;

    const formData = {
        amount: amount,
        payType: payType,
        duration: duration,
    };
    console.log(formData)
    var summary = document.getElementById("loan_summary")
    summary.innerHTML= `The total interest is NGN ${calculateInterest(amount,payType,duration)} and you'll be 
    paying back ${calculateInterest(amount,payType,duration)+Number(amount)}`

    // const jsonString = JSON.stringify(formData, null, 2);

    // // Create a Blob object to save the JSON data
    // const blob = new Blob([jsonString], { type: "application/json" });

    // // Create a download link for the JSON file
    // const downloadLink = document.createElement("a");
    // downloadLink.href = URL.createObjectURL(blob);
    // downloadLink.download = "formData.json";
    // downloadLink.click();
}
function calculateInterest(amount,pay_type, duration){
    const interest = amount*(pay_type/100)*duration
    return interest

}






document.addEventListener("DOMContentLoaded", function() {
    const amount = document.getElementById("amount");
    const payType = document.getElementById("payType");
    const duration = document.getElementById("duration");

    var newAmount = null;
    var newpayType = null;
    var newduration = null;


    amount.addEventListener("input", updateOutput);
    payType.addEventListener("input", updateOutput);
    duration.addEventListener("input", updateOutput);

    console.log("outside", newAmount)
    

    function updateOutput() {
        const newAmount = amount.value;
        const newpayType = payType.value;
        const newduration = duration.value;

       
        

        if (newAmount && newpayType && newduration){
            var interest = calculateInterest(newAmount,newpayType,newduration)
            var payback = calculateInterest(newAmount,newpayType,newduration)+Number(newAmount)

            const formData = {
                amount: newAmount,
                payType: newpayType,
                duration: newduration,
                interest: interest,
                payback:payback
            };
            
            var summary = document.getElementById("loan_summary")
            summary.innerHTML= `The total interest is NGN ${interest} and you'll be 
            paying back ${payback}`
            localStorage.setItem("user_loan", JSON.stringify(formData))
            
    
        }
        
       
    }

    // console.log(formData)
    if (newAmount && newpayType && newduration){
        var summary = document.getElementById("loan_summary")
        summary.innerHTML= `The total interest is NGN ${calculateInterest(amount,payType,duration)} and you'll be 
        paying back ${calculateInterest(amount,payType,duration)+Number(amount)}`

    }
  



    // const inputField = document.getElementById("inputField");
    // const outputDiv = document.getElementById("output");

    // // Your code here
    // inputField.addEventListener("input", () => {
    //     const inputValue = inputField.value;
    //     console.log(inputValue)
    //     outputDiv.textContent = "You typed: " + inputValue;
    // });
});