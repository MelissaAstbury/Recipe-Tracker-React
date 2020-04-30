import React, { useState } from "react";

import "./RecipeForm.scss";

const RecipeForm = () => {
  const [input, setInput] = useState("");
  const [ingredient, setIngredient] = useState([]);

  const onClick = () => {
    setIngredient([...ingredient, input]);
    setInput("");
  };

  return (
    <>
      <form className="food-input">
        <input
          type="text"
          className="food-input"
          placeholder="Input ingredient"
          required
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <div>
          <div className="btn">
            <h3 onClick={onClick}>Add Ingredient</h3>
          </div>
        </div>
        {ingredient.map((item) => {
          return <p>{item}</p>;
        })}
      </form>
    </>
  );
};

export default RecipeForm;
