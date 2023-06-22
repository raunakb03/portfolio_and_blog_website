/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const BlogSection = ({ blogObject }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 align-middle justify-center items-start">
        {[...blogObject].map(([key, value], i) => {
          if (key.includes("blogTitle")) {
            return (
              <h1 className="text-[25px] font-bold" key={i}>
                {value}
              </h1>
            );
          }
          if (key.includes("category")) {
            return (
              <h1 className="text-[25px] font-bold" key={i}>
                {value}
              </h1>
            );
          }
          if (key.includes("coverImage")) {
            return (
              <div className="mb-20" key={i}>
                <img className="w-[80%]" src={value} />
              </div>
            );
          }
          if (key.startsWith("text")) {
            return (
              <p className="text-[20px] mb-6" key={i}>
                {value}
              </p>
            );
          }
          if (key.includes("image")) {
            return (
              <div className="w-[50%] h-auto mb-6" key={i}>
                <img className="w-full h-full" src={value} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BlogSection;
