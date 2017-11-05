export const items = (state) => {
  if (state.filter === null) {
    return state.items;
  }
  return state.items.filter(item => item.mySex === state.filter);
};

export const isAuthenticated = state => state.user.isAuthenticated;

export const token = (state) => {
  if (state.user.isAuthenticated && state.user.accessToken !== '') {
    return state.user.accessToken;
  }
  return false;
};
