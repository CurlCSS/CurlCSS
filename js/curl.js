//===============================================================
//===============================================================
// Lazy loading function with lazy loading skeleton
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
  
    const options = {
      rootMargin: '50px 0px',
      threshold: 0.01
    };
  
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.getAttribute('data-src');
  
          // Display lazy loading skeleton or loading spinner while the image is being loaded
          image.classList.add('lazy-loading');
  
          const imgElement = new Image();
          imgElement.onload = function () {
            // Replace the src attribute with the loaded image
            image.src = src;
  
            // Remove the data-src attribute
            image.removeAttribute('data-src');
  
            // Remove the lazy loading class
            image.classList.remove('lazy-loading');
  
            // Stop observing the image
            observer.unobserve(image);
          };
  
          imgElement.onerror = function () {
            // Handle error: Replace with fallback or display error message
            image.src = 'path/to/fallback.jpg'; // Fallback image source
  
            // Remove the data-src attribute
            image.removeAttribute('data-src');
  
            // Remove the lazy loading class
            image.classList.remove('lazy-loading');
  
            // Stop observing the image
            observer.unobserve(image);
          };
  
          // Load the image
          imgElement.src = src;
        }
      });
    }
  
    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Observe each image
    images.forEach((image) => {
      observer.observe(image);
    });
  }
  
  // Call the lazy loading function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', lazyLoadImages);


  //===================================================================
  //===================================================================

 // DOM selector function
 function selectElements(selector) {
  return document.querySelectorAll(selector);
}

// Select all paragraphs on the page
const paragraphs = selectElements('p');

// Loop through the selected paragraphs and apply some styling
paragraphs.forEach((paragraph) => {
  paragraph.style.color = 'green';
});


//==========================================================================
//=========================================================================
// Ajax request function
function ajaxRequest(url, method, data, successCallback, errorCallback) {
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (successCallback && typeof successCallback === 'function') {
          successCallback(xhr.responseText);
        }
      } else {
        if (errorCallback && typeof errorCallback === 'function') {
          errorCallback(xhr.status);
        }
      }
    }
  };
  
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
}

//==========================================================================
//=========================================================================
// Modal window function

function createModal(content = '', title = 'Modal Title', titleClass = '', contentClass = '') {
  // Create modal elements
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalTitle = document.createElement('h5');
  modalTitle.classList.add('modal-title');
  modalTitle.textContent = title;
  modalTitle.classList.add(titleClass);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.textContent = content;
  modalContent.classList.add(contentClass);

  const closeButton = document.createElement('button');
  closeButton.classList.add('modal-close');
  closeButton.textContent = 'Close';

  // Add event listener to close the modal when the close button is clicked
  closeButton.addEventListener('click', () => {
    modalOverlay.remove();
  });

  // Append modal elements to the document body
  modal.appendChild(modalTitle);
  modal.appendChild(modalContent);
  modal.appendChild(closeButton);

  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);
}


// usage example for modal
const openModalButton = document.getElementById('open-modal-button');
openModalButton.addEventListener('click', () => {
  const modalContent = 'This is the dynamic content. Reset your password and try again';
  const modalTitle = 'Custom Title';
  const titleClass = 'custom-title-style';
  const contentClass = 'custom-content-style';
  createModal(modalContent, modalTitle, titleClass, contentClass);
});


//==========================================================================
//=========================================================================
// Dropdown menu function






