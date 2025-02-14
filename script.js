// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close Hamburger Menu on Link Click
navLinks.addEventListener('click', () => {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});