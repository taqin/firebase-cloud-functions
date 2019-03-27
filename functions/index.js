'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});
exports.sendEmail = functions.https.onRequest((req, res) => {
  // res.send('Hello from Firebase! ' + functions.config().gmail.email + ' ' + functions.config().gmail.password);
  const email = 'taqin@call-levels.com';
  const mailOptions = {
    from: `CL Cloud Emailer Service <noreply@call-levels.com>`,
    to: email,
    subject: 'Hey there from CLV',
    html: '<h1>Hello there</h1>'
  };
  
  try {
    mailTransport.sendMail(mailOptions, (error, info) => {
      if (error) return console.log(error);
      res.send('Email sent: ' + info.response);
    });
  } catch (error) {
    console.error(
      'There was an error while sending the email:',
      error
    );
  }
  return null;
});