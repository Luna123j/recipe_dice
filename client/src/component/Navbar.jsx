import React from "react";
import './Navbar.scss';
const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div >
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a>Home</a>
          </li>
          <li className="nav-item">
            <a>Recipes</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar;
