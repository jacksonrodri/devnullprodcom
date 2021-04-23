<template>
  <MainLayout section="product">
    <div id="product">
      <div class="section">
        <div class="blue-gradient-dark"></div>
        <div class="section-wrapper">
          <h2 class="typography-h2 text-white">some headline about product</h2>
          <div class="section-container d-flex">
            <div class="filter-content">
              <h4 class="typography-h4 mb-3">Blockchain Transaction Tracker</h4>
              <p class="body-1 m-b-38">
                Our transaction tracking suite (patent pending) is the perfect solution to receive email, text message, and webhook alerts on Blockchain activity with no fuss. <br /> <br />
                Simple select one of the many provided categories of transaction patterns to track and specify the parameters that matter to you (accounts, currencies, notification rate, and more). Blockchain Transaction Tracker will take care of the rest!
              </p>
              <b-button class="normal-btn px-5 py-3 m-b-38 text-white learn-more" variant="primary">Learn more</b-button>
              <p class="subtitle-2 mb-3">Who are using it</p>
              <p class="body-2 text-grey-4">
                Institutional cryptocurrency custodians <br />
                Retail / Ecommerce / Small & medium business who need alerts, notifications <br />
                Auditors / forensics specialists / analysts
              </p>
            </div>
            <div class="filter-image">
              <img src="@/assets/imgs/filter.svg" />
            </div>
          </div>
          <div class="section-container section-container-2 d-flex">
            <div class="circle-image">
              <img src="@/assets/imgs/image1.svg" />
            </div>
            <div class="circle-image">
              <img src="@/assets/imgs/image2.png" />
            </div>
          </div>
          <div class="section-container section-container-3 d-flex">
            <div>
              <img src="@/assets/imgs/graph.svg" />
            </div>
            <div class="">
              <h4 class="typography-h4 mb-3">Decentralized Exchange Intelligence</h4>
              <p class="body-1">
                DEX Intelligence suite analyzes several major markets and delivers consistent, reliable stats.<br /><br />
                Whether you are looking for insight into the liquidity present on the XRP ledger or the total trading volume being conducted in any given timeframe on XLM.<br /><br />
                Perhaps you want to correlate completely disparate exchanges to discover arbitrage opportunities?<br /><br />
                Some metrics that we provide:<br />
                <ul>
                  <li><p>Issued Currencies with spreads and volume</p></li>
                  <li><p>Accounts (created, active, deleted)</p></li>
                  <li><p>Transaction rates</p></li>
                  <li><p>Network fees and ledger close times</p></li>
                </ul>
                <br /><br />
                All statistics are available via our web based interface and API.
              </p>
              <p class="caption mb-4 text-grey-3">Additional data sources and metrics are available on demand</p>
              <b-button class="normal-btn px-5 py-3 m-b-38 text-white learn-more" variant="primary">Learn more</b-button>
              <p class="subtitle-2 mb-3">Who are using it</p>
              <p class="body-2 text-grey-4">
                Market makers / traders <br />
                Cryptocurrency analysts / traders
              </p>
            </div>
          </div>
        </div>
        <div class="linear-gradient"></div>
      </div>
      <div class="bg-white industry">
        <div>
          <h4 class="typograph-4 text-dark">Industry insight & knowledge</h4>
          <a class="subtitle-2" href="#">Read Article</a>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout'

export default {
  name: 'Product',
  components: {
    MainLayout,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    }
  },
  methods: {
    onSubmit: function () {

    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";
#product {
  background: $grey-0;
}

#product .section {
  padding-top: 314px;
  padding-bottom: 100px;
}

#product .section-wrapper {
  max-width: 1150px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.blue-gradient-dark {
  background: linear-gradient(121.51deg, #172837 13.32%, #3377B3 87.49%);
  transform: matrix(1, 0.16, 0, -1.1, 0, 0);
  position: absolute;
  width: 100%;
  height: 803.5px;
  left: 0;
  top: -170px;
}

#product .section-wrapper h2 {
  margin-bottom: 190px;
}

.linear-gradient {
  position: absolute;
  width: 100%;
  height: 749.12px;
  left: 0px;
  bottom: 100px;

  background: linear-gradient(63.72deg, #4C96D7 23.81%, #0E5696 93.54%);
  opacity: 0.1;
  transform: matrix(1, 0.16, 0, -1.1, 0, 0);
}

.m-b-38 {
  margin-bottom: 38px;
}

.filter-content {
  margin-top: 120px;
}

.filter-image {
  transform: translateX(50px);
}

.learn-more {
  width: 280px;
}

.section-container-2 {
  margin-bottom: 100px;
  margin-top: 100px;

  justify-content: center;
  
  .circle-image {
    border: 1px solid $primary;
    border-radius: 100%;
    padding: 28px;
  
    &:first-child {
      margin-right: 56px;
    }
  }
}

.section-container-3 {
  transform: translateX(-50px);
}

.industry {
  position: relative;

  & > div {
    max-width: 1150px;
    padding: 72px 32px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
      display: flex;
      align-items: center;

      &:after {
        content: url("~@/assets/imgs/arrow_forward_blue.svg");
        width: 24px;
        height: 24px;
        margin-left: 8px;
      }
    }
  }
}
</style>
