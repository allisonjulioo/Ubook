<template>
  <div class="cs-avatar">
    {{ initials }}
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      background: '',
      color: '',
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

    getContrastYIQ() {
      if (!this.background) {
        return;
      }

      let hexcolor = this.background;

      const isHexColor = hexcolor.slice(0, 1) === '#';

      if (isHexColor) {
        hexcolor = hexcolor.slice(1);
      }

      const r = parseInt(hexcolor.substr(0, 2), 16);

      const g = parseInt(hexcolor.substr(2, 2), 16);

      const b = parseInt(hexcolor.substr(4, 2), 16);

      const yiq = (r * 299 + g * 587 + b * 114) / 1000;

      this.color = yiq >= 128 ? 'black' : 'white';
    },

    getInitials() {
      const name = this.name || 'Click Sigin';

      const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

      let initials = [...name.matchAll(rgx)] || [];

      const firstLetterPrimaryName = initials.shift()?.[1] || '';

      const firstLetterLastName = initials.pop()?.[1] || '';

      this.initials =
        `${firstLetterPrimaryName}${firstLetterLastName}`.toUpperCase();
    },
  },
  created() {
    this.getRandomColor();
    this.getContrastYIQ();
    this.getInitials();
  },
});
</script>

<style scoped lang="scss">
.cs-avatar {
  background: v-bind(background);
  color: v-bind(color);
}
</style>
