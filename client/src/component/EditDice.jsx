import React from "react";
import './EditDice.scss';
import { useNavigate } from "react-router-dom";

const EditDice = (props) => {
  let inputArr = [];
  const navigate = useNavigate()
  const inputHandler = (e) => {
    e.preventDefault();
    let inputStr = e.target.value;

    if (inputStr.length > 0) {
      inputArr = inputStr.split(',');
    }
  }

  return (
    <div className="editDiv">
      <label><mark>Modify contents ----- Seperate items by <strong>COMMA</strong></mark></label>
      <textarea id='inputRecipe' defaultValue={props.diceContent} onChange={inputHandler} />

      <button className="updateBtn" type="Submit" onClick={()=>{props.editContent(inputArr); navigate('/')}}>update</button>
    </div>
  )
}

export default EditDice;