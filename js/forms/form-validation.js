// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
    // Regular expression to validate phone number format
    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phoneNumber);
  }
  
  // Function to validate form fields
  function validateForm(form) {
    var emailField = form.querySelector('#email');
    var passwordField = form.querySelector('#password');
    var confirmPasswordField = form.querySelector('#confirmPassword');
    var phoneNumberField = form.querySelector('#phoneNumber');
    var isValid = true;
  
    // Validate email field
    if (emailField && !validateEmail(emailField.value)) {
      isValid = false;
      emailField.classList.add('error');
      emailField.nextElementSibling.textContent = 'Invalid email address';
    } else {
      emailField.classList.remove('error');
      emailField.nextElementSibling.textContent = '';
    }
  
    // Validate password field
    if (passwordField && !validatePasswordStrength(passwordField.value)) {
      isValid = false;
      passwordField.classList.add('error');
      passwordField.nextElementSibling.textContent =
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit';
    } else {
      passwordField.classList.remove('error');
      passwordField.nextElementSibling.textContent = '';
    }
  
    // Validate confirm password field
    if (confirmPasswordField && confirmPasswordField.value !== passwordField.value) {
      isValid = false;
      confirmPasswordField.classList.add('error');
      confirmPasswordField.nextElementSibling.textContent = 'Passwords do not match';
    } else {
      confirmPasswordField.classList.remove('error');
      confirmPasswordField.nextElementSibling.textContent = '';
    }
  
    // Validate phone number field
    if (phoneNumberField && !validatePhoneNumber(phoneNumberField.value)) {
      isValid = false;
      phoneNumberField.classList.add('error');
      phoneNumberField.nextElementSibling.textContent = 'Invalid phone number';
    } else {
      phoneNumberField.classList.remove('error');
      phoneNumberField.nextElementSibling.textContent = '';
    }
  
    return isValid;
  }
  
  // Usage example
  var myForm = document.getElementById('myForm');
  
  myForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    if (validateForm(myForm)) {
      // Form is valid, proceed with submission
      myForm.submit();
    }
  });
  