<template>
  <div v-if="modalId">
    <transition name="modal-fade">
      <div v-show="isOpen" class="modal" :id="modalId">
        <div
          class="modal__backdrop"
          @click="closeOnBackdropClick ? handleCloseModal() : null"
        />
        <div class="modal__content" role="dialog">
          <section>
            <header class="modal__content__header" v-if="title">
              {{ title }}
            </header>

            <main class="modal__content__body">
              <slot />
            </main>

            <footer class="modal__content__footer" v-if="!hideFooter">
              <slot name="footer">
                <cs-button
                  class="modal__content__footer__button"
                  variant="secondary"
                  @click="handleCloseModal()"
                >
                  Fechar
                </cs-button>
              </slot>
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

  data() {
    return {
      isOpen: false,
    };
  },

  props: {
    id: {
      type: String,
      required: true,
    },

    title: {
      type: String,
    },

    closeOnBackdropClick: {
      type: Boolean,
      default: true,
    },

    hideFooter: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters(['modalId']),
  },

  methods: {
    ...mapActions(['closeModal']),

    handleCloseModal() {
      this.closeModal();
    },
  },
  watch: {
    modalId(currentId) {
      this.isOpen = this.id === currentId;
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
    @include background-opacity($dark, 0.5);
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
      font-size: 0.875rem;
      padding: 1.2rem 1.5rem;
      min-height: 6rem;
      @include top-bottom-border();
    }

    &__footer {
      gap: 4px;
      flex-direction: row;
      justify-content: flex-end;

      &__button {
        &:disabled {
          cursor: default;
          opacity: 0.32;
        }
      }
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
