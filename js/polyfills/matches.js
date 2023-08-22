// matches.js

// Polyfill for the Element.matches() method
if (!Element.prototype.matches) {
    Element.prototype.matches = function(selector) {
      var el = this;
  
      // Ensure selector is a string
      if (typeof selector !== 'string') {
        throw new TypeError('The "selector" parameter must be a string.');
      }
  
      // Handle non-element nodes
      if (!(el instanceof Element)) {
        return false;
      }
  
      // Check for vendor-prefixed matchesSelector methods
      var matchesSelector = el.matches ||
                            el.msMatchesSelector ||
                            el.webkitMatchesSelector;
  
      if (matchesSelector) {
        // Use the vendor-prefixed method if available
        return matchesSelector.call(el, selector);
      } else {
        // Polyfill implementation for browsers without matchesSelector support
        var matches = el.parentNode.querySelectorAll(selector);
        var i = 0;
        while (matches[i] && matches[i] !== el) {
          i++;
        }
        return Boolean(matches[i]);
      }
    };
  }
  