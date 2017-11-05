import Vue from 'vue';
import Router from 'vue-router';
import Wrapper from '../components/Wrapper/Wrapper';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/:activationId', // needs to be inside accessToken like store
      component: Wrapper,
      name: 'authentication',
    },
    {
      path: '/',
      component: Wrapper,
      name: 'home',
    },
  ],
});
