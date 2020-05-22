import React from 'react';
import '../styles/DetailsInstructions.css';
import findData from '../services/findData';

function DetailsInstructions() {
  const data = JSON.parse(localStorage.foodData);
  return (
    <div>
      <p className="instructions-title">Instructions</p>
      <div className="instructions-details">
        {findData(data).strInstructions}
      </div>
    </div>
  );
}

export default DetailsInstructions;
