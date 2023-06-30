/* eslint-disable no-undef */
import express from 'express';
import { createBlog, getAllBlogs, getBlogById } from '../controllers/blogController.js';
const router = express.Router();

router.post('/:id', createBlog);

router.get('/', getAllBlogs)
router.get('/:id', getBlogById);

export default router;