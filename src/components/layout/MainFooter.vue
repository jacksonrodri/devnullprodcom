<template>
  <div id="main_footer">
    <div class="section-wrapper">
      <a href="/">
        <img src="@/assets/imgs/logo_wordmark.svg" />
      </a>
      <div class="footer-nav">
        <nav id="nav">
          <ul class="list-inline d-flex align-items-center footer-navbar">
            <li class="footer-navbar-item">
              <router-link class="typography-h6 text-white" to="/">
                Home
              </router-link>
            </li>

            <li class="footer-navbar-item">
              <router-link class="typography-h6 text-white" to="/our-product">
                Our Product
              </router-link>
            </li>

            <li class="footer-navbar-item">
              <router-link class="typography-h6 text-white" to="/articles">
                Articles
              </router-link>
            </li>

            <li class="footer-navbar-item">
              <router-link class="typography-h6 text-white" to="/about">
                About Us
              </router-link>
            </li>
            <li style="padding: 15px 0;">
              <a class="typography-h6" href="https://twitter.com/DevNullProd">
                <img src="@/assets/twitter.png" />
              </a>
            </li>
          </ul>
        </nav>
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
  margin-top: 24px;
  margin-bottom: 24px;
}

.footer-navbar {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 0;
  flex-wrap: wrap;
  justify-content: center;

  .footer-navbar-item {
    padding: 20px;
  }
}

.router-link-exact-active {
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: url("~@/assets/imgs/link_active.svg");
    width: 8px;
    height: 8px;
  }
}

</style>
