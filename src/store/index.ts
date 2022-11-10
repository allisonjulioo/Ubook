import { createStore } from 'vuex';
import { ConfirmStore } from './modules/confirmDelete';
import { ContactListStore } from './modules/contactList';
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
    ContactListStore,
    ConfirmStore,
  },
});
