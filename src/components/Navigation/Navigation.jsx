import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <nav>
      {isLoggedIn ? (
        <NavLink className={css.link} to="/logout" onClick={handleLogout}>
          Log Out
        </NavLink>
      ) : (
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
      )}
    </nav>
  );
};
