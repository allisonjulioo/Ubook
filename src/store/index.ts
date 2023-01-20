import { createStore } from 'vuex';
import { ConfirmStore } from './modules/confirmDelete';
import { ContactListStore } from './modules/contactList';
import { HighlightNewContactStore } from './modules/highlightNewContact';
import { ModalStore } from './modules/modal';

export const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ModalStore,
    ContactListStore,
    ConfirmStore,
    HighlightNewContactStore,
  },
});
