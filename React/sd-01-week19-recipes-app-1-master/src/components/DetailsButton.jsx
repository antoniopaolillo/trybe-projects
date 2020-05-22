import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/DetailsButton.css';

function DetailsButton({ match }) {
  const [text, setText] = useState('');
  useEffect(() => {
    const doneRecipes = localStorage.getItem('done-recipes');
    if (
      JSON.parse(doneRecipes).find((recipe) => recipe.id === match.params.id)
    ) {
      return setText('');
    }
    const progressRecipes = localStorage.getItem('in-progress');
    if (
      JSON.parse(progressRecipes).find((recipe) => recipe === match.params.id)
    ) {
      return setText('Continuar receita');
    }
    return setText('Iniciar Receita');
  }, []);

  if (text === '') return <div />;
  return (
    <Link to={`${match.url}/em-progresso`}>
      <button className="details-button">{text}</button>
    </Link>
  );
}

DetailsButton.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetailsButton;
