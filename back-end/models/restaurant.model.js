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