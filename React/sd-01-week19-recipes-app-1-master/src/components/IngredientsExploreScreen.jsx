import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import IngredientsFromAPI from './IngredientsFromAPI';
import context from '../context/context';
import { mealAPI, drinkAPI } from '../services/foodAPI';
import '../styles/ingredientsExploreScreen.css';

const IngredientsExploreScreen = ({ match }) => {
  const { ingredient, setIngredient } = useContext(context);
  useEffect(() => {
    if (match.url.includes('comidas')) {
      return mealAPI('list.php?i=list', setIngredient);
    }
    return drinkAPI('list.php?i=list', setIngredient);
  }, []);

  if (!ingredient) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Explore_Ingredients-father">
      <Header />
      <div className="API_Ingredients-container">
        <IngredientsFromAPI
          ingredient={ingredient}
          currentFood={match.url}
        />
      </div>
      <div className="Explore_Ingredients-footer">
        <Footer />
      </div>
    </div>
  );
};

export default IngredientsExploreScreen;

IngredientsExploreScreen.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
  }).isRequired,
};

