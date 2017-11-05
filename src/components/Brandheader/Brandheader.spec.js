import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from 'vue-test-utils';
import Brandheader from '@/components/Brandheader/Brandheader';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);


describe('Brandheader', () => {
  let cmp;
  let template;
  let store;
  let state;
  let actions;
  let getters;

  beforeEach(() => {
    actions = {};
    getters = {
      isAuthenticated: () => true,
    };
    state = {
      user: {
        firstName: 'Georgios',
        lastName: 'Katsanos',
        email: 'gkatsanos@gmail.com',
      },
    };
    store = new Vuex.Store({
      state,
      actions,
      getters,
    });
    cmp = mount(Brandheader, {
      store,
      localVue,
    });
  });

  it('has the expected html structure', () => {
    template = cmp.html();
    expect(template).toMatchSnapshot();
  });
});
