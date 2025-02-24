function toggleBudgetInput() {
    var budgetSelect = document.getElementById("budgetSelect");
    var customBudget = document.getElementById("customBudget");

    if (budgetSelect.value === "Other") {
        customBudget.style.display = "block";
        customBudget.required = true;
    } else {
        customBudget.style.display = "none";
        customBudget.required = false;
    }
}



document.getElementById("guestPostForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission
    var form = event.target;
    var formData = new FormData(form);

    // ✅ Send data to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbyrUcYw1hfJAlwb9dO-AjOi-w4TK8IkYr68OQFZNmOnjl49RqqAXPH4BdorJyv0Oe9p8A/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMessage").innerText = "✅ Successfully Submitted!";
        document.getElementById("responseMessage").style.color = "green";

        // ✅ Wait 2 seconds before redirecting
        setTimeout(() => {
            var fixedPhone = "9230704019488"; // 🔥 Change this to YOUR WhatsApp number
            var msg = encodeURIComponent("Hello, I submitted a guest post order. Please check my details.");
            window.location.href = "https://wa.me/" + fixedPhone + "?text=" + msg;
        }, 2000);
        
        form.reset(); // ✅ Clear form after submission
    })
    .catch(error => {
        console.error("Submission error:", error);
        document.getElementById("responseMessage").innerText = "❌ Submission Failed! Try Again.";
        document.getElementById("responseMessage").style.color = "red";
    });
});
