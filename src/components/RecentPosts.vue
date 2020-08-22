<template>
  <div>
    <h4>Recent</h4>

    <ul>
      <li v-for="post in posts" :key="post.path" class="post">
        <router-link :to="'/post/' + post.path">
          <img :src="post_img(post)" />

          <div>{{post.title}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HasPosts from '../mixins/HasPosts'

export default {
  name: 'RecentPosts',

  mixins : [HasPosts],

  data : function() {
    return {
      num : 5
    }
  },

  computed : {
    posts : function(){
      return this.sorted_enabled_posts.slice(0, this.num);
    }
  }
}
</script>

<style scoped>
h4{
  text-decoration: underline;
}

ul{
  list-style-type: none;
  padding-left: 0;
}

li{
  margin: 15px 0;
}

.post a{
  display: flex;
  align-items: center;
}

.post img{
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
  border-radius: 10px;
}
</style>
