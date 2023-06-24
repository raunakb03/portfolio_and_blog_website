import Portfolio from "./Portfolio";
import Blog from "./blog/Blog";
import CreateBlog from "./blog/pages/CreateBlog";
import Login from "./blog/pages/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./blog/pages/Register";
import { UserContextProvider } from "./blog/context/userContext";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div>
          <ToastContainer theme="colored" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
