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
        <div className="card">
          <h3>{recipesDatabase[0].food}</h3>
          <img src={recipesDatabase[0].image} width="150px" alt="food-pic" />
          <p>{recipesDatabase[0].instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
