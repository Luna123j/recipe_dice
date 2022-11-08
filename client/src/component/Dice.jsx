import React from "react";
import { useState } from "react";
const Dice = () => {
  recipesArr = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10', 'item11', 'item12', 'item13']
  const [roll, setRoll] = useState(false)

  const submitHandler = () => {
    if (roll) {
      setRoll(false);
    }
    setRoll(true);
  }

  const randonEffect = () => {
    recipesArr.foreach((item) => {
      <span>item</span>
    }
    )
  }



  return (
    <div>
      <span> {roll ? randonEffect : 'something'}</span>
      <button type="Submit" onClick={submitHandler}>Roll</button>
    </div>

  )
}