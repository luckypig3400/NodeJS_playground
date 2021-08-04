const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/user");//import User model

//login handle
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/register', (req, res) => {
    res.render('register');
})

//Register handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    console.log('Name:' + name + ',Email:' + email + 'PWD:' + password);
    //check if empty
    if (!name || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields" });
    }
    //check if PWD match
    if (password != password2) {
        errors.push({ msg: "Password doesn't match" });
    }
    //check if PWD is more than 6 characters
    if (password.length < 6) {
        errors.push({ msg: 'Password at least 6 characters' })
    }
    //If got errors show them to client
    if (errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            password2: password2
        });
    }
    //Validation Passed
    else {
        User.findOne({ email: email }).exec((err, user) => {
            console.log(user);
            if (user) {
                errors.push({ msg: 'Email already registered!' });
                render(res, errors, name, email, password, password2);
            } else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });

                //hash password
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt,
                        (err, hash) => {
                            if (err) throw err;
                            //save PWD to hash
                            newUser.password = hash;
                            //save new user
                            newUser.save().then((value) => {
                                console.log(value);
                                res.redirect('/users/login');
                            }).catch(value => console.log(value));
                        })
                )
            }
        });
    }
})
router.post('/login', (req, res, next) => {

})

//logout
router.get('/logout', (req, res) => {

})

module.exports = router;