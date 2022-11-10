import { createStore } from 'vuex';
import { FormContactStore } from './modules/formContact';
import { ModalStore } from './modules/modal';

export const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ModalStore,
    FormContactStore,
  },
});
