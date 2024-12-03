
const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, min: 1 },
        value: { type: Number, required: true, min: 0 }
    }],
    totalValue: { type: Number, required: true, min: 0 },
    paymentDate: { type: Date, required: true }
});

module.exports = mongoose.model('Sale', saleSchema);