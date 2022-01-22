import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer } from '../styles/styles';
import { addProfile } from '../functions/LocalStorage';

function CardRegister() {
  const [newName, setNewName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [itsValid, setItsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validateAccess = () => {
      const emailFormat = /\S+@\S+\.\S+/;
      const MIN_LENGTH = 8;
      if (password.length >= MIN_LENGTH && emailFormat.test(email)) {
        setItsValid(true);
      } else {
        setItsValid(false);
      }
    };
    validateAccess();
  }, [password, email]);

  const handleClick = (event) => {
    event.preventDefault();
    if (itsValid) {
      const randomId = Math.floor(Math.random() * 10000000000000);
      addProfile(newName, password, email, randomId);
      navigate('/produto');
    } else {
      global.alert('Senha ou Email Inválido! Ex email@email.com e senha com mais de 7 digitos.');
    }
  };
  return (
    <RegisterContainer>
      <form>
        <input
          type="text"
          name="name"
          id="email"
          placeholder="Nome"
          value={newName}
          onChange={({ target }) => setNewName(target.value)}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button
          type="submit"
          onClick={(event) => handleClick(event)}
        >
          Entrar
        </button>
      </form>
    </RegisterContainer>
  );
}

export default CardRegister;
