const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    number_people: {
        type: Number,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    occassion: {
        type: String,
        required: true
    },
    special_request: {
        type: String,
    },
    time: {
        type: String,
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

module.exports = mongoose.model('Booking', bookSchema)