import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <div className="w-screen h-screen relative z-50 hero-background">
      <div className="hidden md:flex translate-y-[-50%] absolute top-[50%] left-0 rounded-md flex-col gap-8 bg-white p-4">
        <div className="hover:scale-[1.1] duration-500 ease-out hover:text-yellow-400">
          <Link
            className="hover:scale-[1.1] duration-500 ease-out hover:text-yellow-400"
            to="/"
          >
            <FaTwitter size={35} />
          </Link>
        </div>
        <div className="hover:scale-[1.1] duration-500 ease-out hover:text-yellow-400">
          <Link to="/">
            <FaLinkedin size={35} />
          </Link>
        </div>
        <div className="hover:scale-[1.1] duration-500 ease-out hover:text-yellow-400">
          <Link to="/">
            <FaGithub size={35} />
          </Link>
        </div>
        <div className="hover:scale-[1.1] duration-500 ease-out hover:text-yellow-400">
          <Link to="/">
            <SiCodeforces size={35} />
          </Link>
        </div>
        <div>
          <Link
            className="hover:scale-[1.1] duration-500 ease-out hover:text-yellow-400"
            to="/"
          >
            <SiLeetcode size={35} />
          </Link>
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[60rem] w-[80%]">
        <div className="hello-animation w-fit text-center mx-auto text-[3.125rem]">
          👋
        </div>
        <div className=" text-[2.1rem] md:text-[3.5rem] text-center text-[#111] tracking-[1px] md:tracking-[2px] font-[800]">
          HEY, I{`'`}M RAUNAK BHALOTIA
        </div>
        <div className="mt-[3rem] mx-auto font-[#333] text-[0.8rem] md:text-[1.3rem] text-center w-[100%] leading-[1.6]">
          A Full Stack Web Developer building Full Stack Websites and Web
          Applications that leads to the success of the overall proudct
        </div>
        <div className="text-center mt-[5rem]">
          <Link
            className="bg-[#facf0f] text-[#333] text-[1.3rem] uppercase tracking-[2px] inline-block font-[800] rounded-[5px] button-shadow transition-transform duration-[0.3s] py-[0.5rem] md:py-[1rem] px-[3rem] md:px-[6rem] hover:-translate-y-[5px] hover:scale-[1.1]"
            to="/"
          >
            RESUME
          </Link>
        </div>
      </div>
      <a
        href="#about"
        className="mouse absolute bottom-3 md:bottom-10 left-1/2 w-[25px] h-[40px] border-[2px] border-solid border-[#333] rounded-[60px]"
      ></a>
    </div>
  );
};

export default Hero;
