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

// get all blogs
const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find();
    return res.status(200).json({
        msg: 'Blogs fetched successfully',
        blogs
    })
})


// get a blog by id
const getBlogById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
        res.status(404);
        throw new Error("Blog not found");
    }
    return res.status(200).json({
        msg: 'Blog fetched successfully',
        blog
    })
});

export {
    createBlog,
    getAllBlogs,
    getBlogById
}