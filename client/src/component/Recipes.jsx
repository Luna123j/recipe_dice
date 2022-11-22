import React from 'react'
import axios from 'axios'

const Recipes = () => {
  const PROJECT_ID = process.env.PROJECT_ID;
  const API_KEY = process.env.API_KEY;
  const recipeName = 'chicken noodle'

  return (
    <div>
      MyRecipes
      <ul>{recipeName.map((item)=>{
        <li>{item}</li>
      })}</ul>

    </div>
  )
}

export default Recipes;