const COUNT_URL = 'hits.seeyoufarm.com';
const DISPLAY_ELEMENT = document.getElementById('count-display');
const COUNTER_BUTTON = document.getElementById('counter-button');

// Function to fetch and display the current count
async function getHitCount() {
    try {
        const response = await fetch(COUNT_URL.replace('&action=hit', '&action=view')); // Use 'view' for initial load
        const data = await response.json();
        DISPLAY_ELEMENT.textContent = data.total;
    } catch (error) {
        console.error('Error fetching hit count:', error);
        DISPLAY_ELEMENT.textContent = 'Error';
    }
}

// Function to increment the count and update the display
async function incrementCount() {
    try {
        // Fetch with 'action=hit' to increment the count on the server
        const response = await fetch(COUNT_URL);
        const data = await response.json();
        DISPLAY_ELEMENT.textContent = data.total;
    } catch (error) {
        console.error('Error incrementing hit count:', error);
    }
}

// Add event listener to the button
COUNTER_BUTTON.addEventListener('click', incrementCount);

// Fetch initial count when the page loads
getHitCount();
