import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Heart from '../img/heart.svg';
import RedHeart from '../img/redheart.svg';
import '../styles/FavoriteButton.css';

function addOrRemoveFavorite(data, isFavorited, setIsFavorited) {
  if (!isFavorited) {
    const newData = {
      id: data.id,
      category: data.strCategory,
      image: data.strDrinkThumb || data.strMealThumb,
    };
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([newData]));
      return setIsFavorited(true);
    }
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([...JSON.parse(localStorage.favoriteRecipes), newData]),
    );
    return setIsFavorited(true);
  }
  localStorage.favoriteRecipes = JSON.stringify(
    JSON.parse(localStorage.favoriteRecipes).filter(
      (favorite) => favorite.id !== data.id,
    ),
  );
  return setIsFavorited(false);
}

function FavoriteButton({ data }) {
  const [isFavorited, setIsFavorited] = useState();
  useEffect(() => {
    const favorites = localStorage.favoriteRecipes;
    if (!favorites) return setIsFavorited(false);
    const findFavorite = JSON.parse(favorites).find(
      (favorite) => favorite.id === data.id,
    );
    if (findFavorite) {
      return setIsFavorited(true);
    }
    return setIsFavorited(false);
  });

  return (
    <input
      onClick={() => addOrRemoveFavorite(data, isFavorited, setIsFavorited)}
      type="image"
      src={isFavorited ? RedHeart : Heart}
      className="favorite-icon"
    />
  );
}

FavoriteButton.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteButton;
