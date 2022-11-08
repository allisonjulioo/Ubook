<template>
  <div>
    <img src="@/assets/ic-book.svg" alt="empty_list_icon" />
    <span>{{ text }}</span>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'EmptyList',
  props: {
    text: {
      type: String,
      default: 'Nenhum contato foi criado ainda',
    },
  },
  setup() {
    return {};
  },
  methods: {},
};
</script>
