<template>
  <MainLayout section="landing">
    <div id="landing">
      <div id="title_wrapper">
        <h1>Engineering Solutions for The Digital Age</h1>
      </div>

      <div id="cards">
        <div class="left-card">
          <div>
            <img src="./assets/imgs/Innvoation.svg" />
            <h5 class="title">Innovation.</h5>
            <p class="content">We developed first to market patented Blockchain tracker.</p>
          </div>
          <div>
            <img src="./assets/imgs/reliable.svg" />
            <h5 class="title">Reliable & Excellence.</h5>
            <p class="content">With the solid track record, we deliver solutions rapidly for clients in various domain.</p>
          </div>
        </div>
        <div class="right-card">
          <div class="right-card-wrapper">
            <h5 class="title">Proudly involved with core Blockchain developement.</h5>
            <a href="#">Read Articles</a>
          </div>
        </div>
      </div>
      <div id="mainContent">
        <div class="section1">
          <div class="section-wrapper">
            <h4 class="section-header">
              Design for convienient, built for scalibility. 
            </h4>
            <p class="section-header-description">
              Over the year, we hear the user desires. With multiple of cycle of developement,  we are proundly be the product leader for Blockchain tracker.
            </p>
            <div class="image-card d-flex">
              <div class="image-card__image">
                <img src="./assets/imgs/img-homepage-p-btt.svg" />
              </div>
              <div class='image-card__content'>
                <h5>BT</h5>
                <h4>Blockchain Transaction Tracker</h4>
                <p>Our transaction tracking suite (patent pending) is the perfect solution to receive email, text message, and webhook alerts on Blockchain activity with no fuss.</p>
              </div>
            </div>
            <div class="image-card image-card-2 d-flex flex-row-reverse">
              <div class="image-card__image">
                <img src="./assets/imgs/img-homepage-p-dei.svg" />
              </div>
              <div class='image-card__content'>
                <h5>XRP INTEL</h5>
                <h4>Decentralized Exchange Intelligence</h4>
                <p>Our DEX Intelligence suite analyzes several major markets and delivers consistent, reliable stats.</p>
              </div>
            </div>
            <div class="text-center">
              <b-button variant="primary" class="text-white px-5 py-3">Lear more about our products</b-button>
            </div>
          </div>
        </div>
        <div class="section2 carousel-section">
          <div class="section-wrapper">
            <h4 class="section-header our-partner">
              Our partners
            </h4>
            <CustomCarousel />
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="promo">
      <iframe :width="mq_xs ? 280 : 560"
              :height="mq_xs ? 158 : 315"
              src="https://www.youtube.com/embed/THZZd3693AM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
      </iframe>
    </div> -->

    <!--<div id="partners_wrapper">
      <div id="partners_title_wrapper">
        <h1>Partners</h1>
      </div>

      <div id="partners">
        <div class="partner">
          <a href="https://ripple.com"><img src="./assets/partners/ripple.jpg" /></a>
        </div>

        <div class="partner">
          <a href="https://coventure.vc"><img src="./assets/partners/coventure.png" /></a>
        </div>
      </div>
    </div>-->
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout'
import CustomCarousel from '@/components/CustomCarousel'
export default {
  name: 'Landing',
  components: {
    MainLayout,
    CustomCarousel
  }
}
</script>

<style scoped lang="scss">
@import './scss/custom.scss';
#landing{
  width: 100%;
}

#title_wrapper{
  width: 100%;
  min-height: 904px;
  padding-top: 34vh;
  background-image: url("./assets/imgs/home-header-bg.png");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
}

#title_wrapper h1{
  text-align: center;
  color: $white;
  font-family: DM Sans;
  font-weight: bold;
  font-size: 72px;
  line-height: 80px;
  max-width: 864px;
}

#cards {
  max-width: 1314px;
  margin: 0 auto;
  position: relative;
}

#cards .left-card {
  background-color: $primary-blue;
  padding: 61px 114px;
  position: absolute;
  display: flex;
  max-width: 866px;
  z-index: 1;
  bottom: -178px;
}

#cards .left-card > div:first-child {
  margin-right: 32px;
}

#cards .left-card img {
  margin-bottom: 16px;
}

#cards .left-card .title,
#cards .right-card .title {
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: $white;
}

#cards .left-card .content {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: $white;
  margin-bottom: 0;
}

#cards .right-card {
  background: #2F7BBD;
  max-width: 448px;
  position: absolute;
  right: 0;
  bottom: -212px;
  z-index: 1;
}

#cards .right-card-wrapper {
  padding: 111px 24px 65px 32px;
  position: relative;
}

#cards .right-card-wrapper:before {
  position: absolute;
  left: -32px;
  bottom: 0;
  content: '';
  width: 0;
  height: 0;
  border-top: solid 34px #235C8E;
  border-left: solid 32px transparent;
}

#cards .right-card .title {
  margin-bottom: 44px;
}

#cards .right-card a {
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $white;
  display: flex;
  align-content: center;
  text-decoration: none;
}

#cards .right-card a:after {
  margin-left: 10px;
  content: url("./assets/imgs/arrow-right.svg");
  width: 16px;
  height: 16px;
}

#mainContent {
  position: relative;
}

#mainContent .section1 {
  background: linear-gradient(121.51deg, #172837 13.32%, #3377B3 87.49%);
  padding-top: 340px;
}

#mainContent .section1 .section-wrapper {
  max-width: 1188px;
  margin: 0 auto;
}

.section-header {
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 40px;
  color: $primary-blue;
  text-align: center;
  letter-spacing: 0.5px;
}

.section-header-description {
  max-width: 640px;
  margin: 0 auto;
  margin-top: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: $grey-0;
}

.image-card {
  color: $white;
  margin-top: 50px;
}

.image-card__content {
  margin-top: 50px;
  padding-right: 50px;
  padding-left: 0;
}

.image-card:last-child {
  margin-top: 80px;
  margin-bottom: 60px;
}

.image-card-2 .image-card__content {
  padding-left: 50px;
  padding-right: 0;
}

.image-card__content h5 {
  width: 104px;
  height: 104px;
  padding: 20px;
  text-align: center;
  background: #1C84DE;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.image-card__content h4 {
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: $white;
  margin-bottom: 20px;
}

.image-card__content p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #CCCDCE;
}

.section1 button {
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 102px;
}

.section2 {
  background-color: $white;
  padding: 56px;
}

.section2 .section-wrapper {
  max-width: 1108px;
  margin: 0 auto;
}

.our-partner {
  margin-bottom: 56px;
}

#content{
  height: 100%;
  width: 80%;
  margin: auto;
  margin-bottom: 75px;
  padding-top: 50px;
}

#content p{
  font-family: MavenPro;
  text-align: center;
}

#promo{
  text-align: center;
}

#partners_wrapper{
  padding: 75px 25px;
  background-color: #8bc7f532;
}

#partners_title_wrapper h1{
  margin-bottom: 50px;
  text-align: center;
  font-family: Lora;
}

#partners{
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
}

#main_layout.md #partners,
#main_layout.sm #partners,
#main_layout.xs #partners{
  flex-direction: column;
}

.partner{
  padding: 10px 50px;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
}

#main_layout.md .partner,
#main_layout.sm .partner,
#main_layout.xs .partner{
  margin-bottom: 25px;
  min-height: 100px;
}

.partner img{
  max-height: 150px;
  max-width: 150px;
}
</style>
