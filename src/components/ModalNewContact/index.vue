<template>
  <cs-modal id="modal-add-contact" title="Criar novo contato">
    <cs-form-contact :id="selectedId" />
    <template v-slot:footer>
      <cs-button variant="link" @click="handleClose">Cancelar</cs-button>
      <cs-button
        :disabled="!isValidForm"
        variant="secondary"
        @click="handleSaveContact"
      >
        Salvar
      </cs-button>
    </template>
  </cs-modal>
</template>

<script>
import FormContact from './FormContact.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NewContactForm',

  props: {
    selectedId: {
      type: String,
    },
  },

  components: {
    'cs-form-contact': FormContact,
  },

  computed: {
    ...mapGetters(['isValidForm', 'form', 'modalId']),
  },

  methods: {
    ...mapActions(['openModal', 'closeModal', 'addContact', 'editContact']),

    handleClose() {
      this.closeModal('modal-add-contact');
      this.$emit('closed');
    },

    handleSaveContact() {
      if (this.form.id) {
        this.editContact(this.form).then(() => {
          this.handleClose();
        });
        return;
      }

      this.addContact(this.form).then(() => {
        this.handleClose();
      });
    },
  },
};
</script>
