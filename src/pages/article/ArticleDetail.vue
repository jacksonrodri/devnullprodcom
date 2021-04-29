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
          <h3 class="typography-h3 mb-3">XRP vs XLM - A Technical Comparison - Part 4</h3>
          <div class="article-item-detail">
            <p class="article-item-detail-date body-2 mb-3">March 4th</p>
            <div class="article-item-detail-image mb-3">
              <img src="@/assets/imgs/img-homepage-p-dei.svg">
            </div>
            <p class="article-item-detail-content body-1 mb-4 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, diam elementum nec ornare amet. Viverra dolor pellentesque pellentesque sed eu. Ut felis tristique in amet, vitae fringilla. Nisi mauris hac volutpat viverra ultricies aliquet rhoncus. Elementum felis, et placerat integer at viverra. Euismod mauris hendrerit ipsum ultrices imperdiet varius. Sed viverra tristique massa sed nibh in. Dui tempus aliquet sem est ut. Nulla scelerisque non varius sit amet praesent pulvinar urna.
              Tristique cras viverra leo hac. Mauris, nisl cursus proin ornare hac. Diam non justo diam rutrum pellentesque consequat, euismod volutpat nisl. Cursus aliquam turpis dictumst sit varius convallis arcu. Metus, in donec mattis fermentum pretium. Sit enim, tortor pellentesque purus. Lectus in mauris sit luctus pulvinar ac et. Pulvinar fringilla cras gravida ultricies bibendum nullam nisl lacus. Facilisis fames nec ac tristique id. Non orci pretium justo, dolor at sollicitudin amet quisque. Viverra consectetur eget commodo tortor ultricies et, in dictum aliquet. Commodo enim, morbi ac, sit. A netus cursus in leo lacus, dui ultricies placerat sit. Cursus quam vel, donec id interdum nibh sit. Sit purus commodo, arcu nibh ultrices.
              Porta sed in eu, nulla commodo volutpat condimentum. Enim feugiat erat eu non, risus in bibendum blandit. Eget risus hac felis nisl. Vitae id metus vitae nibh eu feugiat egestas nulla. Aliquam vitae aenean proin est at nunc, vivamus sed. Eu semper varius ut dictum. A, quis nisl turpis sit nibh tempus. Est et diam morbi mus viverra at faucibus amet. Ipsum sit viverra aliquet nam volutpat ridiculus nullam donec. Ultrices tellus rhoncus ornare urna posuere lobortis. Cursus lorem nunc scelerisque volutpat eleifend. Et nisi, nulla in ornare.
              A nulla et, nullam pellentesque. Duis fringilla magna et gravida. Ac etiam nec porttitor pulvinar pretium quis. Ornare sed vulputate tempor augue massa. Est augue facilisi pulvinar luctus vitae purus purus pellentesque. Tempus, quis gravida amet morbi adipiscing lobortis. Sollicitudin amet aliquam dignissim vestibulum. Maecenas erat molestie et nam pharetra sit.
              Tellus pulvinar vulputate morbi amet at at blandit. Malesuada magna sit duis tristique eu, habitant imperdiet et. Volutpat, leo faucibus nibh massa nisi lectus mi et. Nunc etiam volutpat ullamcorper ullamcorper sapien sagittis bibendum. Nunc consectetur eget facilisis nullam. Id tortor a id mattis porttitor quis iaculis. Diam, ultrices odio egestas mauris commodo eget velit. Dictum augue faucibus facilisis sollicitudin justo, in.
            </p>
          </div>
          <div class="article-item-share">
            <SocialShare />
          </div>
          <div class="article-section">
            <div class="article-list">
              <ArticleItem
                v-for="(item, index) of getArticles"
                :key="index"
                :item="item"
                :id="index"
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

export default {
  name: "ArticleDetail",
  components: {
    MainLayout,
    ArticleItem,
    SocialShare
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
      ],
    }
  },
  computed: {
    getArticles: function() {
      return this.articles
    }
  },
  methods: {
    goBackArticle: function () {
      this.$router.push("/articles")
    }
  }
}
</script>

<style scoped lang="scss">
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

.article-item-share {
  margin-bottom: 80px;

  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
  }
}
</style>