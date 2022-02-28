const mongoose = require("mongoose")

const bookShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: {
        type: String
    },
    url_downoald: {
        type: String,
        required: true
    },
    count_page: {
        type: Number
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('book', bookShema)