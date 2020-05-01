import React, { createContext, useState, useEffect } from "react";
import { v4 } from "uuid";

export const RecipeListContext = createContext();

const RecipesContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("recipes")) || [];

  const [recipes, setRecipes] = useState(initialState);
  const [ingredients, setIngredients] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [componentShowing, setComponentShowing] = useState("add");

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addIngredient = (input) => {
    setIngredients([...ingredients, { name: input, id: v4() }]);
  };

  const removeIngredient = (id) => {
    let newIngredients = ingredients.filter((item) => {
      return item.id !== id;
    });
    setIngredients(newIngredients);
  };

  const findItem = (item) => {
    setEditItem(item);
  };

  const editIngredient = (input, id) => {
    const newItems = ingredients.map((item) => {
      return item.id === id ? { name: input, id: id } : item;
    });
    setIngredients(newItems);
    setEditItem(null);
  };

  const addRecipe = (recipeName, ingredientsArray) => {
    setRecipes([
      ...recipes,
      { name: recipeName, ingredients: ingredientsArray, id: v4() },
    ]);
    setIngredients([]);
  };

  const clearList = () => {
    setIngredients([]);
  };

  return (
    <RecipeListContext.Provider
      value={{
        ingredients,
        addIngredient,
        removeIngredient,
        clearList,
        findItem,
        editItem,
        editIngredient,
        addRecipe,
        componentShowing,
        setComponentShowing,
      }}
    >
      {props.children}
    </RecipeListContext.Provider>
  );
};

export default RecipesContextProvider;
