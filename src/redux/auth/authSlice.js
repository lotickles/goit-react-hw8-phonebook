import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperation';
// import { axios } from 'axios';

const initialAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logIn.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logOut.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isError = true;
        state.isLoggedIn = false;
      });
  },
});
