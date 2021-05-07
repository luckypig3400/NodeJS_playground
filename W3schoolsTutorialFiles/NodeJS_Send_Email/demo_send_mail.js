var nodemailer = require('nodemailer');
// 讓nodemailer存取Gmail帳號:https://nodemailer.com/usage/using-gmail/
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nodejsMailSender666@gmail.com',
        pass: '3edc6yhn9ol.'
    }
});

var mailOptions = {
    from: 'nodejsMailSender666@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.JS 酷耶~',
    text: 'That was Easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});