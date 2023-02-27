import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
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
            to="/"
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
