<template>
  <MainLayout section="about" :isWhiteBG="true">
    <div id="about">
      <div class="section">
        <div class="section-wrapper">
          <h2 class="typography-h2 mb-5">Our Story</h2>
          <p class="body-1 text-center our-story-content">
            Our story began in 2017 when a few engineers and finance professionals realized the awesome disruptive potential of distributed ledger technologies. Dev Null Productions was formed the following spring to deliver high quality, robust products and services of value. In the years since we haven't looked back and are eager to tackle the opportunities presented in The Digital Age!
          </p>

          <Team />
          <Contact />
        </div>
        <div class="linear-gradient"></div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout'
import Team       from '@/components/Team'
import Contact    from '@/components/Contact'

export default {
  name: 'About',

  components: {
    MainLayout,
    Team,
    Contact
  },
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";
#about {
  background: $grey-0;
}

#about .section {
  padding-top: 155px;
  padding-bottom: 160px;

  @media screen and (max-width: 767px) {
    padding-top: 125px;
    padding-bottom: 145px;
  }
}

#about .section-wrapper {
  max-width: 914px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}

.our-story-content {
  margin-bottom: 100px;
  padding: 0 15px;
}

.linear-gradient {
  position: absolute;
  width: 100%;
  height: 749.12px;
  left: 0px;
  bottom: -175px;

  background: linear-gradient(63.72deg, #4C96D7 23.81%, #0E5696 93.54%);
  opacity: 0.1;
  transform: matrix(1, 0.16, 0, -1.1, 0, 0);
}
</style>
