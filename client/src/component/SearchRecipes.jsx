import React from "react";

const SearchRecipes = (props) => {
  console.log(props.apiResult)
  const apiResult = props.apiResult;

  return (
    <div>
      <table className="table">
        <tbody>
          {apiResult.map((obj,index) => {
            let content = obj.recipe;
            return(
             <tr key={index}>
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