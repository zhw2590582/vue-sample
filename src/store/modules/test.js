import { get, post} from "../../util/request";
import config from "../../config";

export default {
  state: {
    count: 1,
    request: ''
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
    request(state, payload) {
      state.request = payload;
    },
  },
  actions: {
    increment({ commit }, param) {
      commit("increment", 1);
    },
    async request({ commit }, param) {
      let data = await get('https://jsonplaceholder.typicode.com/posts/1');
      if(data.code === 200) {
        param.callback && param.callback();
      } else {
        // console.error(data)
      }
    },
  }
};
