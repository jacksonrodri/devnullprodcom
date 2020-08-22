<template>
  <MainLayout section="blog">
    <div id="title_wrapper">
      <h1>The <i>Dev Null Productions</i> Blog</h1>
    </div>

    <div id="blog">
      <div id="timeline-border" />
      <div v-for="post in sorted_enabled_posts" :key="post.path" class="post">
        <div class="post_date">
          <div class="post_day">
            {{parsed_dates[post.path].getDate()}}
          </div>

          <div class="post_month">
            {{parsed_dates[post.path].toLocaleString('default', { month: 'short' })}}
          </div>
        </div>

        <div class="timeline-divider" />

        <router-link :to="'/post/' + post.path">
          <img :src="post_img(post)" class="post_img" />
        </router-link>

        <h2 class="post_title">
          <router-link :to="'/post/' + post.path">{{post.title}}</router-link>
        </h2>

        <div class="post_summary">
          {{post.summary}}
        </div>

        <router-link :to="'/post/' + post.path" class="read_more">
          Read More
        </router-link>

        <div class="post_tags">
          Tags: {{post.tags}}
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout'
import HasPosts   from './mixins/HasPosts'

export default {
  name: 'Blog',

  mixins : [HasPosts],

  components: {
    MainLayout
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

#blog{
  position: relative;
  margin-left: 300px;
  font-family: MavenPro;
}

#timeline-border{
  position: absolute;
  top: 0;
  left: -68px;
  height: 100%;
  margin-left: 0;
  border-left: 1px dashed #CCC;
}

.post{
  position: relative;
  max-width: 750px;
  margin: 25px;
  padding: 25px;
  border-bottom: 1px solid #F5F5F5;
}

.post_date{
  position: absolute;
  left: -132px;
  border: 3px solid #CCC;
  border-radius: 50px;
  padding: 10px 25px;
  text-align: center;
  color: #CCC;
  background-color: white;
  font-weight: bold;
}

.post:hover .post_date{
  border-color: #3499FF;
  color: #3499FF;
}

.post_day{
  font-size: 1.5rem;
}

.timeline-divider{
  position: absolute;
  left: -50px;
  top: 65px;
  width: 75px;
  border-bottom: 1px dashed #CCC;
}

.post:hover .timeline-divider{
  border-bottom: 1px dashed #3499FF;
}

.post_img{
  max-width: 750px;
  max-height: 250px;
}

.post_title{
  margin-top: 15px;
}

.post_title a{
  color: black;
}

.read_more{
  display: block;
  margin-top: 5px;
  text-decoration: underline;
}

.post_tags{
  font-size: 0.7rem;
}
</style>
