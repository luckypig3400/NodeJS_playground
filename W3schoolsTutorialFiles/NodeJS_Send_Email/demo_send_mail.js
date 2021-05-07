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
    to: 'myfriend@yahoo.com, lucky@gmail.com, 666@gmail.com',
    subject: 'Sending Email using Node.JS 酷耶~',
    html: '<h1>Welcome</h1><h3>This is the test mail sent from NodeJS Bot</h3><p>That was Easy!</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});