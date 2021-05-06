<template>
  <div id="app">
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">      
      <b-button
        variant="outline-light"
        class="normal-btn text-white px-4 px-md-5 py-3"
        @click="index = 0">
        watch demo
      </b-button>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  name: 'PromoVideo',

  components: {
    CoolLightBox,
  },

  data: function () {
    return {
      items: [
        {
          src: 'https://www.youtube.com/embed/THZZd3693AM',
          autoplay: true
        },
      ],
      index: null
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/custom.scss";
button {
  &:hover {
    color: $dark !important;
  }
}
</style>
