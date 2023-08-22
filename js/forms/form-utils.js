// form-utils.js

// Function to serialize form data into an object
function serializeForm(form) {
    var formData = new FormData(form);
    var serialized = {};
  
    for (var pair of formData.entries()) {
      serialized[pair[0]] = pair[1];
    }
  
    return serialized;
  }
  
  // Function to validate required fields in a form
  function validateForm(form) {
    var inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    var isValid = true;
  
    inputs.forEach(function (input) {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
        // Display error message
        var errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'This field is required';
        input.parentNode.appendChild(errorMessage);
      } else {
        input.classList.remove('error');
        // Remove error message if exists
        var errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
          errorMessage.remove();
        }
      }
    });
  
    return isValid;
  }
  
  // Function to reset the form
  function resetForm(form) {
    form.reset();
  
    var inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(function (input) {
      input.classList.remove('error');
      // Remove error message if exists
      var errorMessage = input.parentNode.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
    });
  }
  
  // Usage example
  var myForm = document.getElementById('myForm');
  
  myForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    if (validateForm(myForm)) {
      var formData = serializeForm(myForm);
      // Do something with the form data
      console.log(formData);
      // myForm.submit(); // Uncomment this line to submit the form
      resetForm(myForm);
    }
  });
  