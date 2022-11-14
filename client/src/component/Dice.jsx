import React from "react";
import './Dice.scss'

const Dice = (props) => {
  

  return (
    <div className="dice">
      <p>{props.randomRecipe}</p>
    </div>

  )
}

export default Dice;
