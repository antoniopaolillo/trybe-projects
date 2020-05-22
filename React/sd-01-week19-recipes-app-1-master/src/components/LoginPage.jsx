import React, { useEffect } from 'react';
import LoginForms from './LoginForms';
import LoginButton from './LoginButton';
import '../styles/LoginPage.css';

function LoginPage() {
  useEffect(() => {
    if (!localStorage.getItem('done-recipes')) {
      localStorage.setItem('done-recipes', JSON.stringify([]));
    }
    if (!localStorage.getItem('in-progress')) {
      localStorage.setItem('in-progress', JSON.stringify([]));
    }
  }, []);

  return (
    <div className="page-login">
      <p className="login-title">Login</p>
      <form className="form">
        <LoginForms />
        <LoginButton />
      </form>
    </div>
  );
}

export default LoginPage;
