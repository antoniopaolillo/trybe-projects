import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileLogout from './ProfileLogout';
import Footer from './Footer';
import HeaderWithoutSearch from './HeaderWithoutSearch';
import context from '../context/context';
import '../styles/ProfilePage.css';

const ProfilePage = ({ location: { pathname } }) => {
  const userEmail = JSON.parse(localStorage.getItem('user'));
  const { setCurrentFood } = useContext(context);

  useEffect(() => {
    if (pathname === '/perfil') {
      setCurrentFood('Perfil');
    }
  }, [pathname]);

  return (
    <div>
      <HeaderWithoutSearch />
      <div className="every-elements">
        <p data-testid="profile-email">{userEmail.email}</p>
        <Link to="/receitas-feitas">
          <button className="button" data-testid="profile-done-btn">Receitas Feitas</button>
        </Link>
        <Link to="/receitas-favoritas">
          <button className="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
        </Link>
        <ProfileLogout />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfilePage;
