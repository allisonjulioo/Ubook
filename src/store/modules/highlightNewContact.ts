import { Commit } from 'vuex';

interface NewItem {
  id: string;
  text: number;
}

export interface NewState {
  highlightNew: NewItem[];
}

export type NewData = NewState['highlightNew'];

export const HighlightNewContactStore = {
  state: {
    highlightNew: [],
  },

  getters: {
    highlightNew: (state: NewState) => state.highlightNew,
  },

  mutations: {
    addItemHighlightData: (state: NewState, payload: NewItem) => {
      state.highlightNew = [...state.highlightNew, payload];
    },

    removeItemHighlightData: (state: NewState, payload: string) => {
      state.highlightNew = state.highlightNew.filter(
        item => item.id !== payload,
      );
    },
  },

  actions: {
    addItemHighlight({ commit }: { commit: Commit }, payload: NewData) {
      commit('addItemHighlightData', payload);
    },

    removeItemHighlight({ commit }: { commit: Commit }, params: string) {
      commit('removeItemHighlightData', params);
    },
  },
};
