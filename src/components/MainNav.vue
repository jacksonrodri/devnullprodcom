<template>
  <nav id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>

      <li>
        <b-dropdown id="products" :no-caret="mq_lt_lg" :offset="mq_lt_lg ? -25 : 0">
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
</template>

<script>
export default {
  name: 'MainNav',

  props : {
    hamburger : Boolean
  }
}
</script>

<style scoped>
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

#main_hamburger #nav ul{
  flex-direction: column;
  margin-top: 50px;
}

#nav li{
  list-style-type: none;
  color: white;
}

#main_hamburger #nav li,
#main_hamburger #nav li,
#main_hamburger #nav li{
  font-size: 3rem;
  text-align: center;
}

#main_hamburger #products li{
  font-size: 1.5rem;
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

#main_hamburger #products .btn{
  font-size: 3rem;
}

#products a{
  color: black !important;
}
</style>
