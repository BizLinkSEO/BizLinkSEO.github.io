// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dropdown functionality
  document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });


  <script>
    const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL'; // Replace with your Google Apps Script URL
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
      })
        .then((response) => {
          successMessage.style.display = 'block';
          form.reset();
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        })
        .catch((error) => {
          errorMessage.style.display = 'block';
          setTimeout(() => {
            errorMessage.style.display = 'none';
          }, 5000);
        });
    });
  </script>