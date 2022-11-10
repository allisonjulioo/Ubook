<template>
  <cs-nav-bar />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavHeader from '@/components/NavHeader.vue';

@Options({
  components: {
    'cs-nav-bar': NavHeader,
  },
})
export default class Home extends Vue {}
</script>
