// Tests for the utility functions
const { formatDate, randomString, deepClone, debounce } = require('../src/utils');

// Test formatDate function
test('formatDate formats dates correctly', () => {
  const date = new Date(2023, 0, 15, 10, 30, 45); // Jan 15, 2023, 10:30:45
  expect(formatDate(date, 'YYYY-MM-DD')).toBe('2023-01-15');
  expect(formatDate(date, 'MM/DD/YYYY')).toBe('01/15/2023');
  expect(formatDate(date, 'DD.MM.YYYY HH:mm')).toBe('15.01.2023 10:30');
});

// Test randomString function
test('randomString generates string of correct length', () => {
  expect(randomString(5).length).toBe(5);
  expect(randomString(10).length).toBe(10);
  expect(randomString().length).toBe(10); // Default length
});

// Test deepClone function
test('deepClone creates a deep copy of an object', () => {
  const original = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
  const clone = deepClone(original);
  
  // Modify clone
  clone.a = 99;
  clone.b.c = 98;
  clone.d[0] = 97;
  
  // Original should be unchanged
  expect(original.a).toBe(1);
  expect(original.b.c).toBe(2);
  expect(original.d[0]).toBe(1);
});

// Helper function to test debounce
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Test debounce function (async)
test('debounce delays function execution', async () => {
  let counter = 0;
  const increment = () => { counter++; };
  const debouncedIncrement = debounce(increment, 100);
  
  // Call multiple times
  debouncedIncrement();
  debouncedIncrement();
  debouncedIncrement();
  
  // Counter should still be 0 immediately
  expect(counter).toBe(0);
  
  // Wait for debounce
  await sleep(150);
  
  // Counter should be 1 after the wait
  expect(counter).toBe(1);
});

function test(name, testFn) {
  try {
    testFn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(error);
  }
}