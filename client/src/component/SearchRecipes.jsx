import React from "react";
import { useNavigate } from "react-router-dom";

const SearchRecipes = (props) => {
  const apiResult = props.apiResult;
  const navigate = useNavigate();

  const clickHandler = (content)=>{
    props.setDetail(content);
    navigate('/recipeDetails')
  }

  return (
    <div>
      <table className="table">
        <tbody>
          {apiResult.map((obj,index) => {
            let content = obj.recipe;
            return(
             <tr key={index} onClick={(e)=>{e.preventDefault(); clickHandler(content);}} >
              <td ><img src={`${content.images.THUMBNAIL.url}`} alt={`${content.label}`}/></td>
              <td>{content.label}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  )
}

export default SearchRecipes;