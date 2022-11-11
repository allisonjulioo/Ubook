<template>
  <form>
    <fieldset>
      <label> Nome </label>
      <input
        name="contact-name"
        v-model="form.name"
        :class="v$.form.name.$error && 'is-invalid'"
        @input="handleSubmitForm()"
      />
    </fieldset>

    <fieldset>
      <label> E-mail </label>
      <input
        name="contact-email"
        v-model="form.email"
        :class="v$.form.email.$error && 'is-invalid'"
        @input="handleSubmitForm()"
      />
    </fieldset>

    <fieldset class="half">
      <label> Telefone </label>
      <input
        name="contact-phone"
        v-model="form.phone"
        :class="v$.form.phone.$error && 'is-invalid'"
        @input="handleSubmitForm()"
      />
    </fieldset>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: String,
    },
  },
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
    ...mapActions(['setValidateForm', 'setForm', 'getContact']),

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

    getEditContact() {
      this.getContact(this.id).then(contact => {
        this.form = contact;
      });
    },
  },

  mounted() {
    if (this.id) {
      this.getEditContact();
    }
  },

  beforeUnmount() {
    this.form = {};
  },
};
</script>
