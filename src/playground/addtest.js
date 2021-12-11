const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('greeting generate greeting from name', () => {
    const greeting = generateGreeting('brandon');
    expect(greeting).toBe('Hello brandon!')
});

test('should generate greeting for no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello anonymous!');
});