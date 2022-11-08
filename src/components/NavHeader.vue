<template>
  <div data-testid="nav-header" class="cs-nav-header">
    <img
      src="@/assets/ic-logo.svg"
      alt="logo_agenda"
      aria-label="Logo do site de agenda"
    />
    <cs-search-bar />
  </div>
</template>

<script lang="ts">
import SearchBar from './SearchBar.vue';

export default {
  components: { 'cs-search-bar': SearchBar },
  data() {
    return {};
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
