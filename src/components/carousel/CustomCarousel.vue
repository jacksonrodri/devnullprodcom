<template>
  <div class="position-relative px-5">
    <VueSlickCarousel v-bind="settings" ref="carousel">
      <div
        class="carousel-item"
        v-for="(item, index) in arr"
        :key="index"
      >
        <div>
        </div>
      </div>
    </VueSlickCarousel>
    <div>
      <img class="slick-icon slick-prev-icon" src="@/assets/imgs/arrow_backward.svg" @click="showNext" />
      <img class="slick-icon slick-next-icon" src="@/assets/imgs/arrow_forward.svg" @click="showNext" />
    </div>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'CustomCarousel',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          "dots": false,
          "focusOnSelect": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 2,
          "touchThreshold": 5
        },
        arr: [1, 2, 3, 4, 5, 6]
      }
    },
    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
    },
  }
</script> 
<style scoped lang="scss">
@import '@/scss/custom.scss';

.carousel-item div {
  background: $grey-1;
  width: 191px;
  height: 191px;
  margin: 0 auto;
}

.slick-icon {
  cursor: pointer;
}

.slick-next-icon {
  position: absolute;
  top: calc(50% - 15px);
  right: 0;
}

.slick-prev-icon {
  position: absolute;
  top: calc(50% - 15px);
  left: 0;
}
</style>