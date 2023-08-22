// object-assign.js

// Polyfill for the Object.assign() method
if (typeof Object.assign !== 'function') {
    Object.assign = function(target) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
  
      var to = Object(target);
  
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
  
        if (nextSource != null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
  
            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
  
      return to;
    };
  }
  