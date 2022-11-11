import React from "react";
import './Dice.scss'

const Dice = (props) => {
  

  return (
    <div className="dice">
      <i className = {`fa-solid fa-dice-${props.side}`} ></i>
    </div>

  )
}

export default Dice;
