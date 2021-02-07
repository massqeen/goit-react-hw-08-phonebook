import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routs from 'routs';

const AuthNav = ({ className, activeClassName }) => {
  return (
    <>
      <NavLink
        to={routs.signup}
        className={className}
        activeClassName={activeClassName}
      >
        Зарегистрироваться
      </NavLink>
      <NavLink
        to={routs.login}
        className={className}
        activeClassName={activeClassName}
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
