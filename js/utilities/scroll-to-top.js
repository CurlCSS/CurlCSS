// scroll-to-top.js

// Function to scroll to the top of the page
function scrollToTop() {
    var scrollDuration = 500; // Duration of the scroll animation in milliseconds
    var scrollStep = -window.scrollY / (scrollDuration / 15); // Amount to scroll on each animation step
  
    var scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
  
  // Usage example: add a button or element with the "scroll-to-top" class
  var scrollToTopButton = document.querySelector('.scroll-to-top');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
  }
  