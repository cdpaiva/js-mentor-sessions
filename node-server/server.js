const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} received.`);

    if (req.url === "/") {
        const filePath = path.join(__dirname, "public", "index.html");
        const data = fs.readFileSync(filePath, "utf-8");

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
    } else if (req.url === "/visitors") {
        const filePath = path.join(__dirname, "websiteVisits.txt");
        const data = fs.readFileSync(filePath, "utf-8");
        const visits = data.split("\n");

        let totalVisits = 0;
        for (const visit of visits) {
            totalVisits += Number(visit.split(",")[2]);
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ totalVisits }));
    } else {
        res.statusCode = 404;
        res.end("404 - Not found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
