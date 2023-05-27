const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    userid: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    email: String,
    address: String,
    phoneNo: String,
    quantity: Number,
    carid: {
        type: mongoose.Types.ObjectId,
        ref: 'Car'
    }
}, {timestamps: true})

module.exports = mongoose.model('Order', schema)