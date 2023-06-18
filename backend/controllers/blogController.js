/* eslint-disable no-unused-vars */
import Blog from '../models/blogModel.js';
import asyncHandler from 'express-async-handler';

// create a new blog
const createBlog = asyncHandler(async (req, res) => {
    const data = req.body;
    const blog = new Blog(data);
    await blog.save();

    return res.status(200).json({
        msg: "blog created successfully",
        blog,
    });
});

export {
    createBlog,
}