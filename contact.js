window.onload = function () {
    const googleScriptURL = "https://script.google.com/macros/s/AKfycbzn6pg8ahr5ZmIH4GRytB_ns9DWYEkz25fb1DRxcGKuzRIcyk-fq8NxCgsXW6QbojcI/exec"; // Replace with your Google Apps Script URL
    const contactForm = document.getElementById("contactForm");

    const whatsappButton = document.getElementById("sendWhatsApp");
    const emailButton = document.getElementById("sendEmail");

    if (!whatsappButton || !emailButton) {
        console.error("❌ Buttons not found! Check HTML IDs.");
        return;
    }

    function saveDataToGoogleSheets(formData, callback) {
        fetch(googleScriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(() => {
            console.log("✅ Data saved successfully!");
            callback();
        })
        .catch(error => {
            console.error("❌ Error saving data:", error);
            alert("⚠ Data save failed! Check console.");
        });
    }

    whatsappButton.addEventListener("click", function () {
        let data = getFormData();
        if (!data) return;

        saveDataToGoogleSheets(data, function () {
            const whatsappNumber = "923474752708";
            const whatsappMessage = `📌 *New Guest Posting Order:*\n\n`
                + `📝 *Name:* ${data.name}\n📞 *Phone:* ${data.phone}\n📧 *Email:* ${data.email}\n🌐 *Website:* ${data.website}\n`
                + `📌 *Service:* ${data.service}\n🔍 *Niche:* ${data.niche}\n📄 *Message:* ${data.message}`;

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, "_blank");
        });
    });

    emailButton.addEventListener("click", function (event) {
        event.preventDefault();

        let data = getFormData();
        if (!data) return;

        saveDataToGoogleSheets(data, function () {
            setTimeout(() => {
                const emailRecipient = "bloomguestposting@gmail.com";
                const emailSubject = `New Order from ${data.name}`;
                const emailBody = `Name: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0AWebsite: ${data.website}`
                    + `%0AService: ${data.service}%0ANiche: ${data.niche}%0AMessage: ${data.message}`;

                const emailURL = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;
                window.open(emailURL, "_blank");
            }, 500);
        });
    });

    function getFormData() {
        let form = document.getElementById("contactForm");
        let formData = new FormData(form);
        let jsonData = {};
        formData.forEach((value, key) => { jsonData[key] = value.trim(); });

        if (!jsonData.name || !jsonData.phone || !jsonData.email || !jsonData.website || !jsonData.service) {
            alert("⚠ Please fill all required fields!");
            return null;
        }
        return jsonData;
    }
};
