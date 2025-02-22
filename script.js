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
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbyrUcYw1hfJAlwb9dO-AjOi-w4TK8IkYr68OQFZNmOnjl49RqqAXPH4BdorJyv0Oe9p8A/exec", {
        method: "POST",
        mode: "no-cors", // Prevents CORS issue
        body: formData
    })
    .then(() => {
        var responseMessage = document.getElementById("responseMessage");
        responseMessage.innerText = "✅ Successfully Submitted!";
        responseMessage.style.color = "green";
        form.reset();

        setTimeout(() => {
            var phone = formData.get("whatsapp");
            var msg = encodeURIComponent("Hello, I submitted a guest post order. Please check my details.");
            window.location.href = "https://wa.me/" + phone + "?text=" + msg;
        }, 2000);
    })
    .catch(() => {
        document.getElementById("responseMessage").innerText = "❌ Submission Failed! Network Error.";
        document.getElementById("responseMessage").style.color = "red";
    });
});
