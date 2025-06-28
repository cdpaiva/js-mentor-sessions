const fs = require("fs");
const path = require("path");

const urls = ["/home", "/about", "/contact", "/products", "/services"];
const browsers = ["Chrome", "Firefox", "Safari", "Edge"];

function random(limit) {
    return Math.floor(Math.random() * limit);
}

function getRandomElement(arr) {
    return arr[random(arr.length)];
}

function getRandomIP() {
    return `${random(256)}.${random(256)}.${random(256)}.${random(256)}`;
}

function generateRandomStats(count) {
    const stats = [];
    for (let i = 0; i < count; i++) {
        const url = getRandomElement(urls);
        const ip = getRandomIP();
        const duration = random(60);
        const browser = getRandomElement(browsers);
        stats.push(`${url}, ${ip}, ${duration}, ${browser}`);
    }
    return stats.join("\n");
}

const filePath = path.join(__dirname, "websiteVisits.txt");
const data = generateRandomStats(100);

try {
    fs.writeFileSync(filePath, data);
} catch (err) {
    console.error("Error writing to file", err);
}

console.log("Random stats generated successfully");
