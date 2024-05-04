// login.js

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("#form");
    var errorDiv = document.querySelector("#error");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting by default
  
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#password").value;
  
      // Simple validation
      if (email.trim() === '' || password.trim() === '') {
        errorDiv.textContent = 'Please fill in all fields.';
        return;
      }
  
      // Simulate a login process
      if (email === 'your_valid_email@example.com' && password === 'your_password') {
        // Successful login
        alert('Login successful!'); // For demonstration purposes
      } else {
        // Failed login
        errorDiv.textContent = 'Invalid email or password. Please try again.';
      }
    });
  });
  