const mongoose = require("mongoose")
const { default: isEmail } = require("validator/lib/isEmail")

const contactShema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: [isEmail],
        required: true
    },
    message: {
        type: String,
    }
})

module.exports = mongoose.model('Contact', contactShema)