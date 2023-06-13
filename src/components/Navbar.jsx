import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-index">
      <div className="max-w-[1250px]  flex justify-between mx-auto p-3">
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
        <div className="flex items-center justify-around gap-[2rem] text-[1.2rem] font-bold">
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
