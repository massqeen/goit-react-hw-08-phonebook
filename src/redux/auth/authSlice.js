import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, mail: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

function setData(state, action) {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

function unsetData(state) {
  state.user = initialState.user;
  state.token = initialState.token;
  state.isLoggedIn = initialState.isLoggedIn;
}

function refreshUser(state, action) {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [authOperations.login.fulfilled](state, action) {
      setData(state, action);
    },
    [authOperations.signup.fulfilled](state, action) {
      setData(state, action);
    },
    [authOperations.logout.fulfilled](state, _) {
      unsetData(state);
    },

    [authOperations.getCurrentUser.fulfilled](state, action) {
      refreshUser(state, action);
    },
    [authOperations.getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.getCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default userSlice.reducer;
