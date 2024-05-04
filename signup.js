
// signup.js

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting by default
  
      var username = document.querySelector('input[name="Username"]').value;
      var email = document.querySelector('input[name="email"]').value;
      var password = document.querySelector('input[name="psw"]').value;
      var termsChecked = document.querySelector('input[type="checkbox"]').checked;
  
      // Simple validation
      if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }
  
      if (!termsChecked) {
        alert('Please agree to the terms and conditions.');
        return;
      }
  
      // If all checks pass, you can proceed with form submission here
      // For example, you can submit the form using AJAX or a similar method
      alert('Sign-up successful!'); // For demonstration purposes
  
      // You can redirect the user to another page after successful sign-up
      // window.location.href = 'success.html';
    });
  
    function isValidEmail(email) {
      // Basic email validation using a regular expression
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }
  });
  