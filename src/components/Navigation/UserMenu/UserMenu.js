import { useDispatch, useSelector } from 'react-redux';

import { getUser } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import defaultAvatar from './default-avatar.png';

import { StyledContainer, StyledAvatar, StyledName } from './UserMenuStyles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <StyledContainer>
      <StyledAvatar
        src={defaultAvatar}
        alt="user avatar"
        width="32"
      />
      <StyledName>Welcome, {user?.name}</StyledName>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </button>
    </StyledContainer>
  );
};

export default UserMenu;
