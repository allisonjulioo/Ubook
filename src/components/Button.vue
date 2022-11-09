<template>
  <button class="cs-btn" :class="`cs-${variant}`">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    variant: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.cs-btn {
  border: none;
  cursor: pointer;

  &:not(.cs-icon) {
    height: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 16px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
      0 0 0 0.5px rgba(255, 255, 255, 0.16),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.16),
      0 2px 4px 0.5px rgba(255, 255, 255, 0.16);
  }

  &.cs-primary {
    color: $secondary;
  }

  &.cs-secondary {
    color: $white;
  }

  &.cs-link {
    color: $secondary;
    background: transparent;
  }

  &:is(.cs-icon) {
    background: transparent;
  }

  &:is(.cs-light) {
    color: $primary;
    background: transparent;
  }
}
</style>
