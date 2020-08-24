<template>
  <MainLayout section="post">
    <div id="title_wrapper">
      <h1 id="post_title">{{post.title}}</h1>

      <div id="post_date">
        {{parsed_date.toLocaleString('default', { month: 'long' })}}
        {{parsed_date.getDate()}}, {{parsed_date.getFullYear()}}
      </div>
    </div>

    <div id="post_container">
      <div id="post">
        <img :src="post_img(post)" class="post_img" />

        <router-view />

        <hr/>

        <div id="share">
          <div id="share_this_post"><b>Share this Post:</b></div>
          <div id="share-icons">
            <a :href="'https://twitter.com/intent/tweet?url=' + url">
              <img src="./assets/twitter.png" />
            </a>

            <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + url">
              <img src="./assets/facebook.png" />
            </a>

            <a :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + url">
              <img src="./assets/linkedin.png" />
            </a>
          </div>
        </div>
      </div>

      <div id="sidebar" v-if="mq_gte_lg">
        <TwitterFeed />
        <hr/>
        <RecentPosts />
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout  from './components/MainLayout'
import TwitterFeed from './components/TwitterFeed'
import RecentPosts from './components/RecentPosts'
import HasPosts    from './mixins/HasPosts'
import Posts       from './assets/posts'
import config      from './config'

export default {
  name: 'Post',

  mixins : [HasPosts],

  components: {
    MainLayout,
    TwitterFeed,
    RecentPosts
  },

  computed : {
    post : function(){
      var path = this.$route.path.split("/")
          path = path[path.length-1]

      return Posts.find(function(post){
        return post.path == path;
      })
    },

    parsed_date : function(){
      return new Date(Date.parse(this.post.date));
    },

    url : function(){
      return config.URL + "/post/" + this.post.path;
    }
  }
}
</script>

<style scoped>
#title_wrapper{
  width: 100%;
  min-height: 250px;
  padding-top: 125px;
  background-color: black;
}

#title_wrapper h1{
  text-align: center;
  color: white;
  font-family: Lora;
}

#post_container{
  display: flex;
  padding: 50px;
}

#main_layout.md #post_container,
#main_layout.sm #post_container,
#main_layout.xs #post_container{
  padding: 15px;
}

#post{
  max-width: 100%;
  flex-basis: 76%;
  text-align: justify;
  font-family: MavenPro;
}

#main_layout.md #post,
#main_layout.sm #post,
#main_layout.xs #post{
  flex-basis: unset;
}

#sidebar{
  flex-basis: 19%;
  margin-left: 50px;
}

#post_title{
  color: #082b6f;
  font-family: Lora,  sans-serif;
}

#post_date{
  margin-bottom: 25px;
  font-style: italic;
  color: #555;
  text-align: center;
}

.post_img{
  max-width: 750px;
  max-height: 500px;
  margin-bottom: 15px;
}

#share{
  display: flex;
  justify-content: space-between;
}

#share_this_post{
  flex-basis: 25%;
  display: flex;
  align-items: center;
}

#share-icons{
  display: flex;
  align-items: center;
}
</style>

<style>
#post_container h1,
#post_container h2,
#post_container h3{
  margin-top: 25px;
}

#post_container img{
  max-width: 100%;
  padding: 25px;
}
</style>
