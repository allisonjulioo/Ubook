<template>
  <div v-if="modal">
    <transition name="modal-fade">
      <div v-show="modal.open" class="modal" :id="modal.id">
        <div
          class="modal__backdrop"
          @click="modal.closeOnBackdropClick ? handleCloseModal() : null"
        />
        <div class="modal__content" role="dialog">
          <section>
            <header class="modal__content__header" v-if="modal.title">
              {{ modal.title }}
            </header>

            <main class="modal__content__body">
              <component
                :is="{ ...modal.component }"
                :close="modal.close"
                :dismiss="modal.dismiss"
                v-bind="modal.props"
                :class="{ [modal.id]: modal.component }"
              />
            </main>

            <footer
              class="modal__content__footer"
              v-if="modal.primaryButtonLabel || modal.secondaryButtonLabel"
            >
              <cs-button
                v-if="modal.secondaryButtonLabel"
                variant="link"
                @click="modal.secondaryButtonAction"
              >
                {{ modal.secondaryButtonLabel }}
              </cs-button>
              <cs-button
                v-if="modal.primaryButtonLabel"
                variant="secondary"
                @click="modal.primaryButtonAction"
              >
                {{ modal.primaryButtonLabel }}
              </cs-button>
            </footer>
          </section>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CsModal',

  computed: {
    ...mapGetters(['modal']),
  },

  methods: {
    ...mapActions(['closeModal']),

    handleCloseModal() {
      this.closeModal(this.modal.id);
    },
  },
};
</script>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    @include background-opacity($black, 0.5);
  }

  &__content {
    background: $white;
    box-shadow: $box-shadow;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    width: 27rem;
    z-index: 1;
    animation-delay: 0.4s;

    &__header,
    &__footer {
      padding: 15px;
      display: flex;
    }

    &__header {
      justify-content: space-between;
    }

    &__body {
      position: relative;
      padding: 20px 10px;
      @include top-bottom-border();
    }

    &__footer {
      gap: 4px;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
