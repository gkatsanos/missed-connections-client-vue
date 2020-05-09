import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?
  'https://missed-connections-server.herokuapp.com/' :
  'http://localhost:3000/';

const fetchItems = (page, token) => (
  axios(`message/list/page/${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.data)
);

const registerUser = data => (
  axios.post('auth/register', data)
    .then(response => response.data)
    .catch((err) => {
      throw err;
    })
);

const login = data => (
  axios.post('auth/login', data)
    .then(response => response.data)
);

const authenticate = activationId => (
  axios(`auth/${activationId}`)
    .then(response => response.data)
);

export default {
  fetchItems, registerUser, login, authenticate,
};
