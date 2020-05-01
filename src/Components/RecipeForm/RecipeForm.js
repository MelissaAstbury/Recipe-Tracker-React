import React, { useContext, useState, useEffect } from "react";

import "./RecipeForm.scss";
import { RecipeListContext } from "../../Context/RecipeContext";
import Button from "../UI/Button/Button";

const RecipeForm = () => {
  const {
    addIngredient,
    editItem,
    editIngredient,
    addRecipe,
    ingredients,
  } = useContext(RecipeListContext);

  const [input, setInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const onAddingIngredient = () => {
    if (editItem !== null) {
      editIngredient(input, editItem.id);
    } else {
      if (input.length < 2) {
        return;
      }
      addIngredient(input);
      setInput("");
    }
  };

  const onAddRecipe = () => {
    addRecipe(nameInput, ingredients);
    setInput("");
    setNameInput("");
  };

  useEffect(() => {
    if (editItem !== null) {
      setInput(editItem.name);
    } else {
      setInput("");
    }
  }, [editItem]);

  return (
    <>
      <form className="food-input">
        <input
          type="text"
          className="food-input"
          placeholder="Recipe name..."
          required
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />
        <input
          type="text"
          className="food-input"
          placeholder="ingredients..."
          required
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <div>
          {ingredients.length > 2 && (
            <Button btnType="success" clicked={onAddRecipe}>
              Add Recipe
            </Button>
          )}
          <br />
          <Button
            btnType={editItem !== null ? "danger" : "success"}
            clicked={onAddingIngredient}
          >
            {editItem !== null ? "Edit Ingredient" : "Add Ingredient"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default RecipeForm;
