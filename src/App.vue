<template>
  <cs-confirm />
  <cs-nav-bar />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavHeader from '@/components/NavHeader.vue';
import ConfirmDelete from '@/components/ConfirmDelete.vue';

@Options({
  components: {
    'cs-nav-bar': NavHeader,
    'cs-confirm': ConfirmDelete,
  },
})
export default class Home extends Vue {}
</script>
