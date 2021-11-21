const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Users List</h1>");
});

router.get("/new", (req, res) => {
    res.send("<h1>User Register Form</h1>");
});
// To avoid dynamic route block your specific routes,
// you should put your dynamic route code below specific one
// Because the code is run from top to down ~~~

router.post("/", (req, res) => {
    res.send("Create User");
});

router.get("/:id", (req, res) => {
    res.send(`Get User with ID:${req.params.id}`);
});

module.exports = router;