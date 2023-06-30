import { useParams } from "react-router-dom";
import axios from 'axios';

const BlogPage = () => {
  const { id } = useParams();
// const {data}= await axios.get()  
  return <div className="mt-[90px]">this is the blog page</div>;
};

export default BlogPage;
