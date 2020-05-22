import React from 'react';
import '../styles/DetailsHeader.css';
import findData from '../services/findData';
import FavoriteButton from './FavoriteButton';
import CopyToClipboard from './CopyToClipboard';

function mealHeader(data, id) {
  const { strMealThumb, strMeal, strCategory } = data;
  return (
    <div>
      <img src={strMealThumb} alt={strMeal} className="image-details" />
      <div className="details-name-share-container">
        <p className="details-name">{strMeal}</p>
        <div className="icons-container">
          <CopyToClipboard />
          <FavoriteButton data={{ id, strCategory, strMealThumb }} />
        </div>
      </div>
      <p className="details-category">{strCategory}</p>
    </div>
  );
}

function drinkHeader(data, id) {
  const { strDrinkThumb, strDrink, strCategory } = data;
  return (
    <div>
      <img src={strDrinkThumb} alt={strDrink} className="image-details" />
      <div className="details-name-share-container">
        <p className="details-name">{strDrink}</p>
        <div className="icons-container">
          <CopyToClipboard />
          <FavoriteButton data={{ id, strCategory, strDrinkThumb }} />
        </div>
      </div>
      <p className="details-category">{strCategory}</p>
    </div>
  );
}

function DetailsHeader({ id }) {
  const data = findData(JSON.parse(localStorage.foodData));
  if (data.idMeal) {
    return mealHeader(data, id);
  }
  return drinkHeader(data, id);
}

export default DetailsHeader;
