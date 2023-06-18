import Portfolio from "./Portfolio";
import Blog from "./blog/Blog";
import CreateBlog from "./blog/pages/CreateBlog";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer theme="colored"  />
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
