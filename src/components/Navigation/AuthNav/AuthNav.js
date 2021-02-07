import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routs from 'routs';

import { StyledLink } from '../NavigationStyles';

const AuthNav = ({ className, activeClassName }) => {
  return (
    <>
      <StyledLink
        to={routs.signup}
        className={className}
        activeClassName='navLinkActive'
      >
        Зарегистрироваться
      </StyledLink>
      <NavLink
        to={routs.login}
        className={className}
        activeClassName='navLinkActive'
      >
        Войти
      </NavLink>
    </>
  );
};

AuthNav.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
};
export default AuthNav;
