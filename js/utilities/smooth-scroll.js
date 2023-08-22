// smooth-scroll.js

// Function to handle smooth scrolling to an anchor element
function smoothScrollToAnchor(event) {
    event.preventDefault();
  
    var target = event.target.getAttribute('href');
    var offset = 0; // Adjust the offset if you have a fixed header or other elements
  
    if (target && target.startsWith('#')) {
      var targetElement = document.querySelector(target);
      if (targetElement) {
        var targetPosition = targetElement.offsetTop - offset;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 500; // Duration of the scroll animation in milliseconds
        var startTime = null;
  
        function scrollStep(timestamp) {
          if (!startTime) {
            startTime = timestamp;
          }
  
          var progress = timestamp - startTime;
          var easing = easeInOutQuad(progress / duration);
          var currentPosition = startPosition + distance * easing;
  
          window.scrollTo(0, currentPosition);
  
          if (progress < duration) {
            requestAnimationFrame(scrollStep);
          }
        }
  
        requestAnimationFrame(scrollStep);
      }
    }
  }
  
  // Easing function for smooth scrolling animation
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  
  // Usage example: add smooth scrolling to all anchor links with the "smooth-scroll" class
  var smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');
  if (smoothScrollLinks.length > 0) {
    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', smoothScrollToAnchor);
    });
  }
  