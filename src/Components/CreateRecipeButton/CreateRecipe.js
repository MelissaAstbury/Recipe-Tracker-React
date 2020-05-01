import React from "react";

import "./CreateRecipe.scss";

const CreateRecipe = () => {
  return (
    <div>
      <div
        className="create-recipe"
        onClick={() => {
          alert("clicked");
        }}
      >
        <h3>Add Recipe</h3>
      </div>
    </div>
  );
};

export default CreateRecipe;
