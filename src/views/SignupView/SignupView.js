import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

import { FormStyled, LabelStyled } from './SignupViewStyles';

const SignupView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authOperations.signup({
        name,
        email,
        password,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Регистрация</h1>

      <FormStyled autoComplete="off" onSubmit={onSubmit}>
        <LabelStyled>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </LabelStyled>

        <LabelStyled>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </LabelStyled>

        <LabelStyled>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </LabelStyled>

        <button type="submit" onClick={onSubmit}>
          Зарегистрироваться
        </button>
      </FormStyled>
    </div>
  );
};

export default SignupView;
