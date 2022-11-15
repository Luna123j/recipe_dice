import React from "react";

const EditDice = (props)=>{

  const inputHandler = (e)=>{
    e.preventDefault();
    let inputStr = e.target.value;
    let inputArr = []
    if (inputStr.length>0){
      inputArr = inputStr.split(',');
    }
  }

  return (
    <div className="editDiv">
      <label>put content-----seperate items by ,</label>
      <input id = 'input recipe' onChange={inputHandler}/>
      <button type="Submit">update</button>
    </div>
  )
}

export default EditDice;