<template>
  <form
    @submit="handleSubmitSearch"
    role="form"
    aria-label="Formulário de pesquisa do site de agenda"
  >
    <input
      role="input"
      type="text"
      alt="input_header_search"
      v-model="search"
      @input="handleChangeInput"
      placeholder="Buscar..."
      aria-label="Barra de pesquisa do site de agenda"
    />
    <cs-button
      variant="icon"
      alt="button_header_search"
      role="button"
      type="submit"
      aria-label="Botão para enviar pesquisar"
    >
      <cs-icon icon="search" alt="icon_button_header_search" />
    </cs-button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    ...mapActions(['getContacts']),

    handleChangeInput() {
      if (this.search.length === 0) {
        this.getContacts();
      }
    },

    handleSubmitSearch(event) {
      event?.preventDefault();
      this.getContacts(this.search);
    },
  },
};
</script>
