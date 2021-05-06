<template>
  <div id="parallaxy_image">
    <parallax :speedFactor="0.35" direction="down">
      <img src="@/assets/imgs/home-header-bg.png" />
    </parallax>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'LandingParallax',

  components: {
    Parallax
  }
}
</script>
<style lang="scss">
#parallaxy_image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  .Masthead {
    @media screen and (max-width: 767px) {
      min-height: 100vh;
    }
  }

  .is-parallax.Masthead__image {
    background: black;
    text-align: center;

    img {
      width: 1440px;
      object-fit: contain;

      @media screen and (max-width: 1439px) {
        margin-left: calc(50vw - 735px);
      }
    }
  }
}
</style>
