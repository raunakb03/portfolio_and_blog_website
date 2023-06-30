import LeftSection from "./LeftSection";
import BlogsSection from "./BlogsSection";

const AddBlog = () => {
  return (
    <div className="w-full flex flex-col md:flex-row max-w-[1250px] h-full mx-auto gap-8">
      <LeftSection />
      <BlogsSection />
    </div>
  );
};

export default AddBlog;
