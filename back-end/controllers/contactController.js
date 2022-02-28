const nodemailer = require('nodemailer')
const ContactModel = require('../models/contact.model')
const creds = require('../config/mail')
const {body, validationResult} = require("express-validator")

exports.validate = (method) => {
    switch(method) {
        case 'sendMessage': {
            return [
                body('subject', "Subject is required").exists(),
                body('email', "Emails is not valid").exists().isEmail(),
                body('message', "Message is required").exists()
            ]
        }
    }
}
const transport = {
    host: "minalqalb.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: creds.USER,
        pass: creds.PASS
    },
    tls: { 
        rejectUnauthorized: false 
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((err, succ) => {
    if (err)
        console.log(err)
    else{
        console.log('server is ready to take messages')
    }
})

module.exports.sendMessage = async (req, res) => {

    const {subject, email, message} = req.body
    var content = `subject: ${subject} \n email: ${email} \n message: ${message}`
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        res.status(422).json({ errors: errors.array() });
        return;
    }
    const mail = await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: subject,
        text: content,
        html: content
    })
    try{
        const msg = await ContactModel.create({
            subject: subject,
            email: email,
            message: message
        })
        res.status(201).json({message: "Success Send the message We will respond you soon"})
    }catch(err){
        console.log(err)
        res.status(402).json({err})
    }
}