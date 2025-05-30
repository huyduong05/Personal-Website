import { NavLink } from "react-router-dom";
import { FaHome, FaFileCode } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 md:px-10">
      {/* Mobile Toggle */}
      <div className="flex justify-end items-center md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`mt-4 md:mt-0 md:flex md:justify-end md:items-center space-y-2 md:space-y-0 md:space-x-4 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center bg-gray-300 px-4 py-2 rounded-lg"
              : "flex items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          }
        >
          <span>Home</span>
          <FaHome className="ml-1" />
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "flex items-center bg-gray-300 px-4 py-2 rounded-lg"
              : "flex items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          }
        >
          <span>Projects</span>
          <FaFileCode className="ml-1" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
