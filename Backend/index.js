import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user_route.js';
import authRoute from './routes/auth_route.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

// Initialize Express
const app = express();
app.use(express.json());

// Routes
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Use Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

// Handle Error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
