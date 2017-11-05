import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as actions from './actions';
import mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
    ],
    defaultUser: {
      isAuthenticated: false,
      createdAt: '',
      email: '',
      firstName: '',
      id: '',
      lastName: '',
      accessToken: '',
      expiresIn: '',
      refreshToken: '',
      tokenType: '',
    },
    user: {
      isAuthenticated: false,
      createdAt: '',
      email: '',
      firstName: '',
      id: '',
      lastName: '',
      accessToken: '',
      expiresIn: '',
      refreshToken: '',
      tokenType: '',
    },
    loginDialog: {
      isValid: true,
      isVisible: false,
      errorMsg: '',
    },
    signupDialog: {
      isValid: true,
      isVisible: false,
      errorMsg: '',
    },
    statusMessage: '',
    filter: null,
    page: 1,
  },
  actions,
  mutations,
  getters,
  plugins: [createPersistedState({
    key: 'persistedState',
    paths: ['user'],
  })],
  strict: process.env.NODE_ENV !== 'production',
});
