import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  console.log("Intranova Web Initialized");

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active'); // Optional: Add animation to hamburger
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // Scroll Animations (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Hero Slider Logic
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 4000);
  }

  // Form Handling - Old handler removed to allow Formcarry submission
  // Since the form has an action URL, we'll let it handle the post normally
  // or you can add AJAX handling here if desired.
  const contactForm = document.getElementById('enquiryForm');
  if (contactForm) {
    // Optional: Client-side validation could go here
  }
});
