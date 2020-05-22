import React, { useContext } from 'react';
import context from '../context/context';
import { mealAPI, drinkAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';
import '../styles/Categories.css';

function updateAPI(category, setResult, api) {
  api(`filter.php?c=${category}`, setResult);
}

function buttonAll(setResult, api) {
  return (
    <button
      className="category-button"
      data-testid="all-category-filter"
      type="button"
      onClick={() =>
        api(`search.php?s=${generateRandomLetter()}`, setResult, true)
      }
    >
      All
    </button>
  );
}

function generateCategories(
  categories,
  setResult,
  api,
  previousCategory,
  setCategory,
) {
  return (
    <div className="category-container">
      {buttonAll(setResult, api)}
      {categories.map((category) => {
        const { strCategory } = category;
        return (
          <button
            className="category-button"
            key={strCategory}
            data-testid={`${strCategory}-category-filter`}
            type="button"
            onClick={() =>
              updateAPI(
                strCategory,
                setResult,
                api,
                previousCategory,
                setCategory,
              )
            }
          >
            {strCategory}
          </button>
        );
      })}
    </div>
  );
}

function Categories() {
  const { foodCategory, setResult, category, setCategory } = useContext(
    context,
  );
  if (foodCategory.meals) {
    return (
      <div>
        {generateCategories(
          foodCategory.meals.slice(0, 5),
          setResult,
          mealAPI,
          category,
          setCategory,
        )}
      </div>
    );
  }
  return (
    <div>
      {generateCategories(
        foodCategory.drinks.slice(0, 5),
        setResult,
        drinkAPI,
        category,
        setCategory,
      )}
    </div>
  );
}

export default Categories;
