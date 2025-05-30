import { NavLink, Link } from "react-router-dom";


function Navbar() {
  
  return (
    <nav className="bg-white py-6 px-10 flex justify-end items-center">

      <div className="flex items-center space-x-8 text-black text-lg font-semibold">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>

        <NavLink to="/projects">
          <span>Projects</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;