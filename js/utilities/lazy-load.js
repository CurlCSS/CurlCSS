// lazy-load.js

// Function to lazy load images
function lazyLoadImages() {
    var lazyImages = Array.from(document.querySelectorAll('[data-src]'));
  
    if (lazyImages.length === 0) {
      console.warn('No lazy load images found. Lazy loading will not be applied.');
      return;
    }
  
    lazyImages.forEach(function(image) {
      if (isElementInViewport(image) && image.dataset.src) {
        loadImage(image);
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
  
  // Function to load an image and handle errors
  function loadImage(image) {
    var src = image.dataset.src;
  
    var imgElement = new Image();
    imgElement.onload = function() {
      image.src = src;
      image.removeAttribute('data-src');
    };
    imgElement.onerror = function() {
      console.error('Error loading image:', src);
    };
    imgElement.src = src;
  }
  
  // Usage example: add the "data-src" attribute to images that should be lazily loaded
  window.addEventListener('scroll', lazyLoadImages);
  window.addEventListener('resize', lazyLoadImages);
  window.addEventListener('DOMContentLoaded', lazyLoadImages);
  