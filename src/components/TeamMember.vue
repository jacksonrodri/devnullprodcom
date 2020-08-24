<template>
  <b-overlay no-center :show="show_overlay" class="overlay_wrapper">
    <div class="team_member" @mouseover="show_overlay = true">
      <div class="photo">
        <img :src="require('../assets/team/' + photo)" >
      </div>

      <div class="bio">
        <div class="name">{{name}}</div>
        <div class="title">{{title}}</div>
      </div>
    </div>

    <template v-slot:overlay>
      <div @mouseleave="show_overlay = false"
           class="overlay_content">
        <div v-html="bio" class="bio" />
      </div>
    </template>
  </b-overlay>
</template>

<script>
export default {
  name: 'TeamMember',

  props : {
    photo : {
      type : String,
      required : true
    },

    name : {
      type : String,
      required : true
    },

    title : {
      type : String,
      required : true
    },

    bio : {
      type : String,
      required : true
    }
  },

  data : function(){
    return {
      show_overlay : false
    }
  }
}
</script>

<style scoped>
.team_member{
  display: flex;
  align-items: center;
  margin: 15px;
}

.team_member img{
  margin-right: 15px;
}

#main_layout.md .team_member img,
#main_layout.sm .team_member img,
#main_layout.xs .team_member img{
  max-width: 100px;
}

.name{
  font-size: 1.25rem;
}

.title{
  color: gray;
}

.overlay_content{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bio{
  padding: 15px;
  text-align: justify;
}
</style>
