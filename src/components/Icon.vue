<template>
  <img
    v-if="currentIcon"
    :src="currentIcon"
    role="img"
    class="cs-icon-container"
  />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: null,
    },
  },
  computed: {
    currentIcon() {
      try {
        return require(`@/assets/icons/ic-${this.icon}.svg`);
      } catch (error) {
        return '';
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cs-icon-container {
  display: inline-flex;
}
</style>
