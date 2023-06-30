import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./blogCard";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const { data } = await axios.get("http://localhost:5000/api/blog");
      setBlogs(data.blogs);
    };
    getAllBlogs();
  }, []);
  return (
    <div className="w-full">
      <div>
        <div>
          <h1>Get All Blogs</h1>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full ">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog}/>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
