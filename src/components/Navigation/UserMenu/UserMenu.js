import { useDispatch, useSelector } from 'react-redux';

import { getUser } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import defaultAvatar from './default-avatar.png';

// TODO
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <div style={styles.container}>
      <img
        src={defaultAvatar}
        alt="user avatar"
        width="32"
        style={styles.avatar}
      />
      <span style={styles.name}>Welcome, {user?.name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
