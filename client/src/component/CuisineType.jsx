import React,{useState} from "react";
import './CuisineType.scss'
import { cuisineTypesArr } from "../helpers/initialArr";
import { useEffect } from "react";

const CuisineType = () => {

  const [type,setType] = useState('')

  const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const urlLink = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${PROJECT_ID}&app_key=${API_KEY}&cuisineType=${type}`

  useEffect(()=>{
    fetch(urlLink)
    .then((res)=>{
      return res.json()
    })
    .then((result)=>{
      console.log(result)
    })
  },[type])


  return (
    <div className="typeContainer">
      {cuisineTypesArr.map((item, index) => {
        return (
          <button autoComplete="off"  type="text" key={index} className='typeBtn' onclcik={()=>{setType(item)}}>
            {item}
          </button>
        )

      })}
    </div>

  )
}

export default CuisineType;