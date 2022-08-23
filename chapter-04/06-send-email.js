/**
 * Send an email to the SMTP server via Node.js
 *
 * http://nodemailer.com/about
 * */

const {
  createTransport,
} = require("../node_modules/nodemailer/lib/nodemailer");

createTransport({
  host: "localhost",
  port: 4321,
}).sendMail(
  {
    from: "beth@example.com",
    to: "laddie@example.com",
    subject: "Test local email sender",
    text: "Hello from NodeJS!",
  },
  (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log("Message Sent:", info);
  }
);
