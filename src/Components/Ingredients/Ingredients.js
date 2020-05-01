import React, { useContext } from "react";

import "./Ingredients.scss";

import { RecipeListContext } from "../../Context/RecipeContext";
import Button from "../UI/Button/Button";

const Ingredients = () => {
  const { removeIngredient, ingredients, findItem } = useContext(
    RecipeListContext
  );
  return (
    <div>
      <ul>
        {ingredients.map((item, index) => {
          return (
            <div key={index} className="ingredient-container">
              <p>{item.name}</p>
              <div className="button-container">
                <Button
                  btnType="error sm"
                  clicked={() => {
                    removeIngredient(item.id);
                  }}
                >
                  X
                </Button>
                <Button
                  btnType="danger sm"
                  clicked={() => {
                    findItem(item);
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
