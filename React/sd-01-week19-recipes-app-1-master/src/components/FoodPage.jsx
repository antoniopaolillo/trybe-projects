import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Footer from './Footer';
import FoodList from './FoodList';
import context from '../context/context';
import Header from './Header';
import { mealAPI, drinkAPI } from '../services/foodAPI';
import generateRandomLetter from '../services/randomLetter';
import '../styles/FoodPage.css';
import Loading from './Loading';

function FoodPage({ location: { pathname } }) {
  const {
    result,
    setResult,
    setFoodCategory,
    foodCategory,
    setCurrentFood,
    isShowInput,
  } = useContext(context);

  useEffect(() => {
    if (pathname === '/receitas/comidas') {
      setResult();
      mealAPI(`search.php?s=${generateRandomLetter()}`, setResult, true);
      mealAPI('list.php?c=list', setFoodCategory);
      setCurrentFood('Comidas');
    } else {
      setResult();
      drinkAPI(`search.php?s=${generateRandomLetter()}`, setResult, true);
      drinkAPI('list.php?c=list', setFoodCategory);
      setCurrentFood('Bebidas');
    }
  }, [pathname]);

  if (foodCategory && result) {
    if (isShowInput) {
      return (
        <div>
          <Header />
          <FoodList result={result} pathname={pathname} />
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <Categories pathname={pathname} />
        <FoodList result={result} pathname={pathname} />
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
  return <Loading />;
}

FoodPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodPage;
