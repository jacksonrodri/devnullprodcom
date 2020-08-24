<template>
  <MainLayout section="landing">
    <div id="landing">
      <div id="title_wrapper">
        <h1>Engineering Solutions for The Digital Age</h1>
      </div>

      <div id="content">
        <p>Dev Null Productions was founded in 2018 with one goal in mind:</p>
        <p><i>Developing reliable, high quality solutions for challenges present in the Digital Age.</i></p>
        <p>Dev Null Productions has a solid track record of rapidly delivering production ready technologies in many domains.</p>
        <p>Why take a risk with an unknown firm or a low-budget solution for your mission critical application?</p>
        <p>Schedule a <a href="mailto:devnullproductions@gmail.com">consultation</a> today!</p>
      </div>
    </div>

    <div id="partners_wrapper">
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
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout'

export default {
  name: 'Landing',
  components: {
    MainLayout
  }
}
</script>

<style scoped>
#landing{
  width: 100%;
}

#title_wrapper{
  width: 100%;
  min-height: 500px;
  padding-top: 150px;
  background-image: url("./assets/blue-bg.png");
  background-size: 100% 100%;
}

#title_wrapper h1{
  text-align: center;
  color: white;
  font-family: Lora;
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
