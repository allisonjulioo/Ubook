<template>
  <div class="cs-list" v-if="contacts.length > 0">
    <div class="cs-list__template">
      <span v-for="(field, index) in fields" :key="index">
        {{ field.name }}
      </span>
    </div>

    <div
      class="cs-list__template"
      alt="item_contact_list"
      v-for="(contact, index) in contacts"
      :key="index"
    >
      <section>
        <cs-avatar :name="contact.name" />
        <span>{{ contact.name }}</span>
      </section>
      <span>{{ contact.email }}</span>
      <span>{{ contact.phone }}</span>
      <section class="cs-list__actions">
        <cs-button variant="icon" @click="handleEditContact(contact.id)">
          <cs-icon icon="edit" alt="ìcone para editar um item" />
        </cs-button>
        <cs-button variant="icon" @click="handleRemoveContact(contact.id)">
          <cs-icon icon="delete" alt="ìcone para deletar um item" />
        </cs-button>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContactList',
  computed: {
    ...mapGetters(['contacts']),

    fields() {
      return [
        {
          name: 'Contatos',
          key: 'contacts',
        },
        {
          name: 'E-mail',
          key: 'email',
        },
        {
          name: 'Telefone',
          key: 'phone',
        },
        {
          name: '',
          key: 'actions',
        },
      ];
    },

    fieldsLength() {
      return this.fields.length;
    },
  },

  methods: {
    ...mapActions([
      'getContacts',
      'removeContact',
      'openConfirm',
      'closeConfirm',
    ]),

    handleremoveContact(id) {
      this.removeContact(id).then(() => this.closeConfirm());
    },

    handleRemoveContact(id) {
      this.openConfirm({
        title: 'Excluir contato',
        text: 'Quero excluir',
        onConfirm: () => this.handleremoveContact(id),
        onDecline: () => this.closeConfirm(),
      });
    },

    handleEditContact(id) {
      this.$emit('editContact', id);
    },
  },

  mounted() {
    this.getContacts();
  },
};
</script>

<style lang="scss">
.cs-list {
  &__template {
    display: grid;
    grid-template-columns: repeat(v-bind(fieldsLength), 1fr);
  }
  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
