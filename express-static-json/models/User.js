const mongoose = require("mongoose");

// Defines the shape of the documents within a collection
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
});

// Maps to the `users` collection
const User = mongoose.model("User", userSchema);

module.exports = User;
