<template>
  <MainLayout section="Articles">
    <div id="articles">
      <div class="section">
        <div class="section-wrapper">
          <h2 class="typography-h2 mb-5">Industry insight & knowledge</h2>
          <div class="article-section">
            <div class="article-list">
              <ArticleItem
                v-for="(item, index) of getArticles"
                :key="index"
                :item="item"
                :id="index"
              />
              <div class="text-center article-list-loadmore">
                <b-button
                  variant="primary"
                  class="normal-btn text-white px-5 py-3"
                  @click="loadMore"
                >
                  Load More
                </b-button>
              </div>
            </div>
            <div class="twitter-iframe d-flex align-items-center justify-content-center typography-h4 text-body">Twitter Iframe</div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>      
</template>

<script>
import MainLayout from "@/components/layout/MainLayout"
import ArticleItem from "@/components/article/ArticleItem"
export default {
  name: "Articles",
  components: {
    MainLayout,
    ArticleItem
  },
  data() {
    return {
      articles: [
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        },
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        },
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        },
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        },
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        },
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        },
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        },
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        },
        {
          date: "March 4th",
          subject: "XRP vs XLM - A Technical Comparison - Part 4",
          tags: [
            "xrp",
            "xlm",
            "technical"
          ]
        }
      ],
      count: 1,
    }
  },
  computed: {
    getArticles: function() {
      return this.articles.filter((_, index) => index < this.count * 5)
    }
  },
  methods: {
    loadMore: function() {
      this.count ++
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";
#articles {
  background: $grey-0;
}

#articles .section {
  padding-top: 155px;
}

#articles .section-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}

.article-section {
  border-top: 2px solid $primary-blue;
  padding-top: 28px;
  padding-bottom: 180px;
  display: flex;
}

.article-list {
  margin-right: 32px;
  flex: 1;

  &-loadmore {
    margin-top: 72px;
  }
}

.twitter-iframe {
  margin-top: 28px;
  width: 304px;
  height: 476px;
  background: $white;
}
</style>