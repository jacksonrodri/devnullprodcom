<template>
  <div
    class="article-item"
    @click="nav_to_article"
  >
    <div class="article-item-content">
      <p class="article-item-content--date body-2 mb-3">{{parsed_date.toLocaleString('default', { month: 'long' })}} {{parsed_date.getDate()}}</p>
      <h4 class="article-item-content--subject typography-h4 text-dark mb-2">{{post.title}}</h4>
      <div class="article-item-content--tags caption d-flex">
        <span class="tag mr-1">Tags: </span>
        <span class="tag-list">{{ post.tags }}</span>
      </div>
    </div>
    <div class="article-item-image">
      <img :src="post_img(post)">
    </div>
  </div>
</template>

<script>
import HasPost   from "@/mixins/HasPost"

export default {
  name: "ArticleItem",

  mixins: [
    HasPost
  ],

  methods: {
    nav_to_article: function () {
      this.$router.push(`/article/${this.post.path}`)
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/scss/custom.scss";
.article-item {
  padding: 28px 0;
  display: flex;
  cursor: pointer;

  &-content {
    flex: 1;
    margin-right: 32px;

    &--tags {
      .tag {
        color: $grey-2;
      }

      .tag-list {
        color: $primary-blue;
      }
    }
  }

  &-image {
    width: 304px;
    height: 176px;
    background: $grey-1;
    border-radius: 4px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    &-content {
      margin-right: 0;
    }

    &-image {
      width: auto;
      height: auto;
    }
  }
}
</style>
