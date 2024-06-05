// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      });
  });

  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
          alert('All fields are required.');
          return;
      }

      if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      // If everything is valid, you can submit the form or handle the data as needed
      alert('Form submitted successfully!');
      form.reset();
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});
