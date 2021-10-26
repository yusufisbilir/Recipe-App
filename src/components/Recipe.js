import React from "react";

export const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{Math.round(calories)} Cal</p>
      <img src={image} alt="food" />
    </div>
  );
};
