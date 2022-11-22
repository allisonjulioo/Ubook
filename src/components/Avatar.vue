<template>
  <div class="cs-avatar">
    {{ initials }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      background: '',
      initials: '',
    };
  },

  methods: {
    getRandomColor() {
      const strings = '0123456789ABCDEF';

      let background = '#';

      for (let i = 0; i < 6; i++) {
        background += strings[Math.floor(Math.random() * 16)];
      }

      this.background = background;
    },

    getInitials() {
      const name = this.name || 'UBook';

      const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

      let initials = [...name.matchAll(rgx)];

      const firstLetterPrimaryName = initials.shift()?.[1];

      this.initials = firstLetterPrimaryName;
    },
  },

  created() {
    this.getRandomColor();
    this.getInitials();
  },
};
</script>

<style scoped lang="scss">
.cs-avatar {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.8rem;
  border-radius: 50%;
  background: v-bind(background);
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
