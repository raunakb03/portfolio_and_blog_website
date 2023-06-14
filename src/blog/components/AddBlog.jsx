import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const AddBlog = () => {
  return (
    <div className="w-full">
      <Link
        to="/create-blog"
        className="w-[50%] p-4 mx-auto flex align-middle justify-center gap-5 cursor-pointer text-2xl"
      >
        <div className="flex align-middle justify-center text-center pt-1">
          <IoIosCreate />
        </div>
        <div>Create a New Blog</div>
      </Link>
    </div>
  );
};

export default AddBlog;
