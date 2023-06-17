import AddBlog from "./components/AddBlog";
// import Banner from "./components/Banner";

const Blog = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {/* <Banner /> */}
      <AddBlog />
      {/* After this will contain a recent and topics section */}
      {/* After the above section the blogs will be show based on the which so ever would be chosen */}
    </div>
  );
};

export default Blog;
