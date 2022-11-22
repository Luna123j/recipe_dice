import React from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CuisineType from "./CuisineType";
import Dice from "./Dice";
import './RollDice.scss'
import SideBar from "./SideBar";


const RollDice = (props) => {

  const recipesArr = props.diceContent;
  console.log(recipesArr)
  const [state, setState] = useState({
    randomRecipe: 'Pizza',
    rolling: false,
  })
  const [open, setOpen] = useState(false)

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

  const handleEdit = () => {
    navigate("/editDice")

  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (state.rolling && stop) {
      setStop(false)
      setState({ ...state, rolling: false });
    }
  }, [state, stop])

  return (
    <div className="rollDice">
      {open ?
        <SideBar setDiceContent = {props.setDiceContent} />
        : ""}
      <button className="sideBtn" onClick={toggleOpen}>{open ? <i className="fa-solid fa-angles-left"></i> : <i className="fa-solid fa-angles-right"></i>}</button>
      <div className="diceContainer">

        <Dice rolling={state.rolling} randomRecipe={state.randomRecipe} setApiResult={props.setApiResult} />
        <div className="button-container">
          <button className="editBtn" type="Submit" onClick={handleEdit}>Edit Rolling Dishes</button>
          <button className="submitBtn" type="Submit" onClick={roll}> {state.rolling ? 'Rolling' : 'Click to Roll'} </button>
        </div>

      </div>
    </div>

  )
}

export default RollDice;
