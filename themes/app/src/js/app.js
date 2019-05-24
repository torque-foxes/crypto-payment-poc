import Vue from 'vue';
import Vuex from 'vuex';
import Meganav from './components/Meganav.vue';
import FlyoutPanel from './components/FlyoutPanel/FlyoutPanel.vue';
import Tabs from './components/Tabs/Tabs.vue';

/**
 * Enable Vuex
 *
 * This should be used when we need to share state amongst components or actions
 * occur across components.
 */
Vue.use(Vuex);

/**
 * Setup our vuex store
 */
const store = new Vuex.Store({
  state: { },

  getters: { },

  /* eslint-disable no-param-reassign */
  mutations: { },
  /* eslint-enable no-param-reassign */

  actions: { },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {
    FlyoutPanel,
    Tabs,
  },
  mixins: [Meganav],
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    openMobileMenu() {
      this.mobileMenuOpen = true;
    },
  },
});
/* eslint-enable no-new */

export default {};
