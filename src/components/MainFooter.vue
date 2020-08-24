<template>
  <div id="main_footer">
    <span>(C) 2018-2020 Dev Null Productions LLC.</span>
    <br v-if="mq_lt_lg" />
    <span>All Rights Reserved |</span>

    <a href="https://twitter.com/DevNullProd">
      <img src="../assets/twitter.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped>
#main_footer{
  height: 50px;
  width: 100%;
  padding: 15px;
  border-top: 1px solid black;
  text-align: center;
}
</style>
