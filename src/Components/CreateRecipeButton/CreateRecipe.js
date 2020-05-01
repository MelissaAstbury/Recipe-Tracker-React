import React from "react";

import "./CreateRecipe.scss";

// import CreatedRecipe from "../CreatedRecipe/CreatedRecipe";
const CreateRecipe = () => {
  const CreatedRecipe = () => {};
  return (
    <div>
      <div className="create-recipe" onClick={CreatedRecipe}>
        <h3>Add Recipe</h3>
        <p>{/* <CreatedRecipe /> */}</p>
      </div>
    </div>
  );
};

export default CreateRecipe;
