import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Food from './Food';
import '../styles/Food.css';
import context from '../context/context';

function generateFoodsList(result, pathname) {
  if (!result) {
    return <div>Nenhuma receita encontrada</div>;
  }
  return result.map((food, index) => (
    <Food
      index={index}
      pathname={pathname}
      key={`${food.strSource} ${index * 3}`}
      data={food}
    />
  ));
}

function FoodList({ result, pathname = '' }) {
  const { recommendeds } = useContext(context);
  const newResult = result || recommendeds;
  return (
    <div className={pathname === '' ? 'food-recommendeds' : 'food-list'}>
      {generateFoodsList(newResult.meals || newResult.drinks, pathname)}
    </div>
  );
}

FoodList.propTypes = {
  pathname: PropTypes.string.isRequired,
  result: PropTypes.shape({
    meals: PropTypes.string.isRequired,
  }).isRequired,
};
export default FoodList;
