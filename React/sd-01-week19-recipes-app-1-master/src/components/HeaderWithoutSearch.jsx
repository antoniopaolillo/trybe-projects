import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import IconProfile from '../img/iconProfile.png';
import IconSearch from '../img/iconSearch.png';
import context from '../context/context';
import '../styles/Header.css';

const HeaderWithoutSearch = () => {
  const { currentFood } = useContext(context);

  return (
    <div>
      <div className="Header_separating-icons">
        <Link to="/perfil"><img src={IconProfile} alt="Icon Profiler" /></Link>
        <h1>{currentFood}</h1>
        <input
          className="icon_search"
          type="image"
          src={IconSearch}
          alt="Icon to Search"
        />
      </div>
    </div>
  );
};

export default HeaderWithoutSearch;
