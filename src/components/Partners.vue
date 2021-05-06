<template>
  <div class="position-relative px-3 px-sm-5">
    <VueSlickCarousel v-bind="settings" ref="carousel">
      <div
        class="carousel-item"
        v-for="(item, index) in arr"
        :key="index">
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
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'Partners',

    components: { VueSlickCarousel },

    data() {
      return {
        settings: {
          "dots": false,
          "focusOnSelect": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 4,
          "touchThreshold": 5,
          "arrows": false,
          "responsive": [
            {
              "breakpoint": 1992,
              "settings": {
                "slidesToShow": 4,
                "slidesToScroll": 4,
              }
            },
            {
              "breakpoint": 1024,
              "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3,
              }
            },
            {
              "breakpoint": 840,
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2
              }
            }
          ]
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

  @media screen and (max-width: 640px) {
    width: 151px;
    height: 151px;
  }
}

.slick-icon {
  cursor: pointer;
}

.slick-next-icon {
  position: absolute;
  top: calc(50% - 15px);
  right: 0;

  @media screen and (max-width: 640px) {
    bottom: -70px;
    top: initial;
    right: calc(50% - 80px);
  }
}

.slick-prev-icon {
  position: absolute;
  top: calc(50% - 15px);
  left: 0;

  @media screen and (max-width: 640px) {
    bottom: -70px;
    top: initial;
    left: calc(50% - 80px);
  }
}

.slick-arrow {
  display: none;
}
</style>
