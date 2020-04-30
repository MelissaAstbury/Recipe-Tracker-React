import React from "react";

import "./App.scss";

import Header from "./components/Header/Header";
import CreateRecipe from "./components/CreateRecipeButton/CreateRecipe";
import RecipeForm from "./components/RecipeForm/RecipeForm";
import Ingredients from "./components/Ingredients/Ingredients";
import RecipeContext from "./Context/RecipeContext";

function App() {
  return (
    <RecipeContext>
      <div className="page-container">
        <div className="content-wrapper">
          <Header />
          <div className="main">
            <CreateRecipe />
            <RecipeForm />
            <Ingredients />
          </div>
        </div>
      </div>
    </RecipeContext>
  );
}

export default App;
