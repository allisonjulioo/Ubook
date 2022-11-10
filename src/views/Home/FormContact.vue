<template>
  <form>
    <input
      v-model="form.name"
      :class="v$.form.name.$error && 'is-invalid'"
      @input="handleSubmitForm()"
    />
    <input
      v-model="form.email"
      :class="v$.form.email.$error && 'is-invalid'"
      @input="handleSubmitForm()"
    />
    <input
      v-model="form.phone"
      :class="v$.form.phone.$error && 'is-invalid'"
      @input="handleSubmitForm()"
    />
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      v$: useVuelidate(),
      form: {
        name: '',
        email: '',
        phone: '',
      },
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        phone: { required },
      },
    };
  },

  methods: {
    ...mapActions(['setValidateForm', 'setForm']),

    async handleSubmitForm() {
      const isValidName = await this.v$.form.name.$validate();

      const isValidEmail = await this.v$.form.email.$validate();

      const isValidPhone = await this.v$.form.phone.$validate();

      const isValidForm = isValidName || isValidEmail || isValidPhone;

      this.setValidateForm(isValidForm);

      if (isValidForm) {
        this.setForm(this.form);
      }
    },
  },
};
</script>
