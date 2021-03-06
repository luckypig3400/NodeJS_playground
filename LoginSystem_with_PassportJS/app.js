const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const expresEjsLayout = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

require("./config/passport")(passport);

//mongoose
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected,'))
    .catch((err) => console.log(err));

//EJS
app.set('view engine', 'ejs');
app.use(expresEjsLayout);
//BodyParser
app.use(express.urlencoded({ extended: false }));

// express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//initial Passport
app.use(passport.initialize());
app.use(passport.session());

//use flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use(express.static('public'));

app.listen(3030, function () {
    console.log('Server start at http://localhost:3030');
});