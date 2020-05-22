import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import context from '../context/context';
import Header from './Header';
import Footer from './Footer';
import '../styles/Explore.css';

const ExplorePage = ({ location: { pathname } }) => {
  const { setCurrentFood } = useContext(context);

  useEffect(() => {
    if (pathname === '/explorar') {
      setCurrentFood('Explorar');
    }
  }, [pathname]);

  return (
    <div>
      <Header />
      <div className="Explore_Page_buttons">
        <Link to="/explorar/comidas">
          <button data-testid="explore-food" className="Explore_Food_button">
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button data-testid="explore-drinks" className="Explore_Food_button">
            Explorar Bebidas
          </button>
        </Link>
      </div>
      <div className="Explore_Food_footer">
        <Footer />
      </div>
    </div>
  );
};

ExplorePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExplorePage;
