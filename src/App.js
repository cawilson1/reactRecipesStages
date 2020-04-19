import React, { useState } from "react";
import "./App.css";
import recipesDatabase from "./recipesDatabase";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import { not } from "ramda";

function App() {
  const [currentRecipe, setCurrentRecipe] = useState("");
  const [isHomePage, setIsHomePage] = useState(true);

  function updateRecipe(deets) {
    setCurrentRecipe(deets);
    setIsHomePage(false);
  }

  console.log(isHomePage);
  console.log(currentRecipe);
  if (not(isHomePage)) {
    return <RecipeDetails setIsHomePage={setIsHomePage}></RecipeDetails>;
  }

  return (
    <div className="App">
      <header>
        <h1>My Recipes Page</h1>
      </header>
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
}

export default App;
