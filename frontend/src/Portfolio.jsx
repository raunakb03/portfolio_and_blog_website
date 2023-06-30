import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const Portfolio = () => {
  return (
    <div className="mt-[90px]">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
