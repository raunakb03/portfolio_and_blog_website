/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  console.log(blog);
  const title = blog.blogContent.blogTitle;
  const coverImage = blog.blogContent.coverImage;
  const userId = blog.createdBy;
  const [userInfo, setUserInfo] = useState({});
  const date = new Date(blog.date);

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/user/${userId}`
      );
      setUserInfo(data.user);
    };

    getUserInfo();
  }, [userId]);

  return (
    <div className="flex gap-5 align-middle items-center">
      {/* cover image */}
      <div>
        <img src={coverImage} className="w-[120px] md:w-[200px]" alt="" />
      </div>
      <Link to={`/blogs/${blog._id}`}>
        {/* title and user inof */}
        <div>
          <h1>{title}</h1>
          <div>
            <h1>Creted By:</h1>
            <p>{userInfo.name}</p>
            <p>{`Created on: ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
          </div>
        </div>
      </Link>
      {/* category likes and dislikes */}
    </div>
  );
};

export default BlogCard;
