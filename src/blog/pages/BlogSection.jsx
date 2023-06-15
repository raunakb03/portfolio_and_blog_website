/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const BlogSection = ({ blogObject }) => {
  return (
    <div>
      <div>
        {Object.entries(blogObject).map(([key, value], i) => {
          if (key.includes("coverImage")) {
            return <img key={i} src={value} />;
          }
        })}
      </div>
    </div>
  );
};

export default BlogSection;
