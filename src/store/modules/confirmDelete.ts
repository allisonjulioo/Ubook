import { Commit } from 'vuex';

export interface ConfirmState {
  confirm: {
    title: string;
    text: string;
    open: boolean;
    onConfirm: () => void;
    onDecline: () => void;
  };
}

export type ConfirmData = ConfirmState['confirm'];

export const ConfirmStore = {
  state: {
    confirm: {
      title: '',
      text: '',
      open: false,
      onConfirm: () => undefined,
      onDecline: () => undefined,
    },
  },

  getters: {
    confirm: (state: ConfirmState) => state.confirm,
  },

  mutations: {
    openConfirmData: (state: ConfirmState, payload: ConfirmData) => {
      state.confirm = { ...payload, open: true };
    },

    closeConfirmData: (state: ConfirmState, payload: ConfirmData) => {
      state.confirm = { ...payload, open: false };
    },
  },

  actions: {
    openConfirm({ commit }: { commit: Commit }, payload: ConfirmData) {
      commit('openConfirmData', payload);
    },

    closeConfirm({ commit }: { commit: Commit }) {
      commit('closeConfirmData');
    },
  },
};
