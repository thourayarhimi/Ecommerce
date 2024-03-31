import express from "express";
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import cors from "cors";
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/v1/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the E-commerce App</h1>');
});

// Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on port ${PORT}`);
});