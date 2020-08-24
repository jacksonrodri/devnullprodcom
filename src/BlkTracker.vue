<template>
  <MainLayout section="blktracker">
    <div id="blktracker">
      <div id="title_wrapper">
        <h1>Blockchain Transaction Tracker</h1>

        <img src="./assets/products/blockchaintracker1.png" />
      </div>

      <div id="content">
        <div id="content1">
          <img src="./assets/products/blockchaintracker2.png" />
        </div>

        <div id="content2">
          <p>
            Our patented transaction tracking suite is the perfect solution to receive email, text message, and webhook alerts on Blockchain activity with no fuss.
          </p>

          <p>
            Simple select one of the many provided categories of transaction patterns to track...
          </p>

          <p>
            ..and specify the parameters that matter to you (accounts, currencies, notification rate, and more)...
          </p>

          <p>
          ...our software will take care of the rest!
          </p>
          
          <p>
            As soon as matching activity is detected you will receive an alert.
          </p>

          <p>
            For advanced users our powerful expression system allows you to hone in on exactly the type of activity you want to be notified of.
          </p>
            
          <p>
            Filter transactions by any combination of fields. Use logic and comparative operators to manipulate and constrain data.
          </p>

          <p>
            <a href="https://zerptracker.com">Sign up</a> for an account today!
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout'

export default {
  name: 'BlkTracker',
  components: {
    MainLayout
  }
}
</script>

<style scoped>
#title_wrapper{
  width: 100%;
  min-height: 500px;
  padding-top: 100px;
  background-image: url("./assets/geometric.jpg");
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
  margin-top: 25px;
}
</style>
