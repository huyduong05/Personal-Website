import { NavLink } from "react-router-dom";
import { FaHome, FaFileCode, FaFile } from "react-icons/fa";



function Navbar() {
  
  return (
    <nav className="bg-white py-6 px-10 flex justify-end items-center">

      <div className="flex justify-center items-center space-x-4 text-black text-sm">
        <NavLink to="/"
          className={({ isActive }) =>
            isActive ? "flex items-center bg-gray-300 px-4 py-2 rounded-lg" :  "flex items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300 ease-in-out"
          }>
          <span>Home</span>
          <FaHome className="ml-1" />
        </NavLink>

        <NavLink to="/projects"
        className={({ isActive }) =>
            isActive ? "flex items-center bg-gray-300 px-4 py-2 rounded-lg" :  "flex items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300 ease-in-out"
          }>
          <span>Projects</span>
          <FaFileCode className="ml-1" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;