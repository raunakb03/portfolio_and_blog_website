/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const BlogSection = ({ blogObject }) => {
  return (
    <div>
      <div>
        {[...blogObject].map(([key, value], i) => {
          console.log("the key is ", key);
          console.log("the type of key is ", typeof key);
          if (key.includes("coverImage")) {
            return <img key={i} src={value} />;
          }
          if (key.startsWith("text")) {
            return <p key={i}>{value}</p>;
          }
          if (key.includes("image")) {
            return <img key={i} src={value} />;
          }
        })}
      </div>
    </div>
  );
};

export default BlogSection;
