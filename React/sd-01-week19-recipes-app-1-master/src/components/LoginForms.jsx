import React, { useContext, useEffect, useState } from 'react';
import context from '../context/context';

function createForms(setUserEmail, setUserPassword) {
  return (
    <div className="form">
      <input
        type="email"
        placeholder="Email"
        className="input-email"
        onChange={(event) => setUserEmail(event.target.value)}
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="Senha"
        minLength="6"
        className="input-password"
        onChange={(event) => setUserPassword(event.target.value)}
        data-testid="password-input"
      />
    </div>
  );
}

const LoginForms = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { setDisabled, setEmail } = useContext(context);
  useEffect(() => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (userPassword.length >= 6 && emailRegex.test(userEmail)) {
      setDisabled(false);
    } else {
      setEmail(userEmail);
      setDisabled(true);
    }
  }, [userEmail, userPassword]);

  return createForms(setUserEmail, setUserPassword);
};

export default LoginForms;
