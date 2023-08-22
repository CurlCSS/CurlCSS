// =================================================================
// =================================================================
// accordion 

// initialize accordion
function initializeAccordion() {
    const accordionContainers = document.querySelectorAll('[data-accordion]');
  
    accordionContainers.forEach(container => {
      const accordionItems = container.querySelectorAll('[data-accordion-item]');
      const expandOnHover = container.getAttribute('data-accordion-expand-on-hover') === 'true';
      const collapseOthers = container.getAttribute('data-accordion-collapse-others') !== 'false';
  
      accordionItems.forEach(item => {
        const trigger = item.querySelector('[data-accordion-trigger]');
        const content = item.querySelector('[data-accordion-content]');
  
        // Attach event listener for click or hover based on configuration
        if (expandOnHover) {
          trigger.addEventListener('mouseenter', () => toggleAccordion(item, collapseOthers));
          trigger.addEventListener('mouseleave', () => toggleAccordion(item, false));
        } else {
          trigger.addEventListener('click', () => toggleAccordion(item, collapseOthers));
        }
      });
  
      // Set the default or initially expanded accordion item
      const defaultItem = container.querySelector('[data-accordion-item][data-accordion-default]');
      if (defaultItem) {
        toggleAccordion(defaultItem, collapseOthers);
      }
    });
  }

  // show and hide accordion 
  function toggleAccordion(item, collapseOthers) {
    const isExpanded = item.getAttribute('aria-expanded') === 'true';
    const content = item.querySelector('[data-accordion-content]');
  
    if (isExpanded) {
      item.setAttribute('aria-expanded', 'false');
      content.style.display = 'none';
    } else {
      item.setAttribute('aria-expanded', 'true');
      content.style.display = 'block';
  
      if (collapseOthers) {
        const container = item.closest('[data-accordion]');
        const otherItems = container.querySelectorAll('[data-accordion-item]:not([data-accordion-item="' + item.getAttribute('data-accordion-item') + '"])');
  
        otherItems.forEach(otherItem => {
          otherItem.setAttribute('aria-expanded', 'false');
          otherItem.querySelector('[data-accordion-content]').style.display = 'none';
        });
      }
    }
  }

  // keyboard navigation 
  function handleKeyboardNavigation(event) {
    const container = event.currentTarget.closest('[data-accordion]');
    const items = Array.from(container.querySelectorAll('[data-accordion-item]'));
    const currentItemIndex = items.indexOf(event.currentTarget);
  
    let nextItemIndex;
  
    if (event.key === 'ArrowUp' && currentItemIndex > 0) {
      nextItemIndex = currentItemIndex - 1;
    } else if (event.key === 'ArrowDown' && currentItemIndex < items.length - 1) {
      nextItemIndex = currentItemIndex + 1;
    }
  
    if (nextItemIndex !== undefined) {
      event.preventDefault();
      items[nextItemIndex].querySelector('[data-accordion-trigger]').focus();
    }
  }

  //
  function onOpen(item) {
    // Custom code to execute when an accordion item opens
  
    // For example, you might want to change the background color of the opened item
    item.style.backgroundColor = 'lightblue';
  
    // You can also perform additional actions like fetching data or triggering animations
    fetchData(item.getAttribute('data-accordion-item-id'));
    playAnimation(item.querySelector('.accordion-content'));
  }
  
  function onClose(item) {
    // Custom code to execute when an accordion item closes
  
    // For example, you might want to reset the background color of the closed item
    item.style.backgroundColor = '';
  
    // You can also perform other actions like stopping ongoing animations or clearing data
    stopAnimation(item.querySelector('.accordion-content'));
    clearData();
  }
  
  