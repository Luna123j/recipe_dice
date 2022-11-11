import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Dice = (props) => {
  

  return (
    <div>
      <i className = {`fa-solid fa-dice-${props.side}`} ></i>
    </div>

  )
}

export default Dice;
