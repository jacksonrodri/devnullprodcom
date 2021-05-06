<template>
  <div class="social-share">
    <span class="subtitle-1">Share this</span>
    <a href="#facebook">
      <img src="@/assets/imgs/facebook.svg" width="32" height="32" />
    </a>
    <a href="#twitter">
      <img src="@/assets/imgs/twitter.svg" width="32" height="32" />
    </a>
    <a href="#linkedin">
      <img src="@/assets/imgs/linkedin.svg" width="32" height="32" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialShare"
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