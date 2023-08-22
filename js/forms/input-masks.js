// input-masks.js

// Function to apply an input mask to a specific input element
function applyInputMask(input, mask) {
    input.addEventListener('input', formatInput);
    input.addEventListener('keydown', preventInvalidInput);
  
    function formatInput() {
      var value = input.value;
      var formattedValue = '';
      var valueIndex = 0;
  
      for (var i = 0; i < mask.length; i++) {
        var maskChar = mask[i];
  
        if (maskChar === '#' && valueIndex < value.length) {
          formattedValue += value[valueIndex];
          valueIndex++;
        } else if (maskChar !== '#') {
          formattedValue += maskChar;
        }
      }
  
      input.value = formattedValue;
    }
  
    function preventInvalidInput(event) {
      var keyCode = event.keyCode || event.which;
  
      // Allow backspace, delete, left arrow, and right arrow keys
      if (
        keyCode === 8 || // backspace
        keyCode === 46 || // delete
        keyCode === 37 || // left arrow
        keyCode === 39 // right arrow
      ) {
        return;
      }
  
      // Prevent input of invalid characters based on the mask
      var inputChar = String.fromCharCode(keyCode);
      var maskChar = mask[input.value.length];
  
      if (maskChar !== '#' || !inputChar.match(/^\d$/)) {
        event.preventDefault();
      }
    }
  }
  
  // Usage example
  var phoneNumberInput = document.getElementById('phone');
  applyInputMask(phoneNumberInput, '(###) ###-####');
  