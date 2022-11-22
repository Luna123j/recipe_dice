import React, { useState } from "react";
import './CuisineType.scss'
import { cuisineTypesArr } from "../helpers/initialArr";
import { useEffect } from "react";

const CuisineType = (props) => {

  const [type, setType] = useState('')

  const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const urlLink = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${PROJECT_ID}&app_key=${API_KEY}&cuisineType=${type}`

  useEffect(() => {
    if (type !== "") {
      fetch(urlLink)
        .then((res) => {
          return res.json()
        })
        .then((result) => {
          const diceContent = result.hits.map((item)=>{
            return item.recipe.label
          })
          props.setDiceContent(diceContent)
        })
    }

  }, [type])

  return (
    <div className="typeContainer">
      {cuisineTypesArr.map((item, index) => {
        return (
          <button autoComplete="off" type="text" key={index} className='typeBtn' onClick={()=>{ setType(item) }}>
            {item}
          </button>
        )

      })}
    </div>

  )
}

export default CuisineType;