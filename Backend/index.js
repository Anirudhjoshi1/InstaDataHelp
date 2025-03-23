const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const cors = require('cors');

const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const DashboardRouter = require("./Routes/dashboardRoutes");


const PORT = process.env.PORT || 8080;

// ✅ Use only express.json() (remove bodyParser.json())
app.use(cors());
app.use(express.json()); 

// Test Route
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Authentication & Product Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/dashboard' , DashboardRouter)

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});