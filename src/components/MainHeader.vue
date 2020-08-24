<template>
  <div id="main_header">
    <router-link to="/">
      <img src="../assets/logo.svg" id="logo" />
    </router-link>

    <nav id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>

        <li>
          <b-dropdown id="products">
            <template v-slot:button-content>
              Products
            </template>

            <b-dropdown-item>
              <router-link to="/products/tracker">
                Blockchain Tracker
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item>
              <router-link to="/products/dex">
                DEX Intel
              </router-link>
            </b-dropdown-item>
          </b-dropdown>
        </li>

        <li><router-link to="/blog">Blog</router-link>

        <li><router-link to="/about">About Us</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>
#main_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

#logo{
  height: 100px;
  width: 100px;
  margin-left: 25px;
}

#nav{
  flex-basis: 25%;
  margin-right: 25px;
  font-family: MavenPro;
}

#main_layout.md #nav{
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
}

#nav li{
  list-style-type: none;
  color: white;
}

#nav a{
  color: white;
  text-decoration: none;
}
</style>

<style>
#products .btn{
  padding: 0;
  padding-bottom: 5px;
  background-color: unset;
  border: none;
  box-shadow: none;
}

#products a{
  color: black !important;
}
</style>
