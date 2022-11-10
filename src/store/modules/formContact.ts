import { Commit } from 'vuex';

export interface FormData {
  form: {
    id?: string;
    name: string;
    email: string;
    phone: string;
  };
}

export interface ValidationData {
  isValid: boolean;
  form?: FormData;
}

export const FormContactStore = {
  state: {
    isValid: false,
    form: {
      name: '',
      email: '',
      phone: '',
    },
  },

  getters: {
    form: (state: FormData) => state.form,

    isValidForm: (state: ValidationData) => state.isValid,
  },

  mutations: {
    setFormData: (state: FormData, payload: FormData['form']) => {
      state.form = payload;
    },

    setValidFormData: (state: ValidationData, payload: boolean) => {
      state.isValid = payload;
    },
  },

  actions: {
    setForm({ commit }: { commit: Commit }, params: FormData) {
      commit('setFormData', params);
    },

    setValidateForm({ commit }: { commit: Commit }, params: boolean) {
      commit('setValidFormData', params);
    },
  },
};
