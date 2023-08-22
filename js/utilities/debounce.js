// debounce.js

// Function to debounce the execution of a given function
function debounce(func, delay, immediate) {
    var timeoutId;
  
    return function() {
      var context = this;
      var args = arguments;
  
      clearTimeout(timeoutId);
  
      if (immediate && !timeoutId) {
        func.apply(context, args);
      }
  
      timeoutId = setTimeout(function() {
        timeoutId = null;
  
        if (!immediate) {
          func.apply(context, args);
        }
      }, delay);
    };
  }
  
  // Usage example:
  function handleResize() {
    console.log('Handling resize event...');
    // Code to handle the resize event
  }
  
  var debouncedResize = debounce(handleResize, 300, false);
  window.addEventListener('resize', debouncedResize);
  