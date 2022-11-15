import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';
const Navbar = () => {

  const [lan, setLan] = useState('English')

  const handleSelect = (e) => {
    setLan(e.target.innerText)
  }

  return (
    <nav className="navbar navbar-default">
      <div className="navbarItems">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            Recipes
          </li>
        </ul>
        <div  className="right-coner">
          <div className="nav dropdown">
            <button className="dropdown-btn btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" ><i className="fa-solid fa-globe"></i></button>
            <div className="dropdown-menu">
              <p className="dropdown-item " name='English' onClick={handleSelect}>English {lan === 'English' ? <i className="fa-solid fa-check"></i> : ""}</p>
              <p className="dropdown-item " name='中文' onClick={handleSelect}>中文 {lan === '中文' ? <i className="fa-solid fa-check"></i> : ""} </p>
            </div>
          </div>
          <div className="nav-item">
            login/register
          </div>
        </div>

      </div>
    </nav>

  )
}

export default Navbar;
