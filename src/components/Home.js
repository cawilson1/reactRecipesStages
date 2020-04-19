import React, { useState } from "react";
import { not } from "ramda";
import RecipeDetails from "./RecipeDetails";
import RecipeCard from "./RecipeCard";
import recipesDatabase from "../recipesDatabase";

const Home = () => {
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [isHomePage, setIsHomePage] = useState(true);

  function updateRecipe(deets) {
    setCurrentRecipe(deets);
    setIsHomePage(false);
  }

  if (not(isHomePage)) {
    return (
      <div>
        <RecipeDetails
          setIsHomePage={setIsHomePage}
          recipe={currentRecipe}
        ></RecipeDetails>
      </div>
    );
  }

  return (
    <div>
      <div className="main-content">
        {recipesDatabase.map(recipe => (
          <RecipeCard
            recipe={recipe}
            key={recipe.id}
            updateRecipe={updateRecipe}
          ></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
