import greet from '..';

test('is truthy', () => {
  const greeting = greet('Bun');
  expect(greeting).toBe('Hello Bun!');
});
