import React, { useContext } from "react";

import { RecipeListContext } from "../../Context/RecipeContext";
import "./Header.scss";
import Button from "../UI/Button/Button";

const Header = () => {
  const { componentShowing, setComponentShowing } = useContext(
    RecipeListContext
  );
  return (
    <>
      <div className="browse-button">
        <Button
          btnType="browse sm"
          clicked={() => {
            componentShowing === "add"
              ? setComponentShowing("browse")
              : setComponentShowing("add");
          }}
        >
          {componentShowing === "add" ? "Browse Recipes" : "Add Recipe"}
        </Button>
      </div>
      <div>
        <div className="title">
          <h1>
            {componentShowing !== "add" ? "Browse Recipes" : "Add Recipe"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
