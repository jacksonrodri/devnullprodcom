<template>
  <div class="our-team">
    <b-container>
      <h4 class="typography-h4 text-center text-dark mb-4">Our team</h4>
      <b-row>
        <b-col v-for="item of [0, 1, 2, 3]" :key="item" md="3" cols="6">
          <div class="circle"></div>
          <p class="subtitle-2 text-center text-dark mb-1">FName,LName</p>
          <p class="subtitle-2 text-center mb-0">title</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Team'
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";
.our-team {
  margin-bottom: 160px;
}

.circle {
  max-width: 100%;
  padding-top: 100%;
  width: 192px;
  border-radius: 100%;
  background: $grey-1;
  margin: 24px auto 12px;

  @media screen and (max-width: 767px) {
    padding-top: initial;
    height: 192px;
  }

  @media screen and (max-width: 575px) {
    width: 146px;
    height: 146px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    padding-top: 100%;
    height: initial;
  }
}

</style>
