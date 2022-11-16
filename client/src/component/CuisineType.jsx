import React from "react";
  // https://api.edamam.com/api/recipes/v2?type=public&app_id=f8f20605&app_key=9fb81ef122483a5d50fe619c187c6de4&cuisineType=Middle%20Eastern


const CuisineType = () => {
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

  return (
    <div>
      {cuisineTypesArr.map((item, index) => {
        return <button type="button" class="btn" key={index}>
          {item}
        </button>
      })}
    </div>

  )
}

export default CuisineType;