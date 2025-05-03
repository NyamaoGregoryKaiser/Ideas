/**
 * Utility library with helpful functions
 */

/**
 * Formats a date according to the specified format
 * @param {Date} date - The date to format
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD')
 * @returns {string} Formatted date string
 */
function formatDate(date, format = 'YYYY-MM-DD') {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Generates a random string of specified length
 * @param {number} length - Length of the string to generate
 * @returns {string} Random string
 */
function randomString(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Deep clones an object
 * @param {object} obj - The object to clone
 * @returns {object} Cloned object
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Debounces a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 300) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

module.exports = {
  formatDate,
  randomString,
  deepClone,
  debounce
};
/**
 * Generates a random color in hex format
 * @returns {string} Random hex color
 */
function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

/**
 * Formats a number with commas
 * @param {number} num - The number to format
 * @returns {string} Formatted number
 */
function formatNumber(num) {
  return num.toString().replace(/B(?=(d{3})+(?!d))/g, ",");
}

/**
 * Capitalizes the first letter of each word in a string
 * @param {string} str - The string to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeWords(str) {
  return str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Export new functions
module.exports = {
  ...module.exports,
  randomColor,
  formatNumber,
  capitalizeWords
};