<template>
  <cs-empty-list>
    <cs-button variant="primary" @click="handleOpen">Criar contato</cs-button>
  </cs-empty-list>
  <cs-contacts-list @editContact="handleEditContact" />
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
import EmptyList from './EmptyList.vue';
import ContactsList from './ContactsList.vue';
import FormContact from './FormContact.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomeScreen',

  data() {
    return {
      selectedId: '',
    };
  },

  components: {
    'cs-empty-list': EmptyList,
    'cs-contacts-list': ContactsList,
    'cs-form-contact': FormContact,
  },

  computed: {
    ...mapGetters(['isValidForm', 'form']),
  },

  methods: {
    ...mapActions(['openModal', 'closeModal', 'addContact', 'editContact']),

    handleOpen() {
      this.openModal('modal-add-contact');
    },

    handleClose() {
      this.closeModal('modal-add-contact');
    },

    handleEditContact(id) {
      this.selectedId = id;
      this.handleOpen();
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
