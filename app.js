// 1. Get references to HTML elements
const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

// 2. Initialize application state
let count = 0;

// 3. Function to update the display
function updateDisplay() {
    countElement.textContent = count;
}

// 4. Function to increment the counter
function increment() {
    console.log("Before increment:", count);

    count = count + 1;

    console.log("After increment:", count);

    updateDisplay();
}

// 5. Function to reset the counter
function reset() {
    console.log("Resetting counter");

    count = 0;

    updateDisplay();
}

// 6. Attach event listeners
incrementBtn.addEventListener("click", increment);
resetBtn.addEventListener("click", reset);

// 7. Display initial value
updateDisplay();