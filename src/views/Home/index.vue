<template>
  <cs-empty-list v-if="contacts.length === 0">
    <cs-button variant="primary" @click="handleOpen">
      <cs-icon icon="plus" alt="ìcone para adicionar um item" />
      <span>Criar contato</span>
    </cs-button>
  </cs-empty-list>

  <cs-contacts-list @editContact="handleEditContact" />

  <cs-new-contact :id="selectedId" @close="handleCloseModal" />
</template>

<script>
import EmptyList from './EmptyList.vue';
import ContactsList from './ContactsList.vue';
import ModalNewContact from '@/components/ModalNewContact';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomeScreen',

  data() {
    return {
      selectedId: '',
      polling: null,
    };
  },

  components: {
    'cs-empty-list': EmptyList,
    'cs-contacts-list': ContactsList,
    'cs-new-contact': ModalNewContact,
  },

  computed: {
    ...mapGetters(['form', 'contacts']),
  },

  methods: {
    ...mapActions(['openModal', 'closeModal']),

    handleOpen() {
      this.openModal('modal-add-contact');
    },

    handleEditContact(id) {
      this.selectedId = id;
      this.handleOpen();
    },

    handleCloseModal() {
      this.selectedId = null;
    },
  },
};
</script>
