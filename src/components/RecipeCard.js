import React from "react";

const RecipeCard = ({ recipe, updateRecipe }) => {
  return (
    <div className="card" onClick={() => updateRecipe(recipe)}>
      <h3>{recipe.food}</h3>
      <img src={recipe.image} width="150px" alt="food-pic" />
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeCard;
