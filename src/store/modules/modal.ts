import { Commit } from 'vuex';

export interface ModalData {
  id: string;
}

export interface ModalState {
  modalId: string;
}

export const ModalStore = {
  state: {
    modalId: '',
  },

  getters: {
    modalId: (state: ModalState) => state.modalId,
  },

  mutations: {
    openModalData: (state: ModalState, payload: string) => {
      state.modalId = payload;
    },

    closeModalData: (state: ModalState) => {
      state.modalId = '';
    },
  },

  actions: {
    openModal({ commit }: { commit: Commit }, params: string) {
      commit('openModalData', params);
    },

    closeModal({ commit }: { commit: Commit }) {
      commit('closeModalData');
    },
  },
};
