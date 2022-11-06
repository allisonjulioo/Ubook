<template>
  <div data-testid="nav-header" class="clk-nav-header">
    <img
      :src="iconLogo"
      alt="logo_agenda"
      aria-label="Logo do site de agenda"
    />
    <clk-search-bar />
  </div>
</template>

<script>
import iconLogo from '../../assets/ic-logo.svg';
import SearchBar from './SearchBar.vue';

export default {
  components: { 'clk-search-bar': SearchBar },
  data() {
    return {
      iconLogo,
    };
  },
};
</script>

<style lang="scss">
.clk-nav-header {
  height: 4rem;
  margin: 0 0 6rem;
  padding: 1rem;
}
</style>
