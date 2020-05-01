import React from "react";

import "./Header.scss";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <>
      <div className="browse-button">
        <Button
          btnType="browse sm"
          clicked={() => {
            console.log("hi");
          }}
        >
          Browse Recipes
        </Button>
      </div>
      <div>
        <div className="title">
          <h1>Recipe Creator</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
