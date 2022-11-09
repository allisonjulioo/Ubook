import type { Component } from 'vue';
import { Commit } from 'vuex';

export interface ModalData {
  id: string;
  open: boolean;
  component: Component;
  title?: string;
  props?: any; // eslint-disable-line
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  secondaryButtonAction?: () => void;
  primaryButtonAction?: () => void;
  closeOnBackdropClick?: boolean;
}

export interface ModalState {
  modal: ModalData;
}

export const ModalStore = {
  state: {
    modal: {
      id: '',
    },
  },

  getters: {
    modal: (state: ModalState) => state.modal,
  },

  mutations: {
    openModalData: (state: ModalState, payload: ModalData) => {
      state.modal = payload;
    },

    closelData: (state: ModalState, payload: string) => {
      state.modal = { ...state.modal, open: false, id: payload };
    },
  },

  actions: {
    openModal({ commit }: { commit: Commit }, params: ModalData) {
      commit('openModalData', params);
    },

    closeModal({ commit }: { commit: Commit }, params: string) {
      if (!params) {
        return;
      }

      commit('closelData', params);
    },
  },
};
