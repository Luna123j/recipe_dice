import React,{useState} from "react";
import './CuisineType.scss'

const CuisineType = () => {

  const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const urlLink = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${PROJECT_ID}&app_key=${API_KEY}&cuisineType=Middle%20Eastern`

  const [type,setType] = useState('')

  let cuisineTypesArr = ['american',
    'asian',
    'british',
    'caribbean',
    'central europe',
    'chinese',
    'eastern europe',
    'french',
    'greek',
    'indian',
    'italian',
    'japanese',
    'korean',
    'kosher',
    'mediterranean',
    'mexican',
    'middle eastern',
    'nordic',
    'south american',
    'south east asian',
    'world',
  ]


  const tagHandler = ()=>{
    
  }

  return (
    <div className="typeContainer">
      {cuisineTypesArr.map((item, index) => {
        return (
          <button autoComplete="off"  type="text" key={index} className='typeBtn' onclcik={tagHandler}>
            {item}
          </button>
        )

      })}
    </div>

  )
}

export default CuisineType;