const scriptURL = "https://script.google.com/macros/s/AKfycbwM0BSFvLsMcnwRWue4PKt4z0URqtDhqxef08Quttc77Vy4cRJ6d8fxs9jq8ROotjx98g/exec"; // Replace with your Google Apps Script URL
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(scriptURL, { method: "POST", body: formData })
            .then((response) => {
                if (response.ok) {
                    document.getElementById("successMessage").style.display = "block";

                    // WhatsApp Redirection
                    const name = document.getElementById("name").value;
                    const email = document.getElementById("email").value;
                    const phone = document.getElementById("phone").value;
                    const subject = document.getElementById("subject").value;
                    const message = document.getElementById("message").value;

                    const whatsappNumber = "923XXXXXXXXX"; // Replace with your WhatsApp number
                    const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20submitted%20a%20message%20on%20your%20website.%0A%0A*Name:*%20${encodeURIComponent(name)}%0A*Email:*%20${encodeURIComponent(email)}%0A*Phone:*%20${encodeURIComponent(phone)}%0A*Subject:*%20${encodeURIComponent(subject)}%0A*Message:*%20${encodeURIComponent(message)}`;

                    setTimeout(() => {
                        window.location.href = whatsappURL;
                    }, 2000);

                    form.reset();
                    setTimeout(() => {
                        document.getElementById("successMessage").style.display = "none";
                    }, 5000);
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .catch((error) => {
                document.getElementById("errorMessage").style.display = "block";
                setTimeout(() => {
                    document.getElementById("errorMessage").style.display = "none";
                }, 5000);
            });
    });