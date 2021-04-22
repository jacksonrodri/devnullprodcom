<template>
  <div id="main_header">
    <router-link to="/">
      <img src="@/assets/logo.svg" id="logo" />
    </router-link>

    <div v-if="mq_lt_lg">
      <img id="main_hamburger_open_icon"
           src="@/assets/hamburger.svg"
           @click="hamburger_visible = true"/>

      <div id="main_hamburger" v-show="hamburger_visible">
        <div id="hide_hamburger"
             @click="hamburger_visible = false">
          <img id="main_hamburger_close_icon"
               src="@/assets/x-white.svg" />
        </div>

        <MainNav hamburger @nav="hamburger_visible = false"/>
      </div>
    </div>

    <MainNav v-else />
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
      hamburger_visible : false
    };
  }
}
</script>

<style scoped>
#main_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

#logo{
  height: 100px;
  width: 100px;
  margin-left: 15px;
}

#main_hamburger_open_icon{
  margin-right: 25px;
  width: 25px;
  cursor: pointer;
}

#main_layout.xs #main_hamburger_open_icon{
  width: 20px;
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
</style>
