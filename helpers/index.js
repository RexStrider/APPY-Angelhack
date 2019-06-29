const nodeMailer = require("nodemailer");
const config = require('../config');

const defaultEmailData = { from: "noreply@appy.com" };


exports.sendEmail = emailData => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "host.user.0000@gmail.com",
            pass: `6p4eYdZc9SC5kyA`
        }
    });
    return transporter
        .sendMail(emailData)
        .then(info => console.log(`Message sent: ${info.response}`))
        .catch(err => console.log(`Problem sending email: ${err}`));
};