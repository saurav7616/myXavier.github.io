// dummytest.js

// Function to generate a random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random string
function getRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(getRandomNumber(0, chars.length - 1));
    }
    return result;
}

// Dummy data generator
function generateDummyData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            id: i + 1,
            name: getRandomString(10),
            age: getRandomNumber(18, 60),
            email: `${getRandomString(5)}@example.com`,
            isActive: getRandomNumber(0, 1) === 1
        });
    }
    return data;
}

// Example usage of dummy data generator
const dummyData = generateDummyData(50);
console.log(dummyData);

// Dummy class
class DummyClass {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Value: ${this.value}`);
    }

    static greet() {
        console.log('Hello from DummyClass!');
    }
}

// Example usage of DummyClass
const dummyInstance = new DummyClass('Test', 123);
dummyInstance.printDetails();
DummyClass.greet();

// Dummy async function
async function fetchDummyData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Dummy data fetched!');
        }, 1000);
    });
}

// Example usage of async function
fetchDummyData().then((data) => console.log(data));

// Dummy array operations
const numbers = Array.from({ length: 20 }, () => getRandomNumber(1, 100));
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const squaredNumbers = numbers.map((num) => num * num);

console.log('Numbers:', numbers);
console.log('Even Numbers:', evenNumbers);
console.log('Squared Numbers:', squaredNumbers);

// Dummy recursive function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// Dummy event listener
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
});

// Dummy object
const dummyObject = {
    id: 1,
    name: 'Dummy Object',
    isActive: true,
    details: {
        description: 'This is a dummy object',
        createdAt: new Date()
    },
    printInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
};

dummyObject.printInfo();

// Dummy promise
const dummyPromise = new Promise((resolve, reject) => {
    const success = getRandomNumber(0, 1) === 1;
    setTimeout(() => {
        if (success) {
            resolve('Promise resolved successfully!');
        } else {
            reject('Promise rejected!');
        }
    }, 500);
});

dummyPromise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

// Dummy loop
for (let i = 0; i < 10; i++) {
    console.log(`Loop iteration: ${i}`);
}

// Dummy setTimeout
setTimeout(() => {
    console.log('This is a delayed message.');
}, 2000);

// Dummy regular expression
const regex = /^[a-zA-Z0-9]+$/;
console.log('Regex test:', regex.test('Test123'));

// Dummy function with default parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet();
greet('Saurav');

// Dummy array sorting
const randomNumbers = Array.from({ length: 10 }, () => getRandomNumber(1, 100));
console.log('Unsorted Numbers:', randomNumbers);
console.log('Sorted Numbers:', randomNumbers.sort((a, b) => a - b));

// Dummy date operations
const now = new Date();
console.log('Current Date:', now);
console.log('ISO String:', now.toISOString());
console.log('Year:', now.getFullYear());
console.log('Month:', now.getMonth() + 1);
console.log('Day:', now.getDate());

// Dummy error handling
try {
    throw new Error('This is a dummy error!');
} catch (error) {
    console.error('Caught an error:', error.message);
}

// Dummy function to calculate sum
function calculateSum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log('Sum:', calculateSum(1, 2, 3, 4, 5));

// Dummy function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log('Reversed String:', reverseString('Hello World'));

// Dummy function to check palindrome
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

console.log('Is Palindrome:', isPalindrome('madam'));
console.log('Is Palindrome:', isPalindrome('hello'));

// Dummy function to find max in an array
function findMax(arr) {
    return Math.max(...arr);
}

console.log('Max Number:', findMax([1, 2, 3, 4, 5]));

// Dummy function to find min in an array
function findMin(arr) {
    return Math.min(...arr);
}

console.log('Min Number:', findMin([1, 2, 3, 4, 5]));

console.log('Average: test ch', calculateAverage([1, 2, 3, 4, 5]));

// Dummy function to generate Fibonacci sequence
function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log('Fibonacci Sequence:', generateFibonacci(10));

// Dummy function to capitalize a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log('Capitalized String:', capitalize('hello'));

// Dummy function to flatten an array
function flattenArray(arr) {
    return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}

console.log('Flattened Array:', flattenArray([1, [2, [3, [4, 5]]]]));

// Dummy function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log('Unique Array:', removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Dummy function to shuffle an array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = getRandomNumber(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

console.log('Shuffled Array:', shuffleArray([1, 2, 3, 4, 5]));