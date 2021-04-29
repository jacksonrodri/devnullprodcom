<template>
  <div
    id="main_header"
    :class="{ 'hidden-navbar': !showNavbar, 'custom-navbar': customNavbar }"
  >
    <router-link to="/">
      <img v-if="customNavbar" src="@/assets/imgs/logo_wordmark_black.svg" id="logo" />
      <img v-else src="@/assets/logo.svg" id="logo" />
    </router-link>

    <div v-if="mq_lt_lg">
      <img
        v-if="!customNavbar"
        id="main_hamburger_open_icon"
        src="@/assets/imgs/white_ham_menu.svg"
        @click="hamburger_visible = true"
      />
      <img
        v-else
        id="main_hamburger_open_icon"
        src="@/assets/imgs/black_ham_menu.svg"
        @click="hamburger_visible = true"
      />

      <div id="main_hamburger" v-show="hamburger_visible">
        <div id="hide_hamburger"
             @click="hamburger_visible = false">
          <img id="main_hamburger_close_icon"
               src="@/assets/x-white.svg" />
        </div>

        <MainNav :customNavbar="customNavbar" hamburger @nav="hamburger_visible = false"/>
      </div>
    </div>

    <MainNav :customNavbar="customNavbar" v-else />
    <b-button
      v-if="!mq_lt_lg" class="normal-btn px-5 py-3 mb-0 text-white contact-us" variant="primary"
      href="/about#contactUs"
    >contact us</b-button>
  </div>
</template>

<script>
import MainNav from './MainNav'

export default {
  name: 'MainHeader',

  components : {
    MainNav
  },

  data : function(){
    return {
      hamburger_visible : false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      customNavbar: false,
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return
      }
      this.customNavbar = window.pageYOffset > 60
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";
#main_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding: 0 64px;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;

  @media screen and (max-width: 1199px) {
    padding: 0 32px;
  }
}

#main_header.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}

#logo{
  height: 100px;
  width: 100px;
}

#main_hamburger_open_icon{
  // margin-right: 25px;
  // width: 25px;
  cursor: pointer;
}

#main_layout.xs #main_hamburger_open_icon{
  // width: 20px;
}

#main_hamburger{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  background-color: blue;
  padding: 20px;
}

#main_hamburger_close_icon{
  width: 25px;
}

#hide_hamburger{
  cursor: pointer;
  text-align: right;
}

.custom-navbar {
  background: $white;
  padding-top: 8px !important;
  padding-bottom: 8px !important;

  #logo{
    height: 40px;
    width: 40px;
  }
}
</style>
