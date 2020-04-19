import React from "react";
import logo from "./logo.svg";
import "./App.css";
import recipesDatabase from "./recipesDatabase";

function App() {
  console.log(recipesDatabase);
  return (
    <div className="App">
      <header>
        <h1>My Recipes Page</h1>
      </header>
      <div className="main-content">
        {recipesDatabase.map(recipe => {
          return (
            <div className="card">
              <h3>{recipe.food}</h3>
              <img src={recipe.image} width="150px" alt="food-pic" />
              <p>{recipe.instructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
