<template>
  <Timeline :id="handle" sourceType="profile"
               :options="{ tweetLimit: '4' }" />
</template>

<script>
import {Timeline} from 'vue-tweet-embed'

export default {
  name: 'TwitterFeed',

  components : {
    Timeline
  },

  data : function() {
    return {
      handle : "DevNullProd"
    }
  }
}
</script>

<style scoped>
</style>
