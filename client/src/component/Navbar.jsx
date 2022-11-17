import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';
import axios from "axios";



import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Navbar = (props) => {

  const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const navigate = useNavigate();
  const [input, setInput] = useState('')

  const recipeName = input;
  const urlLink = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${PROJECT_ID}&app_key=${API_KEY}`

  const handleSelect = (e) => {
    props.setLan(e.target.innerText)
  }

  const searchHandler = (e) => {
    e.preventDefault();
    let searchItem = e.target.value;
    setInput(searchItem);
  }

  const formHandler = (e) => {
    e.preventDefault();
    fetch(urlLink)
      .then((res) => {
        return res.json()
      })
      .then(result => props.setApiResult(result.hits))
      .catch(error => console.log(error))
    navigate('/searchRecipe')
  }


  return (
    <nav className="navbar navbar-default">
      <div className="navbarItems">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            Dishes
          </li>
          <li className="nav-item">
            My Recipes
          </li>
        </ul>
        <div>
          <form onSubmit={formHandler}>
            <input className="searchInput" type="text" onChange={searchHandler} />
            <button className="searchBtn" type="Submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>

        </div>
        <div className="right-coner">
          <div className="nav dropdown">
            <button className="dropdown-btn btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" ><i className="fa-solid fa-globe"></i></button>
            <div className="dropdown-menu">
              <p className="dropdown-item " name='English' onClick={handleSelect}>English {props.lan === 'English' ? <i className="fa-solid fa-check"></i> : ""}</p>
              <p className="dropdown-item " name='中文' onClick={handleSelect}>中文 {props.lan === '中文' ? <i className="fa-solid fa-check"></i> : ""} </p>
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
