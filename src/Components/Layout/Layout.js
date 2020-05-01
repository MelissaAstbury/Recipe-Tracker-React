import React, { useContext } from "react";

import "./Layout.scss";
import RecipeForm from "../RecipeForm/RecipeForm";
import Ingredients from "../Ingredients/Ingredients";
import Header from "../Header/Header";

import { RecipeListContext } from "../../Context/RecipeContext";

const Layout = () => {
  const { componentShowing } = useContext(RecipeListContext);
  return (
    <>
      <Header />
      <div className="main">
        {componentShowing === "add" ? (
          <>
            <RecipeForm />
            <Ingredients />
          </>
        ) : (
          <p>Browse recipes</p>
        )}
      </div>
    </>
  );
};

export default Layout;
