<template>
  <MainLayout section="ArticleDetail" :isWhiteBG="true">
    <div id="articleDetail">
      <div class="section">
        <div class="section-wrapper">
          <a
            class="subtitle-2 article-back d-flex align-items-center"
            @click="goBackArticle"
          >
            Back to Article
          </a>
          <h3 class="typography-h3 mb-3">{{ post.title }}</h3>
          <div class="article-item-detail">
            <p class="article-item-detail-date body-2 mb-3">{{parsed_dates[post.path].toLocaleString('default', { month: 'long' })}} {{parsed_dates[post.path].getDate()}}</p>
            <div class="article-item-detail-image mb-3">
              <img :src="post_img(post)">
            </div>
            <div class="article-item-post-container mb-4 pb-5">
              <router-view />
            </div>
          </div>
          <div class="article-item-share">
            <SocialShare />
          </div>
          <div class="article-section">
            <div class="article-list">
              <ArticleItem
                v-for="(item) of recent_enabled_posts"
                :key="item.path"
                :item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>      
</template>

<script>
import MainLayout from "@/components/layout/MainLayout"
import ArticleItem from "@/components/article/ArticleItem"
import SocialShare from "@/components/share/SocialShare"
import HasPosts from "@/mixins/HasPosts"
import Posts from "@/assets/posts"

export default {
  name: "ArticleDetail",
  components: {
    MainLayout,
    ArticleItem,
    SocialShare
  },
  mixins: [
    HasPosts
  ],
  computed: {
    post: function(){
      var path = this.$route.path.split("/")
          path = path[path.length-1]

      return Posts.find(function(post){
        return post.path == path;
      })
    },
  },
  methods: {
    goBackArticle: function () {
      this.$router.push("/articles")
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/custom.scss";
#articleDetail {
  background: $grey-0;
}

#articleDetail .section {
  padding-top: 155px;

  @media screen and (max-width: 767px) {
    padding-top: 125px;
  }
}

#articleDetail .section-wrapper {
  max-width: 912px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

.article-section {
  border-top: 2px solid $primary-blue;
  padding-top: 50px;
  padding-bottom: 180px;
  display: flex;

  @media screen and (max-width: 767px) {
    padding-bottom: 22px;
  }
}

.article-back {
  cursor: pointer;
  margin-bottom: 44px;

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }

  &:before {
    content: url("~@/assets/imgs/arrow_back_ios.svg");
    width: 24px;
    height: 24px;
    margin-right: 11px;
  }
}

.article-item-detail {
  &-image {
    height: 500px;
    width: 864px;
    border-radius: 4px;
    background: $grey-1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }

    @media screen and (max-width: 912px) {
      width: auto; 
      height: auto;
      margin-left: -24px;
      margin-right: -24px;
    }
  }
}

.article-item-post-container {
  img {
    max-width: 100%;
    padding: 25px;
  }
}

.article-item-share {
  margin-bottom: 80px;

  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
  }
}
</style>