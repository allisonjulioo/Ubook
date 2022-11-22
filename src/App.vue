<template>
  <cs-confirm />
  <cs-nav-bar />
  <router-view />
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import ConfirmDelete from '@/components/ConfirmDelete.vue';

export default {
  components: {
    'cs-nav-bar': NavHeader,
    'cs-confirm': ConfirmDelete,
  },
};
</script>
