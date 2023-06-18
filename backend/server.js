/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
const app = express();
import colors from 'colors';
import connectDb from './config/db.js';
import blogRouter from './routes/blogRoutes.js';
import cors from 'cors'

import dotenv from 'dotenv';
dotenv.config();

connectDb();

app.use(cors());
app.use(express.json());

app.use('/api/blog', blogRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`.cyan);
})