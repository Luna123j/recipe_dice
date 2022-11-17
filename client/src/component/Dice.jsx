import React from "react";
import './Dice.scss'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dice = (props) => {

  const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();
  const urlLink = `https://api.edamam.com/api/recipes/v2?type=public&q=${props.randomRecipe}&app_id=${PROJECT_ID}&app_key=${API_KEY}`;

  const clickHandler = (e) => {
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
    <div className="dice" >
      <p className="dishesName" onClick={clickHandler}>{props.randomRecipe}</p>
    </div>

  )
}

export default Dice;
