/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
const app = express();
import colors from 'colors';
import connectDb from './config/db.js';
import blogRouter from './routes/blogRoutes.js';
import userRouter from './routes/userRoute.js';
import cors from 'cors'
import { errorHandler, notFound } from './middlewares/error.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

// connecting to database
connectDb();

// middlewares
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://127.0.0.1",
        "http://104.142.122.231",
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
}
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);

// error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`.cyan);
})