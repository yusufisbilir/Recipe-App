import React, { useEffect, useState } from "react";
import { Recipe } from "./components/Recipe";

import "./App.css";

function App() {
  //Api keys and req url
  const APP_ID = "f118c8b2";
  const APP_KEY = "9783a7074b9e97722d7b67a80f0fe523";

  //States
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("initialState");

  //useEffect process
  useEffect(() => {
    getRecipes();
  }, [query]);

  //Fetch data from api
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  //Handler
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className="title">Recipe Searcher</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={inputHandler}
        />
        <button className="search-button" typeof="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
