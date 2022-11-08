<template>
  <form
    role="form"
    aria-label="Formulário de pesquisa do site de agenda"
    @submit="handleSubmitSearch"
  >
    <input
      role="input"
      type="text"
      value=""
      placeholder="Buscar..."
      aria-label="Barra de pesquisa do site de agenda"
    />
    <cs-button
      variant="primary"
      role="button"
      type="submit"
      aria-label="Botão para enviar pesquisar"
    >
      <cs-icon icon="search" alt="ìcone de busca" />
    </cs-button>
  </form>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
  methods: {
    handleSubmitSearch(event: HTMLFormElement) {
      event?.preventDefault();
    },
  },
};
</script>
