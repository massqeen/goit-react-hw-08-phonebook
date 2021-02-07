import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledLink, StyledNav } from './NavigationStyles';

import routs from 'routs';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <StyledNav>
      <div>
        <StyledLink
          to={'/'}
          exact
          activeClassName='navLinkActive'
        >
          Главная
        </StyledLink>

        {isLoggedIn && (
          <StyledLink
            to={routs.phonebook}
            activeClassName='navLinkActive'
          >
            Телефонная книга
          </StyledLink>
        )}
      </div>
      <div>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <AuthNav
            activeClassName='navLinkActive'
          />
        )}
      </div>
    </StyledNav>
  );
};

export default Navigation;
