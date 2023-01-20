<template>
  <cs-modal id="modal-add-contact" title="Criar novo contato" hideFooter>
    <form :form="form" @submit.prevent="handleSubmitForm">
      <fieldset>
        <label for="contact-name"> Nome </label>
        <input
          id="contact-name"
          name="contact-name"
          v-model="form.name"
          :class="v$.form.name.$error && 'is-invalid'"
        />
        <span class="error-label" v-if="v$.form.name.$error">
          Nome inválido
        </span>
      </fieldset>

      <fieldset>
        <label for="contact-email"> E-mail </label>
        <input
          id="contact-email"
          name="contact-email"
          v-model="form.email"
          :class="v$.form.email.$error && 'is-invalid'"
        />
        <span class="error-label" v-if="v$.form.email.$error">
          E-mail inválido
        </span>
      </fieldset>

      <fieldset class="half">
        <label for="contact-phone"> Telefone </label>
        <input
          id="contact-phone"
          name="contact-phone"
          type="tel"
          v-mask="['(##) #### ####', '(##) ##### ####']"
          v-model="form.phone"
          :class="v$.form.phone.$error && 'is-invalid'"
        />
        <span class="error-label" v-if="v$.form.phone.$error">
          Telefone inválido
        </span>
      </fieldset>
      <section class="actions">
        <cs-button variant="link" @click="handleClose()">Cancelar</cs-button>
        <cs-button type="submit" variant="secondary"> Salvar </cs-button>
      </section>
    </form>
  </cs-modal>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { mapActions } from 'vuex';
import { mask } from 'vue-the-mask';

export default {
  props: {
    id: {
      type: String,
    },
  },
  directives: { mask },

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
    ...mapActions(['getContact', 'addContact', 'editContact', 'closeModal']),

    afterEventSave() {
      this.$emit('close');
      this.form = {};
      this.v$.$reset();
      this.closeModal('modal-add-contact');
    },

    handleClose() {
      this.closeModal('modal-add-contact');
      this.$emit('close');
    },

    saveContact() {
      if (this.form.id) {
        return this.editContact(this.form).then(this.afterEventSave);
      }

      this.addContact(this.form).then(this.afterEventSave);
    },

    async handleSubmitForm() {
      this.v$.form.$touch();
      const isValidForm = this.v$.form.$invalid;

      if (!isValidForm) {
        this.saveContact();
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
  watch: {
    id(id) {
      if (id) {
        this.getEditContact();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
