import React from "react";

import "./RecipeForm.scss";

const RecipeForm = () => {
  return (
    <form className="food-input">
      <input
        type="text"
        className="food-input"
        placeholder="Input ingredient"
        required
      />
    </form>
  );
};

export default RecipeForm;
