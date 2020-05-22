import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/IngredientToDo.css';

function IngredientToDo({ ingredient }) {
  const [isMarked, setIsMarked] = useState(false);

  return (
    <div className="ingredient-container">
      <input
        type="checkbox"
        className="ingredient-button"
        onClick={() => setIsMarked(!isMarked)}
      />
      <p
        key={ingredient}
        className={isMarked ? 'marked-ingredient' : 'unmarked-ingredient'}
      >
        {ingredient}
      </p>
    </div>
  );
}

IngredientToDo.propTypes = {
  ingredient: PropTypes.string.isRequired,
};

export default IngredientToDo;
