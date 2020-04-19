import React from "react";

const RecipeDetails = ({ setIsHomePage }) => {
  return (
    <div>
      <div>details</div>
      <button onClick={() => setIsHomePage(true)}>Go to home page</button>
    </div>
  );
};

export default RecipeDetails;
