import * as types from './mutation-types';

export default {
  [types.REQUESTED_ITEMS](state) {
    state.statusMessage = '';
  },
  [types.FETCHING_ITEMS](state) {
    state.statusMessage = '';
  },
  [types.FETCHED_ADS_SUCCESS](state, payload) {
    state.items = [...state.items, ...payload];
  },
  [types.STATUS_UPDATE](state, payload) {
    state.statusMessage = payload;
  },
  [types.FILTER_CHANGED](state, payload) {
    state.filter = payload;
  },
  [types.INCREASE_PAGE](state) {
    state.page += 1;
  },
  [types.LOGIN_SUCCESS](state, payload) {
    state.loginDialog.isVisible = false;
    state.user.isAuthenticated = true;
    Object.assign(state.user, payload.token, payload.user);
  },
  [types.LOGIN_FAIL](state, payload) {
    state.loginDialog.isVisible = true;
    state.loginDialog.isValid = false;
    state.loginDialog.errorMsg = payload.response.data.message;
  },
  [types.REGISTER_FAIL](state, payload) {
    state.signupDialog.isVisible = true;
    state.signupDialog.isValid = false;
    state.signupDialog.errorMsg = payload.response.data.message;
  },
  [types.LOGOUT_USER](state) {
    Object.assign(state.user, state.defaultUser);
  },
  [types.TOGGLE_DIALOG](state, payload) {
    state[payload.dialog].isVisible = !state[payload.dialog].isVisible;
    state[payload.dialog].isValid = true;
  },
  [types.IS_AUTHENTICATED](state) {
    state.user.isAuthenticated = true;
  },
};
