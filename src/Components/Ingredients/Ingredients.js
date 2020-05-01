import React, { useContext } from "react";

import "./Ingredients.scss";

import { RecipeListContext } from "../../Context/RecipeContext";

const Ingredients = () => {
  const { removeIngredient, ingredients, findItem } = useContext(
    RecipeListContext
  );
  console.log(ingredients);
  return (
    <div>
      <ul>
        {ingredients.map((item, index) => {
          return (
            <div key={index} style={{ marginTop: "20px" }}>
              <p>
                {item.name}
                <button
                  className="remove-btn"
                  onClick={() => {
                    removeIngredient(item.id);
                  }}
                >
                  <span>X</span>
                </button>
                <button
                  className="edit-btn"
                  onClick={() => {
                    findItem(item);
                  }}
                >
                  <span>edit</span>
                </button>
              </p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
