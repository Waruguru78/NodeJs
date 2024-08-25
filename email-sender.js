const nodemailer = require('nodemailer'); //import module

// Create a transporter object
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emailsender@gmail.com',
    pass: 'password'
  }
});

// Email options
let mailOptions = {
  from: 'emailsender@gmail.com',
  to: 'emailreceiver@gmail.com@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred:', error);
  }
  console.log('Email sent:', info.response);
});
