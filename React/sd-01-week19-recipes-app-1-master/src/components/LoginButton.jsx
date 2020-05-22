import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../context/context';

const LoginButton = () => {
  const { disabled, email } = useContext(context);

  const submition = () => {
    localStorage.setItem('meals-token', '1');
    localStorage.setItem('cocktails-token', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <Link to="/receitas/comidas">
      <button
        type="button"
        className="access-button"
        onClick={submition}
        disabled={disabled}
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </Link>
  );
};

export default LoginButton;
