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
      <label>put content-----seperate items by ,</label>
      <input id='inputRecipe' onChange={inputHandler} />

      <button type="Submit" onClick={()=>{props.editContent(inputArr); navigate('/')}}>update</button>
    </div>
  )
}

export default EditDice;