// import { createSelector } from '@reduxjs/toolkit';

// Define the state slice
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};
export const selectIsRefreshing = state => state.auth.isRefreshing;

// Define a selector for the user's name
