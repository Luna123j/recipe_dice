import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Dice from "./Dice";
import './RollDice.scss'


const RollDice = (props) => {
  // const recipesArr = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10', 'item11', 'item12', 'item13'];
  const sides = ['one', 'two', 'three', 'four', 'five', 'six'];

  const [state, setState] = useState({
    die: 'one',
    rolling: false
  })

  const roll = () => {
    setState({
      die: sides[Math.floor(Math.random() * sides.length)],
      rolling: true
    })
  }

  useEffect(() => {
    if (state.rolling) {
      setTimeout(() => {
        setState({ ...state, rolling: false })
      }, 1000)
    }
  }, [state])


  return (
    <div className="rollDice">
      <div className="diceContainer">
        <Dice side={state.die} rolling={state.rolling} />
        <button type="Submit" onClick={roll}> {state.rolling ? 'Rolling' : 'Click to Roll'} </button>
      </div>
    </div>

  )
}

export default RollDice;
