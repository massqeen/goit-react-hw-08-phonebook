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
