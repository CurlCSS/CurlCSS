// focus-trap.js

// Function to trap focus within a specific element
function focusTrap(element) {
    if (!element || !element.nodeType === Node.ELEMENT_NODE) {
      console.error('Invalid element provided. Unable to trap focus.');
      return;
    }
  
    var focusableElements = Array.from(element.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex="-1"])'
    ));
  
    if (focusableElements.length === 0) {
      console.warn('No focusable elements found within the provided element. Focus trap may not work as expected.');
      return;
    }
  
    var firstFocusable = focusableElements[0];
    var lastFocusable = focusableElements[focusableElements.length - 1];
  
    var handleTrapFocus = function(event) {
      if (event.key === 'Tab' || event.keyCode === 9) {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            event.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    };
  
    element.addEventListener('keydown', handleTrapFocus);
  }
  
  // Usage example: trap focus within an element with the class "focus-trap"
  var trapElement = document.querySelector('.focus-trap');
  focusTrap(trapElement);
  