import { useState } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from 'redux/auth/authOperations';
import { FormStyled, LabelStyled } from './SignupView/SignupViewStyles';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authOperations.login({
        email,
        password,
      })
    );

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Логин</h1>

      <FormStyled onSubmit={onSubmit} autoComplete="off">
        <LabelStyled>
          Электронный адрес
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
          Войти
        </button>
      </FormStyled>
    </div>
  );
};

export default LoginView;
