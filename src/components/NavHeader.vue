<template>
  <nav class="cs-nav-header">
    <img
      src="@/assets/ic-logo.svg"
      alt="logo_agenda"
      aria-label="Logo do site de agenda"
    />
    <cs-button variant="primary" @click="handleOpen" v-if="contacts.length > 0">
      <cs-icon icon="plus" alt="ìcone para adicionar um item" />
      <span>Criar contato</span>
    </cs-button>
    <cs-search-bar />
  </nav>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import SearchBar from './SearchBar.vue';

export default {
  components: { 'cs-search-bar': SearchBar },

  computed: {
    ...mapGetters(['contacts']),
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions(['openModal']),

    handleOpen() {
      this.openModal('modal-add-contact');
    },
  },
};
</script>

<style lang="scss">
.cs-nav-header {
  height: 4rem;
  margin: 0 0 6rem;
  padding: 1rem;
}
</style>
