<template>
  <MainLayout section="Articles">
    <div id="articles">
      <div class="section">
        <div class="section-wrapper">
          <h2 class="typography-h2 mb-5">Industry insight & knowledge</h2>
          <div class="article-section">
            <div class="article-list">
              <div
                class="article-item"
                v-for="(item, index) of articles"
                :key="index"
              >
                <div class="article-item-content">
                  <p class="article-item-content--date">{{item.date}}</p>
                  <h4 class="article-item-content--subject">{{item.subject}}</h4>
                  <div class="article-item-content--tags">
                    <span>Tags: </span>
                  </div>
                </div>
                <div class="article-item-image">
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>      
</template>

<script>
import MainLayout from '@/components/layout/MainLayout'
export default {
  name: 'Articles',
  components: {
    MainLayout,
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
        }
      ]
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
  padding-bottom: 28px;
}

.article-item {
  padding: 28px 0;
}
</style>