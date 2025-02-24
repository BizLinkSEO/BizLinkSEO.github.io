
// Smooth Scroll for Anchor Links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Testimonial Slider (Optional)
  const testimonialSlider = new bootstrap.Carousel('#testimonialSlider', {
    interval: 5000,
    pause: 'hover'
  });