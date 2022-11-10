import { Commit } from 'vuex';

export interface ModalData {
  id: string;
}

export interface ModalState {
  modalId: string | null;
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
      state.modalId = null;
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
