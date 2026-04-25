const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/express-week2")
    .then(() => console.log("Connected to the database."))
    .catch((err) => console.error(err));

// Middleware
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const getRandomUser = async () => {
    const [user] = await User.aggregate([{ $sample: { size: 1 } }]);
    return user;
};

// Routes
app.get("/api/v1/profile", async (req, res) => {
    try {
        const user = await getRandomUser();

        if (!user) {
            return res.status(404).send("No users found");
        }

        res.status(200).render("profile", { user });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching user profile");
    }
});

app.get("/api/v1/profile/json", async (req, res) => {
    try {
        const user = await getRandomUser();

        if (!user) {
            return res.status(404).send("No users found");
        }

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching user profile" });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
