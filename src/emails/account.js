const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'karbic@icloud.com',
        subject: 'Thanks for joining in',
        text: `Hey $(name) Welcome to the Task App`
    });
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'karbic@icloud.com',
        subject: 'See you later',
        text: `Hey $(name) THanks for using the app`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}