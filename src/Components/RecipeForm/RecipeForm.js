import React, { useContext, useState } from "react";

import "./RecipeForm.scss";
import { RecipeListContext } from "../../Context/RecipeContext";

const RecipeForm = () => {
  const { addIngredient } = useContext(RecipeListContext);

  const [input, setInput] = useState("");

  const onClickingAdd = () => {
    addIngredient(input);
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
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <div>
          <div className="btn">
            <h3 onClick={onClickingAdd}>Add Ingredient</h3>
          </div>
        </div>
      </form>
    </>
  );
};

export default RecipeForm;
