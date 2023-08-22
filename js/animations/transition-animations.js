// transition-animations.js

// Function to handle transition animations
function handleTransitionAnimations() {
    var animatedElements = Array.from(document.getElementsByClassName('transition-animation'));
  
    if (animatedElements.length === 0) {
      console.warn('No elements with the "transition-animation" class found. Transition animations will not be applied.');
      return;
    }
  
    animatedElements.forEach(function(element) {
      element.addEventListener('mouseenter', function() {
        if (!element.classList.contains('animate')) {
          element.classList.add('animate');
        }
      });
  
      element.addEventListener('mouseleave', function() {
        if (element.classList.contains('animate')) {
          element.classList.remove('animate');
        }
      });
    });
  }
  
  // Usage example: add the class "transition-animation" to elements that should have transition animations
  window.addEventListener('DOMContentLoaded', handleTransitionAnimations);
  