import React, { useState } from "react";
import "./App.css";
import recipesDatabase from "./recipesDatabase";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import NavBar from "./components/Navbar";
import { not } from "ramda";

function App() {
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [isHomePage, setIsHomePage] = useState(true);

  function updateRecipe(deets) {
    setCurrentRecipe(deets);
    setIsHomePage(false);
  }

  console.log(isHomePage);
  console.log(currentRecipe);
  if (not(isHomePage)) {
    return (
      <div>
        <NavBar />
        <RecipeDetails
          setIsHomePage={setIsHomePage}
          recipe={currentRecipe}
        ></RecipeDetails>
      </div>
    );
  }

  return (
    <div className="App">
      <NavBar />
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
