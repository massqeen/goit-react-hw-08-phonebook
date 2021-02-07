import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'navLinkActive';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  margin: 10px;
  color: black;

  &.${activeClassName} {
    color: #9c4543;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export { StyledLink, StyledNav };
