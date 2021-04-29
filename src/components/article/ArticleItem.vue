<template>
  <div
    class="article-item"
    @click="goArticleDetail"
  >
    <div class="article-item-content">
      <p class="article-item-content--date body-2 mb-3">{{item.date}}</p>
      <h4 class="article-item-content--subject typography-h4 text-dark mb-2">{{item.subject}}</h4>
      <div class="article-item-content--tags caption d-flex">
        <span class="tag mr-1">Tags: </span>
        <ul class="tag-list list-inline d-flex">
          <li v-for="(tag, index) of item.tags" :key="index">
            <a href="#">{{tag}}</a>
            <span v-if="index < item.tags.length - 1" class="mr-1">,</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="article-item-image">
      <img src="@/assets/imgs/img-homepage-p-dei.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: [
    "item",
    "id"
  ],
  methods: {
    goArticleDetail: function () {
      this.$router.push(`/articles/${this.id}`)
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/scss/custom.scss";
.article-item {
  padding: 28px 0;
  display: flex;

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
      object-fit: cover;
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
