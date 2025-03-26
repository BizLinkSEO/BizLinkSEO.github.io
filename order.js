// Helper function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) ? decodeURIComponent(urlParams.get(param)) : "";
}

window.onload = function () {
    console.log("✅ order.js is loaded.");

    // Retrieve values from URL
    const service = getQueryParam("service");
    const packageName = getQueryParam("package");
    const price = getQueryParam("price");
    const delivery = getQueryParam("delivery");
    const da = getQueryParam("da"); // 🛠 Fix: Ensure DA is retrieved
    const traffic = getQueryParam("traffic"); // 🛠 Fix: Ensure Traffic is retrieved
    const features = getQueryParam("features");

    // Debugging Logs
    console.log("✅ Extracted Order Details:");
    console.log("Service:", service);
    console.log("Package:", packageName);
    console.log("Price:", price);
    console.log("Delivery:", delivery);
    console.log("DA:", da);
    console.log("Traffic:", traffic);
    console.log("Features:", features);

    // Populate Form Fields
    document.getElementById("service").value = service;
    document.getElementById("package").value = packageName;
    document.getElementById("price").value = price;
    document.getElementById("delivery").value = delivery;
    document.getElementById("da").value = da; // 🛠 Fix: Populate DA
    document.getElementById("traffic").value = traffic; // 🛠 Fix: Populate Traffic
    document.getElementById("features").value = features || "No additional features.";
};








 
 document.addEventListener("DOMContentLoaded", function() {
    var serviceField = document.getElementById("service");
    var articleRequired = document.getElementById("articleRequired"); // Fixed ID
    var articleDetailsField = document.getElementById("articleDetailsField"); // Fixed ID
    var uploadFields = document.getElementById("uploadFields"); // Fixed ID

    function toggleArticleOptions() {
        console.log("🛠 Checking Service Selection:", serviceField.value);
        if (serviceField.value === "Niche Edits") {
            console.log("❌ Article writing disabled for Niche Edits.");
            articleRequired.disabled = true;
            articleRequired.value = ""; // Reset selection
            articleDetailsField.style.display = "none";
            uploadFields.style.display = "none";
        } else {
            articleRequired.disabled = false;
        }
    }

    // Run when the page loads
    toggleArticleOptions();

    // Event Listener for Article Selection
    articleRequired.addEventListener("change", function() {
        console.log("📜 Article Required Selected:", articleRequired.value);
        if (articleRequired.value === "yes") {
            articleDetailsField.style.display = "block";
            uploadFields.style.display = "none"; // Hide upload if article is needed
        } else if (articleRequired.value === "no") {
            articleDetailsField.style.display = "none";
            uploadFields.style.display = "block"; // Show upload field
        } else {
            articleDetailsField.style.display = "none";
            uploadFields.style.display = "none";
        }
    });

    // Watch for Service Field Changes (In case user manually changes it)
    serviceField.addEventListener("change", toggleArticleOptions);
});


