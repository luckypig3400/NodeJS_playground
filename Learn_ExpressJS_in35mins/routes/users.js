const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Users List</h1>");
});

router.post("/", (req, res) => {
    res.send("Create User");
});

router.get("/:id", (req, res) => {
    res.send(`Get User with ID:${req.params.id}`);
});

router.get("/new", (req, res) => {
    res.send("<h1>User Register Form</h1>");
});

module.exports = router;