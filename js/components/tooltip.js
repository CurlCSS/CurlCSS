// tooltip functions 
// Get all the tooltip triggers
const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

// Loop through the triggers and add event listeners
tooltipTriggers.forEach((trigger) => {
  // Show the tooltip on hover
  trigger.addEventListener('mouseover', () => {
    trigger.querySelector('.tooltip').classList.add('show');
  });

  // Hide the tooltip on mouseout
  trigger.addEventListener('mouseout', () => {
    trigger.querySelector('.tooltip').classList.remove('show');
  });
});
