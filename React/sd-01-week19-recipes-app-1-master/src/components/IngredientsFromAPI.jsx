import React from 'react';
import { Link } from 'react-router-dom';

const IngredientsFromAPI = ({ ingredient, currentFood }) => {
  const ingredientsArray = currentFood.includes('comidas') ? ingredient.meals : ingredient.drinks;
  return ingredientsArray.map((unity) => {
    let ingredientName = unity.strIngredient1;
    let ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`;
    if (currentFood.includes('comidas')) {
      ingredientName = unity.strIngredient;
      ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
    }
    return (
      <Link to="/receitas/comidas/">
        <div className="Ingredients_container">
          <img
            alt={`${ingredientName} icon`}
            className="Ingredients_image"
            src={ingredientImage}
            data-testid={`${ingredientName}-card-img`}
          />
          <p className="Ingredients_category">Ingredient</p>
          <p
            data-testid={`${ingredientName}-card-name`}
            className="Ingredients_name"
          >
            {ingredientName}
          </p>
        </div>
      </Link>
    );
  });
};

export default IngredientsFromAPI;
