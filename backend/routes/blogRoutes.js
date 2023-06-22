/* eslint-disable no-undef */
import express from 'express';
import { createBlog } from '../controllers/blogController.js';
const router= express.Router();

router.post('/:id', createBlog);

export default router;