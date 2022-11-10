import { client } from '@/config/axios';
import { v4 as uuidv4 } from 'uuid';
import { Commit } from 'vuex';

export interface Contacts {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Increment {
  total: number;
}

export interface ContactState {
  contacts: Contacts[];
}

export const ContactListStore = {
  state: {
    contacts: [],
  },

  getters: {
    contacts: (state: ContactState) => state.contacts,
  },

  mutations: {
    getContactsData: async (state: ContactState, search?: string) => {
      const { data } = await client.get('/contacts', { params: { search } });

      state.contacts = data;
    },
  },

  actions: {
    getContacts({ commit }: { commit: Commit }, search?: string) {
      const isTestEnv = process.env.NODE_ENV === 'test';

      if (isTestEnv) {
        commit('getContactsData', search);
      }
    },

    addContact({ state }: { state: ContactState }, params: Contacts) {
      return new Promise(resolve => {
        state.contacts.push({ ...params, id: String(uuidv4()) });
        resolve(state.contacts);
      });
    },

    getContact({ state }: { state: ContactState }, params: string) {
      return new Promise((resolve, reject) => {
        const contact = state.contacts.find(ct => ct.id === params);
        if (contact) {
          return resolve(contact);
        }
        reject(null);
      });
    },

    editContact({ state }: { state: ContactState }, params: Contacts) {
      return new Promise((resolve, reject) => {
        const contact = state.contacts.find(ct => ct.id === params.id);

        if (contact) {
          const index = state.contacts.indexOf(contact);
          state.contacts[index] = { ...params, id: contact.id };
          return resolve(state.contacts[index]);
        }
        reject(null);
      });
    },

    removeContact({ state }: { state: ContactState }, params: string) {
      return new Promise(resolve => {
        const contact = state.contacts.find(ct => ct.id === params)!;
        const index = state.contacts.indexOf(contact);
        state.contacts.splice(index, 1);
        resolve(contact);
      });
    },
  },
};
