import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';



// loding enviroment variables
dotenv.config();

// create an instance of express app
const app = express();

// Middleware for parsing body request
app.use(express.json({
    limit: '50mb'
}));

// Middleware for cors
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
  })
);

// Handling routes for post
app.use('/api/v1/post', postRoutes);

// Handling routes for dalle
app.use('/api/v1/dalle', dalleRoutes);

// start server
const startServer = async() => {
    try {
        connectDatabase();
            app.listen(process.env.PORT, () => {
              console.log("Server has started on port http://localhost:8080");
            });
    } catch (error) {
        console.log(error);
    }
}
startServer();