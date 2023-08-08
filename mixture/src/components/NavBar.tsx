import React from "react";
import { Link } from "react-router-dom";

// the navbar component
const NavBar: React.FC = () => {
  return (
    <div className="flex justify-evenly py-3">
      <div>
        <h1>A2SV Internship</h1>
      </div>
      <div className="space-x-5">
        <Link className="hover:text-gray-400" to="/">
          Profile
        </Link>
        <Link className="hover:text-gray-400" to="/hooks">
          Hooks
        </Link>
        <Link className="hover:text-gray-400" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
