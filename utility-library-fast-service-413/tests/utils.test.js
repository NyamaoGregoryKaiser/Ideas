
// Test new utility functions
test('randomColor generates valid hex color', () => {
  const color = randomColor();
  expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
});

test('formatNumber adds commas correctly', () => {
  expect(formatNumber(1000)).toBe('1,000');
  expect(formatNumber(1000000)).toBe('1,000,000');
  expect(formatNumber(123)).toBe('123');
});

test('capitalizeWords capitalizes each word', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
  expect(capitalizeWords('this is a test')).toBe('This Is A Test');
});