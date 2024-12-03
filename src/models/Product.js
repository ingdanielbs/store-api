const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : { type: String, required: true, unique: true, minlength: 1 },
    stock : { type: Number, required: true, min: 0 },
    price : { type: Number, required: true, min: 0 },
    state : { type: Boolean, default: true },
    image: { type: String }
});

module.exports = mongoose.model('Product', productSchema);