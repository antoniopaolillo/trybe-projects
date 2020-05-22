import React from 'react';
import '../styles/Loading.css';

const Spinner = require('react-spinkit');

function Loading() {
  return (
    <div className="center-container">
      <Spinner name="pacman" color="black" />
      <p className="text-loading">Loading...</p>
    </div>
  );
}

export default Loading;
