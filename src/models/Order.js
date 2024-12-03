
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, min: 1 },
        value: { type: Number, required: true, min: 0 }
    }],
    totalValue: { type: Number, required: true, min: 0 },
    state: { type: String, enum: ['Pendiente', 'Pagado', 'Cancelado'], default: 'Pendiente' }
});

module.exports = mongoose.model('Order', orderSchema);