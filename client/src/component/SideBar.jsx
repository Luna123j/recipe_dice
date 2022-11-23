import React from "react";
import CuisineType from "./CuisineType";
import './SideBar.scss'

const SideBar = (props) => {
  return (
    <div className="sideContainer">
      <h5>Generate random dishes with tags</h5>
      <div className="tagTitle"> Cuisine Type
        <div className="tagContainer">
          <CuisineType setDiceContent={props.setDiceContent} />
        </div>
      </div>
      <div className="tagTitle"> Required Ingredients 1
        <div className="typeContainer">
          something
          ...
          ...
        </div>
      </div>
      <div className="tagTitle"> Required Ingredients 2
        <div className="typeContainer">
          something
          ...
          ...
        </div>
      </div>
    </div>
  )
}

export default SideBar;