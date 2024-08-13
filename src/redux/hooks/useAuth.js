import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
