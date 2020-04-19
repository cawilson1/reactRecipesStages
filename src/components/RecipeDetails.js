import React from "react";

const RecipeDetails = ({ setIsHomePage, recipe }) => {
  return (
    <div>
      <h2>Details for {recipe.food}</h2>
      <div className="card">
        <h3>{recipe.food}</h3>
        <img src={recipe.image} width="150px" alt="food-pic" />
        <p>{recipe.instructions}</p>
        <p>{recipe.id}</p>
      </div>

      <button onClick={() => setIsHomePage(true)}>Go to home page</button>
    </div>
  );
};

export default RecipeDetails;
