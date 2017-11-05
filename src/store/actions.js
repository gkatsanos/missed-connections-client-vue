import api from '../api';
import * as types from './mutation-types';

export const requestItems = ({ commit, dispatch }) => {
  commit(types.REQUESTED_ITEMS);
  dispatch('fetchItems');
};

export const fetchItems = ({ commit, dispatch, state }) => {
  commit(types.FETCHING_ITEMS);
  api.fetchItems(state.page, state.user.accessToken).then((data) => {
    dispatch('receiveItems', data.docs);
    dispatch('increasePage');
  }).catch(() => {
    dispatch('logout');
  });
};

export const receiveItems = ({ commit }, data) => {
  commit(types.FETCHED_ADS_SUCCESS, data);
};

export const changeStatus = ({ commit }, data) => {
  commit(types.STATUS_UPDATE, data);
};

export const setFilter = ({ commit }, data) => {
  commit(types.FILTER_CHANGED, data);
};

export const increasePage = ({ commit }, data) => {
  commit(types.INCREASE_PAGE, data);
};

export const register = ({ commit, dispatch }, data) => {
  api.registerUser(data).then((response) => {
    dispatch('toggleDialog', { dialog: 'signupDialog' });
    dispatch('changeStatus', `Hey ${response.user.firstName}, check your mailbox in order to activate your account.`);
  }).catch((err) => {
    commit(types.REGISTER_FAIL, err);
  });
};

export const login = ({ commit, dispatch }, data) => {
  api.login(data).then((response) => {
    commit(types.LOGIN_SUCCESS, response);
    dispatch('requestItems');
  }).catch((err) => {
    commit(types.LOGIN_FAIL, err);
  });
};

export const logout = ({ commit, dispatch }) => {
  commit(types.LOGOUT_USER);
  dispatch('changeStatus', 'You need to login or register.');
};

export const toggleDialog = ({ commit }, data) => {
  commit(types.TOGGLE_DIALOG, data);
};

export const authenticate = ({ commit, dispatch }, data) => {
  api.authenticate(data).then((response) => {
    commit(types.LOGIN_SUCCESS, response);
    dispatch('requestItems');
  }).catch((err) => {
    commit(types.LOGIN_FAIL, err);
  });
};
