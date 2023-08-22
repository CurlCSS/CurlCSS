// screen-reader.js

// Function to toggle screen reader text visibility
function toggleScreenReaderText() {
    var screenReaderTextElements = Array.from(document.getElementsByClassName('screen-reader-text'));
  
    if (screenReaderTextElements.length === 0) {
      console.warn('No screen reader text elements found. Toggle functionality may not work as expected.');
      return;
    }
  
    screenReaderTextElements.forEach(function(element) {
      var isHidden = element.classList.contains('sr-only');
  
      if (isHidden) {
        element.classList.remove('sr-only');
        element.setAttribute('aria-hidden', 'false');
      } else {
        element.classList.add('sr-only');
        element.setAttribute('aria-hidden', 'true');
      }
    });
  }
  
  // Usage example: add a button with the class "toggle-screen-reader" to toggle screen reader text visibility
  var toggleButton = document.querySelector('.toggle-screen-reader');
  
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleScreenReaderText);
  } else {
    console.error('Toggle button not found. Unable to bind toggle functionality.');
  }
  