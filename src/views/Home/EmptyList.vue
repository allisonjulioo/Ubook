<template>
  <div class="empty-list">
    <img src="@/assets/ic-book.svg" alt="empty_list_icon" />
    <span>{{ text }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'EmptyList',

  props: {
    text: {
      type: String,
      default: 'Nenhum contato foi criado ainda',
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  margin: 6rem 0;
}
</style>
