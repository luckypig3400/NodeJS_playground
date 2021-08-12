// Ref: https://betterprogramming.pub/build-a-login-system-in-node-js-f1ba2abd19a

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//login page
router.get('/', (req, res) => {
    res.render('welcome');
})

//register page
router.get('register', (req, res) => {
    res.render('register');
})

//dashboard page
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        user: req.user
    });
})

module.exports = router;