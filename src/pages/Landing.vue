<template>
  <MainLayout section="landing">
    <div id="landing">
      <Parallaxy />
      <div id="title_wrapper">
        <h1 class="typography-h1">Engineering Solutions for The Digital Age</h1>
        <LightBox />
      </div>

      <div id="cards">
        <div class="left-card">
          <div>
            <img src="@/assets/imgs/Innvoation.svg" />
            <h5 class="title">Innovation.</h5>
            <p class="content">We developed first to market patented Blockchain tracker.</p>
          </div>
          <div>
            <img src="@/assets/imgs/reliable.svg" />
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
            <h4 class="typography-h4 text-center">
              Design for convienient, built for scalibility. 
            </h4>
            <p class="section-header-description">
              Over the year, we hear the user desires. With multiple of cycle of developement,  we are proundly be the product leader for Blockchain tracker.
            </p>
            <div class="image-card d-flex">
              <div class="image-card__image">
                <img src="@/assets/imgs/img-homepage-p-btt.svg" />
              </div>
              <div class='image-card__content'>
                <div>
                  <h5 class="typograph-h5">BT</h5>
                  <h4 class="typography-h4 text-white">Blockchain Transaction Tracker</h4>
                </div>
                <p class="body-1 text-grey-1">Our transaction tracking suite (patent pending) is the perfect solution to receive email, text message, and webhook alerts on Blockchain activity with no fuss.</p>
              </div>
            </div>
            <div class="image-card image-card-2 d-flex">
              <div class="image-card__image">
                <img src="@/assets/imgs/img-homepage-p-dei.svg" />
              </div>
              <div class='image-card__content'>
                <div>
                  <h5 class="typograph-h5">XRP INTEL</h5>
                  <h4 class="typography-h4 text-white">Decentralized Exchange Intelligence</h4>
                </div>
                <p class="body-1 text-grey-1">Our DEX Intelligence suite analyzes several major markets and delivers consistent, reliable stats.</p>
              </div>
            </div>
            <div class="text-center">
              <b-button
                variant="primary" class="normal-btn text-white px-4 px-md-5 py-3"
                href="/our-product"
              >Learn more about our products</b-button>
            </div>
          </div>
        </div>
        <div class="section2 carousel-section">
          <div class="section-wrapper">
            <h4 class="typography-h4 text-center our-partner">
              Our partners
            </h4>
            <CustomCarousel />
          </div>
        </div>
        <div class="section3">
          <div class="d-flex section-wrapper">
            <h4 class="typography-h4">Consultancy & Collaboration</h4>
            <div class="section-content">
              <p class="body-1 mb-4">We are an engineering firm focused on delivering robust, reliable digital solutions. As experts in many innovative technologies and standards, Dev Null Productions is confident that we will deliver solutions for your needs in any digital domain. We operate both on a consultancy basis and offer premium subscription services to our products.</p>
              <p class="subtitle-1">Industry we work with</p>
              <ul class="list-inline mb-3">
                <li v-for="(item, index) of collaborations" :key="index" class="typography-h5 mb-2">{{item}}</li>
              </ul>
              <div class="pt-4 lets-chat">
                <p class="body-1">Got an idea?</p>
                <b-button
                  variant="primary" class="normal-btn text-white px-5 py-3"
                  href="/about#contactUs"
                >let's chat</b-button>
              </div>
            </div>
          </div>
          <div class="section3-bg">
          </div>
          <div class='line-deco'>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout'
import CustomCarousel from '@/components/carousel/CustomCarousel'
import LightBox from '@/components/lightbox/LightBox'
import Parallaxy from '@/components/parallaxy/Parallaxy'

export default {
  name: 'Landing',
  components: {
    MainLayout,
    CustomCarousel,
    LightBox,
    Parallaxy
  },
  data() {
    return {
      collaborations: [
        "Fintech",
        "Blockchain",
        "Data & Analytics",
        "Network operation & Monitoring"
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";
#landing{
  width: 100%;
}

#title_wrapper{
  width: 100%;
  min-height: 904px;
  padding-top: 34vh;
  background-position: center;
  background-size: cover;
  text-align: center;

  h1 {
    margin: 0 auto;
    margin-bottom: 48px;
  }

  @media screen and (max-width: 767px) {
    min-height: 100vh;
  }
}

#cards {
  max-width: 1314px;
  margin: 0 auto;
  position: relative;

  .left-card {
    background-color: $primary-blue;
    padding: 61px 114px;
    position: absolute;
    display: flex;
    max-width: 866px;
    z-index: 1;
    bottom: -178px;

    @media screen and (max-width: 1218px) {
      position: relative;
      bottom: 0;
      padding: 30px 24px;
    }

    @media screen and (max-width: 991px) {
      max-width: 100%;
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;

      & > div {
        max-width: 303px;
      }

      & > div:first-child {
        margin-bottom: 66px;
      }

      & > div:nth-child(2) {
        margin-bottom: 32px;
      }
    }
  }

  .right-card {
    background: #2F7BBD;
    max-width: 448px;
    position: absolute;
    right: 0;
    bottom: -212px;
    z-index: 1;

    @media screen and (max-width: 1218px) {
      position: relative;
      bottom: -34px;

      .right-card-wrapper {
        padding: 30px 24px 60px 30px;
        max-width: 360px;
      }
    }

    @media screen and (max-width: 991px) {
      max-width: 100%;
      bottom: 0;
    }
  }

  @media screen and (max-width: 1218px) {
    position: absolute;
    display: flex;
    flex-direction: row;
    transform: translateY(-150px);
    z-index: 1;
  }

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    position: relative;
    transform: translateY(0);
  }
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
  content: url("~@/assets/imgs/arrow-right.svg");
  width: 16px;
  height: 16px;
}

#mainContent {
  position: relative;
}

#mainContent .section1 {
  background: linear-gradient(121.51deg, #172837 13.32%, #3377B3 87.49%);
  padding-top: 340px;

  @media screen and (max-width: 991px) {
    padding-top: 118px;
  }
}

#mainContent .section1 .section-wrapper {
  max-width: 1136px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
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
  margin-top: 90px;

  .image-card__image {
    img {
      @media screen and (max-width: 1199px) {
        width: 500px;
      }
  
      @media screen and (max-width: 991px) {
        width: 400px;
      }

      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }

  .image-card__content {
    margin-top: 50px;
    padding-left: 40px;
    padding-right: 0;

    h5 {
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

    h4 {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 1199px){
      & {
        margin-top: 0;
      }
    }

    @media screen and (max-width: 767px) {
      padding: 0;

      & > div {
        display: flex;
        max-width: 330px;
        margin-top: 40px;

        & > h4 {
          flex: 1;
          margin-left: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
}


.image-card-2 {
  margin-top: 160px;
  margin-bottom: 100px;
  flex-direction: row-reverse;

  & .image-card__content {
    padding-right: 40px;
    padding-left: 0;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 105px;
  }
}

.section1 .normal-btn {
  margin-bottom: 102px;
}

.section2 {
  background-color: $white;
  padding: 56px;

  @media screen and (max-width: 640px) {
    padding: 56px 0;
  }
}

.section2 .section-wrapper {
  max-width: 1108px;
  margin: 0 auto;

  @media screen and (max-width: 640px) {
    margin-bottom: 70px;
  }
}

.our-partner {
  margin-bottom: 56px;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
}

.section3 {
  position: relative;
}

.section3-bg {
  background: $bg-grey;
  opacity: .5;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
}

.line-deco {
  background: url("~@/assets/imgs/line-deco.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 462px;
  position: absolute;
  bottom: 0;
  z-index: -1;
}

.section3 .section-wrapper {
  max-width: 1138px;
  padding-top: 150px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding-top: 70px;
  }
}

.section3 .section-wrapper h4 {
  text-align: left;
  width: 299px;
}

.section3 .section-wrapper .section-content {
  flex: 1;
}

.section3 .lets-chat {
  margin-bottom: 200px;

  @media screen and (max-width: 767px) {
    margin-bottom: 130px;
  }
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
