import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
