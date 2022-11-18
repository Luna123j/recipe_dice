import React from "react";
import CuisineType from "./CuisineType";
import './SideBar.scss'

const SideBar = ()=>{
  return (
    <div className="sideContainer">
          <div className="tagTitle"> Cuisine Type
            <div className="tagContainer">
              <CuisineType />
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