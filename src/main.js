import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import filter from "./filter";
import beforeEach from "./util/beforeEach";
import 'promise-polyfill';
import 'whatwg-fetch';

Vue.config.productionTip = false;

Object.keys(filter).forEach(k => Vue.filter(k, filter[k]));

router.beforeEach(beforeEach);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
