import React from "react";
import { useEffect } from "react";
import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Dice from "./Dice";
import './RollDice.scss'


const RollDice = (props) => {

  const recipesArr = props.diceContent;
  const [state, setState] = useState({
    randomRecipe: 'none',
    rolling: false,
  })

  const [stop, setStop] = useState(false)
  const navigate = useNavigate();

  const roll = () => {
    // const recipesIndex = Math.floor(Math.random() * recipesArr.length);
    let timesRepeat = 0; 
    const repeat = setInterval(() => {
      timesRepeat += 1;
      setState({
        randomRecipe: recipesArr[Math.floor(Math.random() * recipesArr.length)],
        rolling: true,
      })

      if (timesRepeat === 20) {
        setStop(true)
        clearInterval(repeat);
      }
    }, 50)
  }

  const handleEdit=()=>{
    navigate("/editDice")

  }

  useEffect(() => {
    if (state.rolling && stop) {
      setStop(false)
      setState({ ...state, rolling: false });
    }
  }, [state,stop])

  return (
    <div className="rollDice">
      <div className="diceContainer">
        <Dice rolling={state.rolling} randomRecipe={state.randomRecipe} setApiResult={props.setApiResult}/>
        <button type="Submit" onClick={roll}> {state.rolling ? 'Rolling' : 'Click to Roll'} </button>
        <button type="Submit" onClick ={handleEdit}>Edit Rolling Item</button>
      </div>
    </div>

  )
}

export default RollDice;
