document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ order.js is loaded and running.");

    const orderForm = document.getElementById("orderForm");
    const submitWhatsApp = document.getElementById("submitWhatsApp");
    const submitEmail = document.getElementById("submitEmail");

    // ✅ Helper function to collect form data
    function getFormData() {
        return {
            service: document.getElementById("service").value || "N/A",
            package: document.getElementById("package").value || "N/A",
            price: document.getElementById("price").value || "N/A",
            delivery: document.getElementById("delivery").value || "N/A",
            da: document.getElementById("da").value || "N/A",
            traffic: document.getElementById("traffic").value || "N/A",
            websiteUrl: document.getElementById("websiteUrl").value || "N/A",
            anchorText: document.getElementById("anchorText").value || "N/A",
            email: document.getElementById("email").value || "N/A",
            phone: document.getElementById("phone").value || "N/A",
            articleRequired: document.getElementById("articleRequired").value || "N/A",
            googleDocsLink: document.getElementById("googleDocsLink").value || "N/A",
            notes: document.getElementById("notes").value || "N/A"
        };
    }

    // ✅ Function to send data to Google Sheets
    async function sendToGoogleSheets(formData) {
        const scriptURL = "https://script.google.com/macros/s/AKfycbxFPpJS9pJN1z3cI7UB9RgwXbKW-sCARneytwe2shQ0nfACWmX35GenpANcZKW00NrJVg/exec"; // Replace with actual Google Apps Script URL
    
        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });
    
            const result = await response.text();
            console.log("✅ Google Sheets Response:", result);
    
            if (result.trim() === "Success") {
                return true;
            } else {
                alert("⚠️ Error: Google Sheets did not confirm submission.");
                return false;
            }
        } catch (error) {
            console.error("❌ Error Sending to Google Sheets:", error);
            alert("❌ Order failed to save! Please check your internet connection.");
            return false;
        }
    }
    

    // ✅ WhatsApp Order Submission
    submitWhatsApp.addEventListener("click", async function () {
        console.log("🟢 WhatsApp Button Clicked!");
        const formData = getFormData();
        console.log("✅ Order Data:", formData);

        // Save to Google Sheets first
        const saved = await sendToGoogleSheets(formData);
        if (!saved) {
            alert("❌ Order failed to save! Please try again.");
            return;
        }

        // Construct WhatsApp message
        const whatsappNumber = "923474752708"; // Change to your number
        const whatsappMessage = `Hello, I have submitted an order. Here are the details:

📌 *Service:* ${formData.service}
📌 *Package:* ${formData.package}
💰 *Price:* ${formData.price}
🕒 *Delivery Time:* ${formData.delivery}
🏆 *DA:* ${formData.da}
🚦 *Traffic:* ${formData.traffic}
🔗 *Website URL:* ${formData.websiteUrl}
🔗 *Anchor Text:* ${formData.anchorText}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📝 *Article Required:* ${formData.articleRequired}
📄 *Google Docs Link:* ${formData.googleDocsLink}
🗒️ *Notes:* ${formData.notes}

Please confirm my order.`;

        // Redirect to WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.location.href = whatsappURL;
    });

    // ✅ Email Order Submission
    submitEmail.addEventListener("click", async function () {
        console.log("🔵 Email Button Clicked!");
        const formData = getFormData();
        console.log("✅ Order Data:", formData);

        // Save to Google Sheets first
        const saved = await sendToGoogleSheets(formData);
        if (!saved) {
            alert("❌ Order failed to save! Please try again.");
            return;
        }

        // Construct Email message
        const emailAddress = "bloomguestposting@gmail.com"; // Change to your email
        const emailSubject = "New Order Submission";
        const emailBody = `Hello, I have submitted an order. Here are the details:\n\n
Service: ${formData.service}\n
Package: ${formData.package}\n
Price: ${formData.price}\n
Delivery Time: ${formData.delivery}\n
DA: ${formData.da}\n
Traffic: ${formData.traffic}\n
Website URL: ${formData.websiteUrl}\n
Anchor Text: ${formData.anchorText}\n
Email: ${formData.email}\n
Phone: ${formData.phone}\n
Article Required: ${formData.articleRequired}\n
Google Docs Link: ${formData.googleDocsLink}\n
Notes: ${formData.notes}`;

        // Redirect to Email
        const emailURL = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = emailURL;
    });
});
