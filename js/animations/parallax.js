// parallax.js

// Function to handle parallax effect
function parallax(element, speed) {
    if (!element || !element.nodeType === Node.ELEMENT_NODE) {
      console.error('Invalid element provided. Unable to apply parallax effect.');
      return;
    }
  
    if (typeof speed !== 'number') {
      console.error('Invalid speed value provided. Speed must be a number.');
      return;
    }
  
    function updatePosition() {
      var scrollTop = window.pageYOffset;
      var position = scrollTop * speed;
  
      element.style.transform = 'translateY(' + position + 'px)';
    }
  
    window.addEventListener('scroll', updatePosition);
  }
  
  // Usage example: apply parallax effect to an element with the class "parallax-element" and a speed of 0.5
  var parallaxElement = document.querySelector('.parallax-element');
  
  if (parallaxElement) {
    parallax(parallaxElement, 0.5);
  } else {
    console.error('Parallax element not found. Unable to apply parallax effect.');
  }
  