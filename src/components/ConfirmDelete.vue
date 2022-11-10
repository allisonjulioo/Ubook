<template>
  <div v-if="confirm.open">
    <transition name="modal-fade">
      <div v-show="confirm.open" class="modal">
        <div class="modal__backdrop" />
        <div class="modal__content" role="dialog">
          <section>
            <header class="modal__content__header" v-if="confirm.title">
              {{ confirm.title }}
            </header>

            <main class="modal__content__body">
              {{ confirm.text }}
            </main>

            <footer class="modal__content__footer">
              <cs-button
                class="modal__content__footer__button"
                variant="link"
                @click="confirm.onDecline()"
              >
                Não
              </cs-button>
              <cs-button
                class="modal__content__footer__button"
                variant="secondary"
                @click="confirm.onConfirm()"
              >
                Sim
              </cs-button>
            </footer>
          </section>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['confirm']),
  },
};
</script>
