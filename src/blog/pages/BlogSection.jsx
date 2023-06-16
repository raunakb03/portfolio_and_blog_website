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
          if (key.startsWith("text")) {
            return <p key={i}>{value}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default BlogSection;
