const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

module.exports = mongoose.model('Reviews', ReviewSchema)