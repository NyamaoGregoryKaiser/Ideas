
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