import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/authSelectors';
import routs from 'routs';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

// TODO
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={styles.navMain}>
      <div className={styles.globalNav}>
        <NavLink
          to={'/'}
          exact
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Главная
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to={routs.phonebook}
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            Телефонная книга
          </NavLink>
        )}
      </div>
      <div className={styles.userNav}>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <AuthNav
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
