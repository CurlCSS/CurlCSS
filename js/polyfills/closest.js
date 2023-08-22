// closest.js

// Polyfill for the Element.closest() method
if (!Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
      var el = this;
      
      // Ensure selector is a string
      if (typeof selector !== 'string') {
        throw new TypeError('The "selector" parameter must be a string.');
      }
      
      // Handle non-element nodes
      if (!(el instanceof Element)) {
        return null;
      }
      
      // Traverse up the DOM tree
      while (el) {
        // Check if the current element matches the selector
        if (el.matches(selector)) {
          return el;
        }
        
        // Move up to the parent element
        el = el.parentElement;
      }
      
      // No matching element found
      return null;
    };
  }
  