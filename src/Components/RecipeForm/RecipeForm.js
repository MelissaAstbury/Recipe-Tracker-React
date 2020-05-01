import React, { useContext, useState, useEffect } from "react";

import "./RecipeForm.scss";
import { RecipeListContext } from "../../Context/RecipeContext";

const RecipeForm = () => {
  const { addIngredient, editItem, editIngredient } = useContext(
    RecipeListContext
  );

  const [input, setInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const onClickingAdd = () => {
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
        <h3>Recipe Name:</h3>
        <input
          type="text"
          className="food-input"
          placeholder="Chilli con carne..."
          required
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />
        <h3>Ingredients:</h3>
        <input
          type="text"
          className="food-input"
          placeholder="Milk, eggs, flour..."
          required
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <div>
          <div className="btn" onClick={onClickingAdd}>
            <p>{editItem !== null ? "Edit Ingredient" : "Add Ingredient"}</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default RecipeForm;
