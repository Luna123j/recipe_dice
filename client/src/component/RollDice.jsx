import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Dice from "./Dice";
import './RollDice.scss'


const RollDice = (props) => {
  const recipesArr = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10', 'item11', 'item12', 'item13'];

  const [state, setState] = useState({
    randomRecipe: 'none',
    rolling: false
  })

  const roll = () => {
    let timesRepeat = 0;

    const repeat = setInterval(() => {
      timesRepeat += 1;
      setState({
        randomRecipe: recipesArr[Math.floor(Math.random() * recipesArr.length)],
        rolling: true
      })

      if (timesRepeat === 20) {
        setState({ ...state, rolling: false });
        clearInterval(repeat);
      }
    }, 50)
  }

  return (
    <div className="rollDice">
      <div className="diceContainer">
        <Dice rolling={state.rolling} randomRecipe={state.randomRecipe} />
        <button type="Submit" onClick={roll}> {state.rolling ? 'Rolling' : 'Click to Roll'} </button>
      </div>
    </div>

  )
}

export default RollDice;
