import React from "react";

import "./App.scss";

import Header from "./Components/Header/Header";
import CreateRecipe from "./Components/CreateRecipeButton/CreateRecipe";
import RecipeForm from "./Components/RecipeForm/RecipeForm";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Header />
        <div className="main">
          <CreateRecipe />
          <RecipeForm />
        </div>
      </div>
    </div>
  );
}

export default App;
