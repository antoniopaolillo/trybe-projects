import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/context';
import {
  mealLocalStorageAPI,
  drinkLocalStorageAPI,
  mealRecommendedsAPI,
  drinkRecommendedsAPI,
} from '../services/foodAPI';
import DetailsHeader from './DetailsHeader';
import DetailsIngredients from './DetailsIngredients';
import DetailsInstructions from './DetailsInstructions';
import DetailsVideo from './DetailsVideo';
import DetailsButton from './DetailsButton';
import Loading from './Loading';
import FoodList from './FoodList';
import '../styles/DetailsIngredients.css';

function DetailsPage({ match }) {
  const { setRecommendeds, recommendeds, setEmpty } = useContext(context);
  useEffect(() => {
    if (match.path.includes('comidas')) {
      mealLocalStorageAPI(`lookup.php?i=${match.params.id}`);
      drinkRecommendedsAPI('search.php?f=b', setRecommendeds);
    } else {
      drinkLocalStorageAPI(`lookup.php?i=${match.params.id}`);
      mealRecommendedsAPI('search.php?f=b', setRecommendeds);
    }
    setEmpty();
  }, []);

  useEffect(() => {
    setRecommendeds();
    if (match.path.includes('comidas')) {
      drinkRecommendedsAPI('search.php?f=b', setRecommendeds);
    } else {
      mealRecommendedsAPI('search.php?f=b', setRecommendeds);
    }
  }, [match.path]);

  useEffect(() => {
    setEmpty();
    return () => {
      setRecommendeds();
      setEmpty();
    };
  }, []);
  const data = localStorage.foodData;
  if (data && recommendeds) {
    return (
      <div>
        <DetailsHeader id={match.params.id} />
        <DetailsIngredients />
        <DetailsInstructions />
        <DetailsVideo />
        <div>
          <p className="ingredients-title">Recomendadas</p>
          <FoodList result={recommendeds} />
        </div>
        <DetailsButton match={match} />
      </div>
    );
  }
  return <Loading />;
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsPage;
