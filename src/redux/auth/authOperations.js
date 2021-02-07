import { createAsyncThunk } from '@reduxjs/toolkit';

// TODO
import axios from 'axios';

const BASE_URL = 'https://goit-phonebook-api.herokuapp.com/';

axios.defaults.baseURL = BASE_URL;

export const tokenController = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// import { tokenController } from 'api';

const login = createAsyncThunk(
  'auth/login',
  async (requestLoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', requestLoginData);
      tokenController.set(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',
  // eslint-disable-next-line consistent-return
  async (_, { rejectedWithValue }) => {
    try {
      await axios.post('/users/logout');
      tokenController.unset();
    } catch (e) {
      return rejectedWithValue(e);
    }
  }
);

const signup = createAsyncThunk(
  'auth/signup',
  async (requestDataRegister, { rejectedWithValue }) => {
    try {
      const response = await axios.post('/users/signup', requestDataRegister);
      tokenController.set(response.data.token);
      return response.data;
    } catch (e) {
      return rejectedWithValue(e);
    }
  }
);

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const {
      auth: { token: persistedToken },
    } = thunkAPI.getState();

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    tokenController.set(persistedToken);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const authOperations = {
  signup,
  login,
  logout,
  getCurrentUser,
};
export default authOperations;
