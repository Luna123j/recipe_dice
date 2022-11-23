import React from "react";
import './RecipeDetail.scss'

const RecipeDetail = (props) => {
  const details = props.detail;

  return (
    <div className="detailContainer">
      <section className="section1">
        <img src={details.images.REGULAR.url}></img>
        <p className="name">{details.label}</p>
        <p className="tags">{details.mealType} | {details.cuisineType} | {Math.floor(details.calories)} cal.</p>
      </section>
      <div className="section2">
        <p className="time">Cooking time: {details.totalTime} min</p>
        Ingredients
        <table >
        <tbody>{details.ingredients.map((line, index) => {
          return (
            <tr key={index}>
              <td>{line.food}</td>
              <td>{Math.floor(line.quantity * 100) / 100}       {line.measure}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
        <p className="steps">Steps</p>
        <div className="steps"> {details.ingredientLines.map((line, index) => {
          return (
            <p key={index}>step {index+1} <br /><p className="lighter">{line}</p> </p>
          )
        })}</div>
      </div>
      

    </div>

  )
}

export default RecipeDetail;