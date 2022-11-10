<template>
  <cs-empty-list>
    <cs-button variant="primary" @click="handleOpen">Criar contato</cs-button>
  </cs-empty-list>
  <cs-contacts-list />
  <cs-modal id="modal-add-contact" title="Criar novo contato">
    <cs-form-contact />
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
import EmptyList from './EmptyList.vue';
import ContactsList from './ContactsList.vue';
import FormContact from './FormContact.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomeScreen',

  components: {
    'cs-empty-list': EmptyList,
    'cs-contacts-list': ContactsList,
    'cs-form-contact': FormContact,
  },

  computed: {
    ...mapGetters(['isValidForm', 'form']),
  },

  methods: {
    ...mapActions(['openModal', 'closeModal']),

    handleOpen() {
      this.openModal('modal-add-contact');
    },

    handleClose() {
      this.closeModal('modal-add-contact');
    },

    handleSaveContact() {
      console.log('data', this.form);
    },
  },
};
</script>
