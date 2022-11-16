import React from "react";


const RecipeDetail = (props) => {
  const details = props.detail;
  console.log(details)
  return (
    <div>
      Here
      <p>{details.label}</p>
      <tbody>{details.ingredients.map((line,index) => {
        return (
          <tr key={index}>
            <td>{line.food}</td>
            <td>{line.quantity}       {line.measure}</td>
          </tr>
        )
      })}
      </tbody>
      <div>{details.ingredientLines.map((line,index)=>{
        return(
          <p key={index}>{line}</p>
        )
      })}</div>
    </div>

  )
}

export default RecipeDetail;