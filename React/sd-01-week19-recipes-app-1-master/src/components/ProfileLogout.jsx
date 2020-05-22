import React from 'react';
import { Link } from 'react-router-dom';

const ProfileLogout = () => (
  <Link to="/">
    <button
      className="button"
      data-testid="profile-logout-btn"
      onClick={() => localStorage.clear()}
    >
      Sair
    </button>
  </Link>
);

export default ProfileLogout;
