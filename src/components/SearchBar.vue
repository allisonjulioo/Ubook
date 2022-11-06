<template>
  <div data-testid="search-bar">
    <form role="form" aria-label="Formulário de pesquisa do site de agenda">
      <input
        role="input"
        type="text"
        value=""
        placeholder="Buscar..."
        aria-label="Barra de pesquisa do site de agenda"
      />
      <clk-button
        role="button"
        type="submit"
        aria-label="Botão para enviar pesquisar"
      >
        <img :src="iconSeach" alt="ìcone de busca" />
      </clk-button>
    </form>
  </div>
</template>

<script>
import iconSeach from '../..//assets/ic-search.svg';
import Button from '@/components/Button.vue';

export default {
  components: {
    'clk-button': Button,
  },
  data() {
    return {
      iconSeach,
    };
  },
};
</script>
