// scroll-animations.js

// Function to handle scroll animations
function handleScrollAnimations() {
    var animatedElements = Array.from(document.getElementsByClassName('scroll-animation'));
  
    if (animatedElements.length === 0) {
      console.warn('No elements with the "scroll-animation" class found. Scroll animations will not be applied.');
      return;
    }
  
    animatedElements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  }
  
  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
  
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
  }
  
  // Usage example: add the class "scroll-animation" to elements that should have scroll animations
  window.addEventListener('scroll', handleScrollAnimations);
  window.addEventListener('resize', handleScrollAnimations);
  window.addEventListener('DOMContentLoaded', handleScrollAnimations);
  