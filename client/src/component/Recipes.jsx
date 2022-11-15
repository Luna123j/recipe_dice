import React from 'react'
import axios from 'axios'
const Recipes = () => {
  const PROJECT_ID = process.env.PROJECT_ID;
  const API_KEY = process.env.API_KEY;
  const recipeName = 'chicken noodle'

  const urlLink = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${PROJECT_ID}&app_key=${API_KEY}
`

  return (
    <div>recipes</div>
  )
}

export default Recipes;