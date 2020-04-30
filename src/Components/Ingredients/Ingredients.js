import React, { useContext } from "react";

import { RecipeListContext } from "../../Context/RecipeContext";

const Ingredients = () => {
  const { removeIngredient, ingredients } = useContext(RecipeListContext);
  return (
    <div>
      <ul>
        {ingredients.map((item, index) => {
          return (
            <div key={index} style={{ marginTop: "20px" }}>
              <p>
                {item}
                <span
                  onClick={() => {
                    removeIngredient(index);
                  }}
                >
                  - clear
                </span>
              </p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
