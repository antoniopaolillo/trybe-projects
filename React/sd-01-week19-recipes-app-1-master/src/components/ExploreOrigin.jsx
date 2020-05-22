import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { filterAreAPI } from '../services/foodAPI';
import context from '../context/context';
import Header from './Header';
import Footer from './Footer';
import '../styles/ExploreOrigin.css';
import ExploreOriginDropdown from './ExploreOriginDropdown';
import ExploreOriginProduct from './ExploreOriginProducts';

const ExploreOrigin = ({ location: { pathname } }) => {
  const { setCurrentFood, setFilterFood } = useContext(context);

  useEffect(() => {
    if (pathname === '/explorar/comidas/area') {
      setCurrentFood('Explorar Origem');
      filterAreAPI(setFilterFood, 'All');
    }
  }, [pathname]);

  return (
    <div>
      <div className="Explore_Origin_header">
        <Header />
      </div>
      <div className="Explore_Origin_dropdwon">
        <ExploreOriginDropdown />
      </div>
      <div>
        <ExploreOriginProduct />
      </div>
      <div className="Explore_Origin_container">
        <Footer />
      </div>
    </div>
  );
};

ExploreOrigin.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExploreOrigin;
