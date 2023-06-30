import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-index">
      <div className="flex max-w-[1250px] justify-between mx-auto p-3">
        <div className="flex justify-center items-center gap-3">
          <div className="w-16 h-16">
            <img
              className="w-full h-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFH1A774qwkiKRK7AC0sQZXmYl09VTsIj15TFA4t_gJZJ0VcycxEgcUVKBLgK1UziWYPU&usqp=CAU"
              alt="logo image"
            />
          </div>
          <Link
            to="/"
            className="text-[1.2rem] font-bold hover:text-yellow-400 ease-out duration-500"
          >
            {`<RAUNAK BHALOTIA/>`}
          </Link>
        </div>

        {/* for mobile view */}
        <div
          className="flex md:hidden text-[35px] align-middle justify-center items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </div>

        {/* for desktop view */}
        <div
          className={`${
            isOpen && "mobile-nav-display"
          } hidden md:flex items-center justify-around gap-[2rem] text-[1.2rem] font-bold`}
        >
          <div
            className="absolute top-10 right-10 md:hidden text-[35px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaTimes />
          </div>
          <Link className="ease-out duration-500 hover:text-yellow-400" to="/">
            HOME
          </Link>
          <Link className="ease-out duration-500 hover:text-yellow-400" to="/">
            ABOUT
          </Link>
          <Link className="hover:text-yellow-400 ease-out duration-500" to="/">
            PROJECTS
          </Link>
          <Link className="hover:text-yellow-400 ease-out duration-500" to="/">
            BLOG
          </Link>
          <Link className="hover:text-yellow-400 ease-out duration-500" to="/">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
