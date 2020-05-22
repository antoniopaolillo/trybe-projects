import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import context from '../context/context';
import Header from './Header';
import Footer from './Footer';
import '../styles/Explore.css';
import { mealRandomAPI, drinkRandomAPI, listAllAreasAPI } from '../services/foodAPI';

const ExploreFood = ({ location: { pathname } }) => {
  const {
    setCurrentFood,
    enableButton,
    setEnableButton,
    route,
    setRoute,
    idFood,
    setIdFood,
    setCountries,
    randomFood,
    setRandomFood,
  } = useContext(context);

  useEffect(() => {
    if (pathname === '/explorar/comidas') {
      setCurrentFood('Explorar - Comidas');
      setEnableButton(false);
      setRoute('/explorar/comidas/ingredientes');
      setIdFood('/receitas/comidas/');
      mealRandomAPI(setRandomFood);
      listAllAreasAPI(setCountries);
    } else {
      setCurrentFood('Explorar - Bebidas');
      setEnableButton(true);
      setRoute('/explorar/bebidas/ingredientes');
      setIdFood('/receitas/bebidas/');
      drinkRandomAPI(setRandomFood);
    }
  }, [pathname]);

  return (
    <div>
      <Header />
      <div className="Explore_Page_buttons">
        <Link to={route}>
          <button
            data-testid="explore-by-ingredient"
            className="Explore_Food_button"
          >
            Por ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            data-testid="explore-by-area"
            className="Explore_Food_button"
            disabled={enableButton}
          >
            Por local de origem
          </button>
        </Link>
        <Link to={`${idFood}${randomFood}`}>
          <button
            data-testid="explore-surprise"
            className="Explore_Food_button"
          >
            Me surpreenda!
          </button>
        </Link>
      </div>
      <div className="Explore_Food_footer">
        <Footer />
      </div>
    </div>
  );
};

ExploreFood.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExploreFood;
