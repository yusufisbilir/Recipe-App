import React from "react";
import style from "./recipe.module.css";

export const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol className={style.ingradient}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{Math.round(calories)} Cal</p>
      <img className={style.image} src={image} alt="food" />
    </div>
  );
};
