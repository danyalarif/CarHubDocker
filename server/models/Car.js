const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
})

module.exports = mongoose.model('Car', schema)