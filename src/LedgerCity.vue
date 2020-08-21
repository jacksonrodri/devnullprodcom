<template>
  <MainLayout section="ledgercity">
    <div id="ledgercity">
      <div id="title_wrapper">
        <h1>Ledger City</h1>

        <img src="./assets/products/ledgercity1.jpg" />
      </div>

      <div id="content">
        <div id="content1">
          <img src="./assets/products/ledgercity2.jpg" />
        </div>

        <div id="content2">
          <p>
            Cryptocurrencies, securitized tokens, smart contracts, and more. These are all still out of the domain of the average layman...
          </p>

          <p>
            To bring these to the “real world” we’ve built <a href="https://ledgercitygame.com">Ledger City</a>.
          </p>

          <p>
            Ledger City is a 3D representation of many top-tier digital networks implemented as a full-fledged virtual city.
          </p>
          
          <p>
            Now digital asset investors, users, and everyone else can see what they are actually purchasing, in real concrete terms.
          </p>
          
          <p>
            Individual wallets and accounts are represented as buildings in ledger city whose size and height is set from the corresponding balance.
          </p>

          <p>
            Collectable gameplay mechanics allow account owners to customize their digital assets to match their personalities in unique and fun ways!
          </p>

          <p>
            Start a new life in <b>Ledger City</b> today!
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout'

export default {
  name: 'LedgerCity',
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
  padding-bottom: 75px;
  background-image: url("./assets/city.jpg");
  background-size: 100% 100%;
}

#title_wrapper h1{
  text-align: center;
  font-family: Lora;
}

#title_wrapper img{
  padding: 25px;
  display: block;
  max-width: 750px;
  margin: auto;
  border-radius: 30px;
}

#content{
  padding: 25px 0;
  display: flex;
  width: 90%;
  margin: auto;
  font-family: MavenPro;
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
