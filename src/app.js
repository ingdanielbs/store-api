const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const saleRoutes = require('./routes/saleRoutes'); // Add this line

const app = express();
connectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>¡BIENVENIDO A API STORE!</h1>')
});
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/sales', saleRoutes); // Add this line

module.exports = app;