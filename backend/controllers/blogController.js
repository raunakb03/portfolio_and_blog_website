/* eslint-disable no-unused-vars */
import User from '../models/userModel.js';
import Blog from '../models/blogModel.js';
import asyncHandler from 'express-async-handler';

// create a new blog
const createBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // checking if user exists
    const user = await User.findById(id);
    if (!user) {
        res.status(404);
        throw new Error("User Error. Please login again!!!");
    }

    // get data from body4
    const { category, ...data } = req.body.blogContent;
    let blog = new Blog({
        blogContent: data,
        createdBy: user._id,
        category,
    });
    await blog.save();

    user.blogs.push(blog._id);
    await user.save();

    return res.status(200).json({
        msg: "blog created successfully",
        blog,
    });
});

export {
    createBlog,
}