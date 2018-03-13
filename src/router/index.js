import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: resolve => require(["../pages/home"], resolve)
  },
  {
    path: "/page1",
    component: resolve => require(["../pages/page1"], resolve)
  },
  {
    path: "/page2",
    component: resolve => require(["../pages/page2"], resolve)
  }
];

export default new VueRouter({
  routes
});
