import React from "react";
import './Navbar.scss';
const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="navbarItems">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            Home
          </li>
          <li className="nav-item">
            Recipes
          </li>
        </ul>
        <div className="nav dropdown">
          <button className="dropdown-btn btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">E/C</button>
          <div className="dropdown-menu">
            <p className="dropdown-item ">EN</p>
            <p className="dropdown-item ">CN</p>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;
