const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Users List</h1>");
});

router.get("/new", (req, res) => {
    res.send("<h1>User Register Form</h1>");
});

module.exports = router;