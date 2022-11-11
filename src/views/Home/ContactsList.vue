<template>
  <div class="cs-list" v-if="contactsList.length > 0">
    <div class="cs-list__template">
      <span v-for="(field, index) in fields" :key="index">
        {{ field.name }}
      </span>
    </div>

    <div
      class="cs-list__template cs-list__item"
      alt="item_contact_list"
      v-for="(contact, index) in contactsList"
      :class="{ 'new-contact': contact.isNewItem }"
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

  data() {
    return {
      polling: null,
      contactsList: [],
    };
  },

  computed: {
    ...mapGetters(['contacts', 'highlightNew']),

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
      'removeItemHighlight',
    ]),

    handlePoolNewItemHighlight() {
      this.polling = setInterval(() => {
        const hasItemsHighlight = this.highlightNew.length === 0;

        if (hasItemsHighlight) {
          clearInterval(this.polling);
        }

        this.highlightNew.forEach(item => {
          item.time -= 2;

          if (item.time === 0) {
            this.removeItemHighlight(item.id);
          }
        });
      }, 1000);
    },

    isNew(id) {
      return this.highlightNew.some(item => item.id === id);
    },

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

    async handleCheckIfHasHighlight() {
      this.contactsList = await this.contacts.map(item => {
        const isNewItem = this.highlightNew.some(ctc => ctc.id === item.id);

        return { ...item, isNewItem };
      });
    },
  },

  mounted() {
    this.getContacts();
  },

  watch: {
    highlightNew() {
      this.handleCheckIfHasHighlight();
      clearInterval(this.polling);
      this.handlePoolNewItemHighlight();
    },

    contacts: {
      handler() {
        this.handleCheckIfHasHighlight();
      },
      deep: true,
    },
  },

  beforeUnmount() {
    clearInterval(this.polling);
  },
};
</script>

<style lang="scss">
.cs-list {
  &__template {
    display: grid;
    grid-template-columns: repeat(v-bind(fieldsLength), 1fr);
  }

  &__item {
    &.new-contact {
      background: $highlight;
    }
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
