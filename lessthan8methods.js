// Dummy JavaScript Code

// Utility function to generate a random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to simulate a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to simulate fetching data from an API
async function fetchData(endpoint) {
    console.log(`Fetching data from ${endpoint}...`);
    await delay(1000);
    const data = Array.from({ length: 10 }, () => getRandomNumber(1, 100));
    console.log(`Data fetched from ${endpoint}:`, data);
    return data;
}

// Function to process data
function processData(data) {
    console.log("Processing data...");
    const processed = data.map(num => num * 2).filter(num => num % 3 === 0);
    console.log("Processed data:", processed);
    return processed;
}

// Function to display data
function displayData(data) {
    console.log("Displaying data:");
    data.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item}`);
    });
}

// Function to simulate a main workflow
async function mainWorkflow() {
    console.log("Starting main workflow...");
    const endpoint = "https://dummyapi.com/data";
    const rawData = await fetchData(endpoint);
    const processedData = processData(rawData);
    displayData(processedData);
    console.log("Main workflow completed.");
}

// Helper function to log a separator
function logSeparator() {
    console.log("=".repeat(50));
}

// Simulate multiple workflows
async function simulateWorkflows() {
    logSeparator();
    await mainWorkflow();
    logSeparator();
    await mainWorkflow();
    logSeparator();
}

// Start the simulation
simulateWorkflows();