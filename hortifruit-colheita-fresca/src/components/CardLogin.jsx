import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer } from '../styles/styles';

function CardLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [itsValid, setItsValid] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const profileStorage = localStorage.getItem('profile');
    if (profileStorage) {
      setUser(JSON.parse(profileStorage));
    }
  }, []);

  useEffect(() => {
    const validateAccess = () => {
      const validate = user
        .some(
          (profile) => (profile.password === password && profile.email === email),
        );
      if (validate) {
        setItsValid(true);
      } else {
        setItsValid(false);
      }
    };
    validateAccess();
  }, [password, email, user]);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.value === 'Cadastrar') {
      navigate('/cadastrar');
    } else if (itsValid) {
      navigate('/produto');
    } else {
      global.alert('Senha ou Email Inválido!');
    }
  };
  return (
    <RegisterContainer>
      <form>
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
        <button
          type="button"
          value="Cadastrar"
          onClick={(event) => handleClick(event)}
        >
          Cadastrar
        </button>
      </form>
    </RegisterContainer>
  );
}

export default CardLogin;
