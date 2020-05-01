import React, { createContext, useState, useEffect } from "react";
import { v4 } from "uuid";

export const RecipeListContext = createContext();

const RecipesContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("ingredients")) || [];

  const [ingredients, setIngredients] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }, [ingredients]);

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
      }}
    >
      {props.children}
    </RecipeListContext.Provider>
  );
};

export default RecipesContextProvider;

// const editTask = (title, id) => {
//   const newTasks = tasks.map((task) =>
//     task.id === id ? { title, id } : task
//   );
//   setTasks(newTasks);
//   setEditItem(null);
// };

// const findItem = (id) => {
//   const item = tasks.find((task) => task.id === id);

//   setEditItem(item);
// };
