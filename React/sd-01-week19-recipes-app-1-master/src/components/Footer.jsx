import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../img/drinkIcon.svg';
import context from '../context/context';
import explorerIcon from '../img/explorerIcon.svg';
import foodIcon from '../img/foodIcon.svg';
import '../styles/Footer.css';

function setNewFood(setCurrentFood, param) {
  setCurrentFood(param);
}

function linkToExplore() {
  return (
    <Link to="/explorar">
      <input
        type="image"
        className={'Footer_icon'}
        data-testid="explore-bottom-btn"
        alt={'explore icon'}
        src={explorerIcon}
      />
    </Link>
  );
}

const Footer = () => {
  const { setCurrentFood } = useContext(context);
  return (
    <div className="Footer_father">
      <Link to="/receitas/bebidas">
        <input
          type="image"
          className={'Footer_icon'}
          data-testid="drinks-bottom-btn"
          alt={'drinks icon'}
          src={drinkIcon}
          onClick={() => setNewFood(setCurrentFood, 'Bebidas')}
        />
      </Link>
      {linkToExplore()}
      <Link to="/receitas/comidas">
        <input
          type="image"
          className={'Footer_icon'}
          data-testid="food-bottom-btn"
          alt={'meals icon'}
          src={foodIcon}
          onClick={() => setNewFood(setCurrentFood, 'Comidas')}
        />
      </Link>
    </div>
  );
};

export default Footer;
