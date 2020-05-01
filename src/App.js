import React from "react";

import "./App.scss";

import RecipeContext from "./Context/RecipeContext";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <RecipeContext>
      <div className="page-container">
        <div className="content-wrapper">
          <Layout />
        </div>
      </div>
    </RecipeContext>
  );
};

export default App;
