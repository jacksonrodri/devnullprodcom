<template>
  <div id="main_footer">
    <div class="section-wrapper">
      <a href="/">
        <img src="@/assets/imgs/logo_wordmark.svg" />
      </a>
      <div class="footer-nav">
        <ul class="list-inline d-inline-flex align-items-center footer-navbar">
          <li v-for="(item, index) of menu" :key="index" class="footer-navbar-item">
            <a class="typography-h6" href="item.link">
              {{ item.name }}
            </a>
          </li>
          <li>
            <a class="typography-h6" href="https://twitter.com/DevNullProd">
              <img src="@/assets/twitter.png" />
            </a>
          </li>
        </ul>
      </div>
      <p class="caption mb-0">(C) 2018-2021 Dev Null Productions LLC.All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      menu: [
        { link: "/", name: "Home" },
        { link: "/", name: "Our Product" },
        { link: "/", name: "Articles" },
        { link: "/", name: "About Us" },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/custom.scss';
#main_footer{
  width: 100%;
  padding: 46px;
  background: $blue-4;
}

#main_footer .section-wrapper {
  max-width: 580px;
  text-align: center;
  margin: 0 auto;
}

.footer-nav {
  margin-top: 45px;
  margin-bottom: 45px;
}

.footer-navbar {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 0;
}

.footer-navbar-item {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
