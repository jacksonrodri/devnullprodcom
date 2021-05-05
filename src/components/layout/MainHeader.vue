<template>
  <div
    id="main_header"
    :class="{ 'hidden-navbar': !showNavbar}"
  >
    <router-link to="/" :class="{ 'hamburger_logo': hamburger_visible }">
      <img v-if="(!showNavbar || isWhiteBG) && !hamburger_visible" src="@/assets/imgs/logo_wordmark_black.svg" id="logo" />
      <img v-else src="@/assets/imgs/logo_wordmark_white.svg" id="logo" />
    </router-link>

    <div v-if="mq_lt_lg">
      <img
        v-if="(showNavbar && !isWhiteBG)"
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

        <MainNav
          hamburger
          @nav="hamburger_visible = false"
        />
      </div>
    </div>

    <MainNav
      v-else
      :customNavbar="!showNavbar"
      :isWhiteBG="isWhiteBG"
    />
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
  props : {
    isWhiteBG: Boolean,
  },
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
      this.showNavbar = window.pageYOffset < 600;
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
  // transform: translate3d(0, -100%, 0);  
  background: $white;
  padding-top: 8px !important;
  padding-bottom: 8px !important;

  #logo {
    height: 40px;
    width: 40px;
  }
}

#logo{
  height: 80px;
  width: 80px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 767px) {
    width: 72px;
    height: 72px;
  }
}

#main_hamburger{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  background-color: $blue-4;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  #main_hamburger_open_icon{
    cursor: pointer;
  }

  #main_hamburger_close_icon{
    width: 25px;
  }

  #nav {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}


#hide_hamburger{
  cursor: pointer;
  position: absolute;
  right: 32px;
  top: 28px;
}

.hamburger_logo {
  z-index: 22;

  #logo {
    width: 72px;
    height: 72px;
  }
}
</style>
