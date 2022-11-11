import React from "react";
import { useState } from "react";
import Dice from "./Dice";


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

    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)
  }


  return (
    <div>
      <div>
        <Dice side={state.die} rolling = {state.rolling} />
      </div>
      <button type="Submit" onClick={roll}>{state.rolling ? 'Rolling': 'Click to Roll'}</button>
    </div>

  )
}

export default RollDice;
