<template>
  <cs-modal />
  <cs-nav-bar />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavHeader from '@/components/NavHeader.vue';
import Modal from '@/components/Modal.vue';

@Options({
  components: {
    'cs-nav-bar': NavHeader,
    'cs-modal': Modal,
  },
})
export default class Home extends Vue {}
</script>
