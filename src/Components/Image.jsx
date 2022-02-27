import React from "react";

function Image(props) {
  return (
    <div className="itm">
      <img src={props.ele.strMealThumb} alt=""></img>
      <div className="flex-container">
        <h1 className="title">{props.ele.strMeal}</h1>
        <a className="view-btn" href={props.ele.strSource} target="_blank">
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default Image;
