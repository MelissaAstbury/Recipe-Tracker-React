import React, { createContext, useState, useEffect } from "react";

export const RecipeListContext = createContext();

const RecipesContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("ingredients")) || [];

  const [ingredients, setIngredients] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }, [ingredients]);

  const addIngredient = (input) => {
    console.log(input);
    setIngredients([...ingredients, input]);
  };

  const removeIngredient = (itemIndex) => {
    let newIngredients = ingredients.filter((item, index) => {
      return index !== itemIndex;
    });
    setIngredients(newIngredients);
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
