import React from "react";
import './RecipeDetail.scss'

const RecipeDetail = (props) => {
  const details = props.detail;
  
  return (
    <div className="detailContainer">
      <p>{details.label}</p>
      <img src={details.images.SMALL.url}></img>
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