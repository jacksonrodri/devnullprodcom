<template>
  <MainLayout section="Articles" :isWhiteBG="true">
    <div id="articles">
      <div class="section">
        <div class="section-wrapper">
          <h2 class="typography-h2 mb-5">Industry insight & knowledge</h2>
          <div class="article-section">
            <div class="article-list">
              <ArticleItem
                v-for="post of sorted_enabled_posts"
                :key="post.path"
                :_post="post" />

              <div class="text-center article-list-loadmore">
                <b-button
                  v-if="count < enabled_posts.length"
                  variant="primary"
                  class="normal-btn text-white px-5 py-3"
                  @click="loadMore">
                  Load More
                </b-button>
              </div>
            </div>
            <div class="twitter-iframe align-items-center justify-content-center typography-h4 text-body">
              <TwitterFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>      
</template>

<script>
import MainLayout  from "@/components/layout/MainLayout"
import ArticleItem from "@/components/ArticleItem"
import TwitterFeed from "@/components/TwitterFeed"
import HasPosts   from "@/mixins/HasPosts"

export default {
  name: "Articles",

  mixins: [
    HasPosts
  ],

  components: {
    MainLayout,
    ArticleItem,
    TwitterFeed
  }
}
</script>

<style lang="scss">
@import "@/scss/custom.scss";
#articles {
  background: $grey-0;
}

#articles .section {
  padding-top: 155px;

  .section-wrapper {
    max-width: 1128px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;

    .article-section {
      border-top: 2px solid $primary-blue;
      padding-top: 28px;
      padding-bottom: 180px;
      display: flex;

      .article-list {
        margin-right: 32px;
        flex: 1;

        &-loadmore {
          margin-top: 72px;

          @media screen and (max-width: 767px) {
            margin-top: 54px;
          }

          @media screen and (max-width: 480px) {
            button {
              width: 100%;
            }
          }
        }

        @media screen and (max-width: 991px) {
          .article-item {
            flex-direction: column;
          }

          .article-item-content {
            margin-right: 0;
          }

          .article-item-image {
            width: auto;
            height: auto;
          }
        }
      }

      .twitter-iframe {
        margin-top: 28px;
        width: 304px;
        height: 476px;
        background: $white;
      }

      @media screen and (max-width: 767px) {
        flex-direction: column;
        padding-bottom: 100px;

        .article-list {
          margin-right: 0;
        }

        .twitter-iframe {
          align-self: center;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 125px;
  }
}
</style>
