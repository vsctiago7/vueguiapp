import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const dark_theme = {
  background: "#344a5f",
  color: "#fff"
};

const light_theme = {
  background: "#fff",
  color: "#344a5f"
};

export default new Vuex.Store({
  state: {
    todos: [{ message: "test1" }, { message: "test2" }, { message: "test3" }],
    theme: dark_theme
  },
  mutations: {},
  actions: {}
});
