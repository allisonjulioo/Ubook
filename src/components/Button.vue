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
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(.cs-icon) {
    height: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 16px;
    box-shadow: 0 0 0 1px $huge-alfa, 0 0 0 0.5px $huge-alfa,
      inset 0 0 0 0.5px $huge-alfa, 0 2px 4px 0.5px $huge-alfa;
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
    box-shadow: none;
  }

  &:is(.cs-icon) {
    background: transparent;
  }

  &:is(.cs-light) {
    color: $primary;
    background: transparent;
  }

  &:disabled {
    opacity: 0.32;
    cursor: default;
  }
}
</style>
