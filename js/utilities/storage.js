// storage.js

// Function to check if localStorage is supported in the browser
function isLocalStorageSupported() {
    try {
      var testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Function to set a value in localStorage
  function setLocalStorageItem(key, value) {
    if (isLocalStorageSupported()) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        // Handle localStorage errors (e.g., storage quota exceeded)
        console.error('Error setting localStorage item:', e);
      }
    } else {
      console.warn('localStorage is not supported in this browser.');
    }
  }
  
  // Function to get a value from localStorage
  function getLocalStorageItem(key) {
    if (isLocalStorageSupported()) {
      try {
        var value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (e) {
        // Handle localStorage errors (e.g., corrupted data)
        console.error('Error getting localStorage item:', e);
      }
    } else {
      console.warn('localStorage is not supported in this browser.');
    }
    return null;
  }
  
  // Function to remove a value from localStorage
  function removeLocalStorageItem(key) {
    if (isLocalStorageSupported()) {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        // Handle localStorage errors
        console.error('Error removing localStorage item:', e);
      }
    } else {
      console.warn('localStorage is not supported in this browser.');
    }
  }
  
  // Function to clear all items from localStorage
  function clearLocalStorage() {
    if (isLocalStorageSupported()) {
      try {
        localStorage.clear();
      } catch (e) {
        // Handle localStorage errors
        console.error('Error clearing localStorage:', e);
      }
    } else {
      console.warn('localStorage is not supported in this browser.');
    }
  }
  
  // Usage example
  setLocalStorageItem('username', 'John Doe');
  var username = getLocalStorageItem('username');
  console.log(username); // Output: John Doe
  