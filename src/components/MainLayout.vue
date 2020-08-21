<template>
  <div id="main_layout" :class="$mq">
    <div id="main_header_container">
      <MainHeader />
    </div>

    <div id="main_content">
      <slot></slot>
    </div>

    <div id="main_footer_container">
      <MainFooter />
    </div>
  </div>
</template>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

export default {
  name: 'MainLayout',

  components: {
    MainHeader,
    MainFooter
  },

  props : {
    section : {
      type : String,
      required : true
    }
  }
}
</script>

<style scoped>
#main_layout{
  position: relative;
  min-height: 100%;
}

#main_content{
  position: relative;
  margin-top: -100px;
}

#main_header_container{
  position: relative;
  z-index: 100;
}
</style>
