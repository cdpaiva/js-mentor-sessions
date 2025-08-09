/**
 * Adds a color to the history if it doesn't already exist.
 *
 * @param {string} color - The CSS color string to add to history.
 * @returns {void}
 */
function addToHistory(color) {
    if (colorHistory.includes(color)) {
        return;
    }
    colorHistory.push(color);
}

/**
 * Creates a color item in the history UI and attaches mouse events
 * to preview the color name and sample.
 *
 * @param {string} color - The CSS color string to display in the history.
 * @returns {void}
 */
function paintSquareInHistory(color) {
    const container = document.getElementById("colorHistory");
    const colorNameDiv = document.getElementById("colorElementDiv");
    const colorItem = document.createElement("div");

    colorItem.style.backgroundColor = color;
    colorItem.classList.add("colorItem");
    colorItem.addEventListener("mouseover", (e) => {
        colorNameDiv.innerText = color;
        colorSample.style.backgroundColor = color;
    });
    colorItem.addEventListener("mouseleave", (e) => {
        colorNameDiv.innerText = "";
    });

    container.appendChild(colorItem);
}

/**
 * Generates a random integer between 0 (inclusive) and maxVal (exclusive).
 *
 * @param {number} maxVal - The upper bound (exclusive) for the generated integer.
 * @returns {number} A random integer in the range [0, maxVal).
 */
function getRandomInt(maxVal) {
    return Math.floor(Math.random() * maxVal);
}

/**
 * Generates a random RGB color string.
 *
 * @returns {string} A CSS rgb() string with random red, green, and blue values.
 */
function getRandomColor() {
    const r = getRandomInt(256);
    const g = getRandomInt(256);
    const b = getRandomInt(256);
    return `rgb(${r},${g},${b})`;
}

/**
 * Adds a new color at the sample display, and add it to the history.
 *
 * @returns {void}
 */
function handleCreateColor() {
    const color = getRandomColor();
    colorSample.style.backgroundColor = color;

    addToHistory(color);
    paintSquareInHistory(color);
}

const colorBtn = document.getElementById("colorBtn");
const colorSample = document.getElementById("colorSample");
const colorHistory = [];

colorBtn.addEventListener("click", handleCreateColor);
