import React, { useState } from "react";
import "./test.css";

function Test() {
  let [foodName, setFoodName] = useState("Saboodana ki Khichdi");

  let changeFoodItemName = (food) => {
    setFoodName(food);
  };

  return (
    <div className="container parent">
      <h4>Parent Component</h4>
      <p>Default -- Saboodana ki Khichdi</p>
      <p>Chamged -- {foodName}</p>
      <Child item={foodName} />

      <Child changeFoodItemName={changeFoodItemName} />
    </div>
  );
}

let Child = (props) => {
  let foodName = "Tarri Poha";

  let btnClick = () => {
    props.changeFoodItemName(foodName);
  };

  return (
    <div className="child">
      <h4>Child Component</h4>
      <p>{props.item ? props.item : foodName}</p>
      <button className="btn btn-sm btn-success" onClick={btnClick}>
        Click
      </button>
      <p>Click above button to send this value to parent Component</p>
    </div>
  );
};

export default Test;
