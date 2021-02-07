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

export const contactsAPI = {
  getContacts() {
    return axios
      .get('contacts')
      .then((resp) => resp.data)
      .catch((e) => e);
  },
  addContact(name, number) {
    return axios
      .post('contacts', { name, number })
      .then((resp) => resp.data)
      .catch((e) => e);
  },
  deleteContact(id) {
    return axios
      .delete(`contacts/${id}`)
      .then((resp) => resp)
      .catch((e) => e);
  },
};

export const authAPI = {
  login(email, password) {
    return axios
      .post('/users/login', { email, password })
      .then((resp) => {
        tokenController.set(resp.data.token);
        return resp.data;
      })
      .catch((e) => e);
  },
  logout() {
    return axios
      .post('/users/logout')
      .then(tokenController.unset())
      .catch((e) => e);
  },
  signup(name, email, password) {
    return axios
      .post('/users/signup', { name, email, password })
      .then((resp) => {
        tokenController.set(resp.data.token);
        return resp.data;
      })
      .catch((e) => e);
  },
  getCurrentUser() {
    return axios
      .get('/users/current')
      .then((resp) => resp.data)
      .catch((e) => e);
  },
};
