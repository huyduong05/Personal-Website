import { NavLink, Link } from "react-router-dom";


function Navbar() {
  
  return (
    <nav className="bg-white py-4 px-6 flex justify-between items-center">

      <div className="flex items-center space-x-4 text-black text-lg font-semibold">
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