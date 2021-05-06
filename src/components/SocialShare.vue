<template>
  <div class="social-share">
    <span class="subtitle-1">Share this</span>
    <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + url">
      <img src="@/assets/imgs/facebook.svg" width="32" height="32" />
    </a>
    <a :href="'https://twitter.com/intent/tweet?url=' + url">
      <img src="@/assets/imgs/twitter.svg" width="32" height="32" />
    </a>
    <a :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + url">
      <img src="@/assets/imgs/linkedin.svg" width="32" height="32" />
    </a>
  </div>
</template>

<script>
import config from '@/config'

export default {
  name: "SocialShare",

  props : {
    post : {
      type : Object,
      required : true
    }
  },

  computed : {
    url : function(){
      return config.URL + "/post/" + this.post.path;
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";

.social-share {
  display: flex;
  align-items: center;

  & > a + a {
    margin-left: 48px
  }

  .subtitle-1 {
    color: $grey-3;
    margin-right: 35px;
  }
}
</style>
