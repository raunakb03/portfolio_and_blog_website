import Portfolio from "./Portfolio";
import Blog from "./blog/Blog";
import CreateBlog from "./blog/pages/CreateBlog";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
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
