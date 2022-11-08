import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Dice = () => {
  const recipesArr = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10', 'item11', 'item12', 'item13'];

  const [roll, setRoll] = useState(false)

  const submitHandler = () => {
    setRoll(true);
  }

  const randonEffect = () => {
    recipesArr.foreach(item =>
      <span>{item}</span>
    )
    setRoll(false);
  }


  return (
    <div>
      {recipesArr.map(item =>
        <span>{item}</span>
      )}
      <button type="Submit" onClick={submitHandler}>Roll</button>
    </div>

  )
}

export default Dice;
