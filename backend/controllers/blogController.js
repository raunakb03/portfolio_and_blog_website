/* eslint-disable no-unused-vars */
import Blog from '../models/blogModel.js';

// create a new blog
const createBlog = async (req, res) => {
    try {
        const data = req.body;
        const blog = new Blog(data);
        await blog.save();

        return res.json({
            msg: "blog create successfully",
            blog,
        });
    } catch (error) {
        console.log(error)
    }
}



export {
    createBlog,
}