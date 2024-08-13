import React, { lazy, Suspense, useEffect } from 'react'; // Import lazy and Suspense from React
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { refreshUser } from '../redux/auth/authOperation';
import { useAuth } from '../redux/hooks/useAuth';

// Use lazy to dynamically import components
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Wrap the Routes component in Suspense to handle loading states
  return isRefreshing ? (
    <h1>Refreshing user... Please wait...</h1>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      {' '}
      {/* Add fallback content while loading */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={RegisterPage}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage} />
            }
          />
          <Route
            path="/logout"
            element={<PrivateRoute redirectTo="/" component={HomePage} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
