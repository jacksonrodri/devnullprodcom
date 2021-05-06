<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link :class="{'text-white': !customNavbar, 'text-dark': customNavbar || isWhiteBG}" to="/">
          Home
        </router-link>
      </li>

      <li>
        <router-link :class="{'text-white': !customNavbar, 'text-dark': customNavbar || isWhiteBG}" to="/products">
          Our Products
        </router-link>
      </li>

      <li>
        <router-link :class="{'text-white': !customNavbar, 'text-dark': customNavbar || isWhiteBG}" to="/articles">
          Articles
        </router-link>
      </li>

      <li>
        <router-link :class="{'text-white': !customNavbar, 'text-dark': customNavbar || isWhiteBG}" to="/about">
          About Us
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',

  props : {
    hamburger: Boolean,
    customNavbar: Boolean,
    isWhiteBG: Boolean,
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";
#nav {
  align-items: center;
}

#main_layout.md #nav {
  flex-basis: 40%;
}

#main_layout.sm #nav,
#main_layout.xs #nav{
  flex-basis: 60%;
}

#nav ul{
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin-bottom: 0;
}

#main_hamburger #nav ul{
  flex-direction: column;
  margin-top: 50px;
}

#nav li{
  list-style-type: none;
  padding: 0 32px;

  @media screen and (max-width: 1199px) {
    padding: 0 28px;
  }
}

#main_hamburger #nav li,
#main_hamburger #nav li,
#main_hamburger #nav li{
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

#nav a{
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: $white;
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
