import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    /*  <nav className="bg-gray-100 border-green-1000 border-3 px-10 sm:px-4 py-2.5 rounded color-black-100">
      <div className="container flex items-center justify-between ">
        <Link to="/" className="flex items-center">
          <img
            src="https://www.jotform.com/resources/assets/icon/jotform-icon-orange-400x400.png"
            className="h-6 mr-3 sm:h-9"
            alt="Jotform Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Jotform
          </span>
        </Link>

        <div className=" w-auto block" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border  rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            <li>
              <Link
                to="/search"
                className="block p-2 rounded hover:bg-red-300 radius-full hover:color-red-100"
                aria-current="page"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/result"
                className="block py-2 pl-3 pr-4  rounded hover:bg-red-300 radius-full hover:color-red-100"
              >
                Result
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> */
    <div className="bg-purple-700">
      <div className="container m-auto h-15 flex items-center justify-between">
        <Link to="/">
          <img
            className="h-10 m-3 "
            src="https://www.jotform.com/resources/assets/icon/jotform-icon-orange-400x400.png"
          ></img>
        </Link>
        <nav className="flex gap-x-8 text-sm">
          <Link
            className="text-white flex items-center gap-2 text-opacity-80 hover:text-opacity-100"
            to="/search"
          >
            Search
          </Link>

          <Link
            className="text-white flex items-center gap-2 text-opacity-80 hover:text-opacity-100"
            to=""
          >
            ....
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
