<template>
  <div>
    <cs-empty-list>
      <cs-button variant="primary">Criar contato</cs-button>
    </cs-empty-list>
    <cs-contacts-list />

    <cs-button variant="primary" @click="handleOpen">Handle</cs-button>
  </div>
</template>

<script>
import EmptyList from './EmptyList.vue';
import ContactsList from './ContactsList.vue';
import { mapActions } from 'vuex';

export default {
  name: 'HomeScreen',

  components: {
    'cs-empty-list': EmptyList,
    'cs-contacts-list': ContactsList,
  },

  setup() {
    return {
      visible: false,
    };
  },

  methods: {
    ...mapActions(['openModal', 'closeModal']),

    handleOpen() {
      this.openModal({
        component: ContactsList,
        open: true,
        id: 'modal-add-contact',
        title: 'Criar novo contato',
        primaryButtonLabel: 'Salvar',
        secondaryButtonLabel: 'Cancelar',
        closeOnBackdropClick: true,
        secondaryButtonAction: () => this.handleClose(),
      });
    },

    handleClose() {
      this.closeModal('modal-add-contact');
    },
  },
};
</script>
