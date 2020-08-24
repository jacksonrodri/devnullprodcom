<template>
  <MainLayout section="dexintel">
    <div id="dexintel">
      <div id="title_wrapper">
        <h1>Decentralized Exchange Intelligence</h1>

        <img src="./assets/products/dex1.png" />
      </div>

      <div id="content">
        <div id="content1">
          <img src="./assets/products/dex2.png" />
        </div>

        <div id="content2">
          <p>
            Our DEX Intelligence suite analyzes several major markets and delivers consistent, reliable stats.
          </p>
            
          <p>Are you looking for insight into the liquidity present on the <a href="https://xrpintel.com">XRP ledger</a>...</p>
          
          <p>...or the total trading volume being conducted in any given timeframe on XLM...</p>
          
          <p>...or perhaps you want to correlate completely disparate exchanges to discover arbitrage opportunities?</p>
          
          <p>Some metrics that we provide:</p>

          <ul>
          <li>Issued Currencies with spreads and volume</li>
          <li>Accounts (created, active, deleted)</li>
          <li>Transaction rates</li>
          <li>Network fees and ledger close times</li>
          <li>Much more</li>
          </ul>

          <p>All statistics are available via our web based interface and API.</p>
          
          <p>Additional data sources and metrics are available on demand</p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout'

export default {
  name: 'DexIntel',
  components: {
    MainLayout
  }
}
</script>

<style scoped>
#title_wrapper{
  width: 100%;
  min-height: 500px;
  padding-top: 150px;
  background-image: url("./assets/stock-exchange.jpg");
  background-size: 100% 100%;
}

#title_wrapper h1{
  text-align: center;
  color: white;
  font-family: Lora;
}

#title_wrapper img{
  padding: 25px;
  display: block;
  max-width: 750px;
  margin: auto;
}

#main_layout.md #title_wrapper img,
#main_layout.sm #title_wrapper img,
#main_layout.xs #title_wrapper img{
  max-width: 100%;
}

#content{
  padding: 25px 0;
  display: flex;
  width: 90%;
  margin: auto;
  font-family: MavenPro;
}

#main_layout.md #content,
#main_layout.sm #content,
#main_layout.xs #content{
  flex-direction: column-reverse;
}

#content1 {
  flex-basis: 45%;
  margin-right: 25px;
  display: flex;
  align-items: center;
}

#content1 img{
  width: 100%;
}

#content2{
  margin-top: 15px;
}
</style>
