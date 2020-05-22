import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import context from '../context/context';
import '../styles/ExploreOriginProducts.css';

const ExploreOriginProducts = () => {
  const { filterFood } = useContext(context);

  if (!filterFood) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Explore_Origin_Products-API">
      {filterFood.meals.map((food) =>
        <Link
          to={`/receitas/comidas/${food.idMeal}`}
          className="Explore_Origin_Products-container"
          key={food.idMeal}
        >
          <div>
            <img
              className="Explore_Origin_Products-image"
              src={food.strMealThumb}
              alt="img"
            />
            <p className="Explore_Origin_Products-category">
              {food.strCategory}
            </p>
            <p className="Explore_Origin_Products-name">
              {food.strMeal}
            </p>
          </div>
        </Link>,
      )}
    </div>
  );
};

export default ExploreOriginProducts;
