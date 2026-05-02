const express = require("express");
const dataStore = require("./dataStore");

const app = express();
app.use(express.json());

app.post("/create", (req, res) => {
    const { id, value } = req.body;
    if (id && value) {
        dataStore.create(id, value);
        res.status(201).json({ msg: "Data created successfully." });
    } else {
        res.status(400).json({ error: "Both 'id' and 'value' are required." });
    }
});

app.get("/read/:id", (req, res) => {
    const id = req.params.id;
    const value = dataStore.get(id);
    if (value) {
        res.status(200).json({ id, value });
    } else {
        res.status(404).json({ error: "Data not found" });
    }
});

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const value = req.body.value;
    const updated = dataStore.update(id, value);
    if (updated) {
        res.status(200).json({ msg: "Data updated successfully." });
    } else {
        res.status(404).json({ error: "Data not found." });
    }
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const deleted = dataStore.del(id);
    if (deleted) {
        res.status(200).json({ msg: "Data deleted successfully." });
    } else {
        res.status(404).json({ error: "Data not found." });
    }
});

module.exports = app;