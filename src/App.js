import React from "react";
import logo from "./logo.svg";
import "./App.css";
import recipesDatabase from "./recipesDatabase";
import RecipeCard from "./components/RecipeCard";

function App() {
  console.log(recipesDatabase);
  return (
    <div className="App">
      <header>
        <h1>My Recipes Page</h1>
      </header>
      <div className="main-content">
        {recipesDatabase.map(recipe => (
          <RecipeCard recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
