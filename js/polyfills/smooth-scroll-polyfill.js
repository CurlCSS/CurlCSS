// smooth-scroll-polyfill.js

// Polyfill for the smooth scrolling behavior
if (!('scrollBehavior' in document.documentElement.style) && 'requestAnimationFrame' in window) {
    var polyfillSmoothScroll = function(targetScrollTop, duration) {
      var startScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var distance = targetScrollTop - startScrollTop;
      var startTime = null;
  
      function smoothScroll(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }
  
        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);
        var easing = function(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        var scrollY = startScrollTop + distance * easing(percentage);
  
        // Make sure scrollY doesn't exceed the target scroll position
        scrollY = distance > 0 ? Math.min(scrollY, targetScrollTop) : Math.max(scrollY, targetScrollTop);
  
        window.scrollTo(0, scrollY);
  
        if (progress < duration && window.pageYOffset !== targetScrollTop) {
          window.requestAnimationFrame(smoothScroll);
        }
      }
  
      window.requestAnimationFrame(smoothScroll);
    };
  
    // Add smooth scrolling behavior to the `Element.prototype`
    Element.prototype.smoothScroll = function(duration) {
      var targetScrollTop = Math.floor(this.getBoundingClientRect().top + window.pageYOffset);
      polyfillSmoothScroll(targetScrollTop, duration);
    };
  }
  