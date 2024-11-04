//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// app.js

// Accordion Toggle Functionality
const accordionToggles = document.querySelectorAll('.accordion-toggle');

accordionToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;

    // Toggle active class for the button
    toggle.classList.toggle('active');

    // Open or close the accordion content
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step');

  const animateSteps = () => {
    const windowHeight = window.innerHeight;

    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();

      if (rect.top < windowHeight && rect.bottom >= 0) {
        // When step is in view
        step.style.animationDelay = `${index * 0.1}s`; // Delay based on index
        step.style.opacity = 1; // Make visible
      }
    });
  };

  window.addEventListener('scroll', animateSteps);
  animateSteps(); // Call once to animate on load
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
});

