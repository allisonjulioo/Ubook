<template>
  <button class="clk-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.clk-button {
  width: 4.5rem;
  height: 2rem;
  margin: 0.938rem 1rem 0;
  padding: 0.5rem 1rem;
  opacity: 0.32;
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
    0 0 0 0.5px var(--black-8), inset 0 0 0 0.5px var(--black-8),
    0 2px 4px 0.5px var(--black-8-16);
  background-color: #fa7268;
}
</style>
