<template>
  <cs-empty-list>
    <cs-button variant="primary">Criar contato</cs-button>
  </cs-empty-list>

  <cs-contacts-list />
</template>

<script lang="ts">
import EmptyList from './EmptyList.vue';
import ContactsList from './ContactsList.vue';

export default {
  name: 'HomeScreen',

  components: {
    'cs-empty-list': EmptyList,
    'cs-contacts-list': ContactsList,
  },

  setup() {
    return {};
  },
  methods: {},
};
</script>
