const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const expresEjsLayout = require('express-ejs-layouts');

//mongoose
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected,'))
    .catch((err) => console.log(err));

//EJS
app.set('view engine', 'ejs');
app.use(expresEjsLayout);
//BodyParser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Server start at http://localhost:3000');
});