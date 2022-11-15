import React from "react";
import './EditDice.scss';

const EditDice = (props) => {
  let inputArr = [];

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
      <input id='input recipe' onChange={inputHandler} />

      <button type="Submit" onClick={()=>props.editContent(inputArr)}>update</button>
    </div>
  )
}

export default EditDice;