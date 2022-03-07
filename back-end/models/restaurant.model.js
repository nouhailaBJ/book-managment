const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date_works: {
        type: String,
        required: true
    },
    price_range: {
        type: String,
        required: true
    },
    special_plats: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
    },
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

module.exports = mongoose.model('Restaurant', RestaurantSchema)