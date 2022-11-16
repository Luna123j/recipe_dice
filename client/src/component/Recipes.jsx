import React from 'react'
import axios from 'axios'

const Recipes = () => {
  const PROJECT_ID = process.env.PROJECT_ID;
  const API_KEY = process.env.API_KEY;
  const recipeName = 'chicken noodle'
  const recipesArr = ['R1','R2','R3']

  const urlLink = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${PROJECT_ID}&app_key=${API_KEY}
` 

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