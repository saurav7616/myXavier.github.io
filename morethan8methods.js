// Method 1: Adds two numbers
function add(a, b) {
    return a + b;
}

// Method 2: Subtracts two numbers
function subtract(a, b) {
    return a - b;
}

// Method 3: Multiplies two numbers
function multiply(a, b) {
    return a * b;
}

// Method 4: Divides two numbers
function divide(a, b) {
    if (b === 0) {
        // FIXME: Handle division by zero properly
        return "Cannot divide by zero";
    }
    return a / b;
}

// Method 5: Checks if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Method 6: Finds the maximum of two numbers
function max(a, b) {
    return a > b ? a : b;
}

// Method 7: Finds the minimum of two numbers
function min(a, b) {
    return a < b ? a : b;
}

// Method 8: Reverses a string
function reverseString(str) {
    // TODO: Add error handling for non-string inputs
    return str.split('').reverse().join('');
}

// Method 9: Checks if a string is a palindrome
function isPalindrome(str) {
    // TODO: Optimize for case-insensitive comparison
    const reversed = reverseString(str);
    return str === reversed;
}

// Method 10: Generates a random number between a range
function randomInRange(min, max) {
    // FIXME: Ensure min is less than max
    return Math.random() * (max - min) + min;
}