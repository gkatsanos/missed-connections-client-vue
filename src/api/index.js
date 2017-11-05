import axios from 'axios';

const fetchItems = (page, token) => (
  axios(`http://localhost:3000/message/list/page/${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.data)
);

const registerUser = data => (
  axios.post('http://localhost:3000/auth/register', data)
    .then(response => response.data)
    .catch((err) => {
      throw err;
    })
);

const login = data => (
  axios.post('http://localhost:3000/auth/login', data)
    .then(response => response.data)
);

const authenticate = activationId => (
  axios(`http://localhost:3000/auth/${activationId}`)
    .then(response => response.data)
);

export default {
  fetchItems, registerUser, login, authenticate,
};
