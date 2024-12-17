import React from "react";
import UserInputArea from "../_components/UserInputArea";

const RecipesPage = () => {
  return (
    <div className="mb-10">
      <UserInputArea canUpdate={true} />
    </div>
  );
};

export default RecipesPage;
