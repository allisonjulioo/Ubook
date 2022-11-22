<template>
  <nav class="cs-nav-header">
    <img
      src="@/assets/ic-logo.svg"
      alt="logo_agenda"
      aria-label="Logo do site de agenda"
    />
    <div class="cs-nav-header__search">
      <cs-button
        variant="primary"
        @click="handleOpen"
        v-if="contacts.length > 0"
      >
        <cs-icon icon="plus" alt="ìcone para adicionar um item" />
        <span>Criar contato</span>
      </cs-button>
      <cs-search-bar />
    </div>
  </nav>
</template>

<script>
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
  padding: 0.8em 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__search {
    display: flex;
    gap: 10px;
    width: 100%;
    margin-left: 3em;
  }
}
</style>
