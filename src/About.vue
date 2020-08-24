<template>
  <MainLayout section="about">
    <div id="about">
      <div id="title_wrapper">
        <h1>About Us</h1>
      </div>

      <div id="content">
        <p>Dev Null Productions is an engineering firm focused on delivering robust, reliable digital solutions. As experts in many innovative technologies and standards, Dev Null Productions is confident that we will deliver solutions for your needs in any digital domain. We operate both on a consultancy basis and offer premium subscription services to our products.</p>
        <p><a href="mailto:devnullproductions@gmail.com">Contact us</a> for a quote on your project today!</p>
      </div>

      <div id="team_title_wrapper">
        <h1>Our Team</h1>
      </div>

      <div id="team">
        <b-container>
          <b-row :cols="mq_lt_lg ? 1 : 2">
            <b-col>
              <TeamMember name="Mo Morsi"
                          title="CEO"
                          photo="placeholder.png"
                          bio="<p>As a former senior software engineer at RedHat and founder and vice-president of the SIG315 hackerspace, Mo has been on the forefront of the development of emerging technologies throughout his entire career.</p><p>Mo brings his many years of experience developing production solutions and managing teams to Dev Null Productions.</p>" />
            </b-col>

            <b-col>
              <TeamMember name="Lamyae Kerzazi"
                          title="COO"
                          photo="placeholder.png"
                          bio="<p>A Senior Analyst at Bristol Myers Squibb, and holding a Masters Degree in Economics, Lamyae provides the advanced operational and market insights needed to run operations at Dev Null Productions.</p>" />
            </b-col>

            <b-col>
              <TeamMember name="Sarah Hussein"
                          title="CMO"
                          photo="placeholder.png"
                          bio="<p>A former Coordinator at Exelon Energy Corporation, Sarah is responsible for Dev Null Productions’ client outreach and marketing campaigns.</p>" />
            </b-col>

            <b-col>
              <TeamMember name="Jerry Pisagih"
                          title="Lead Developer"
                          photo="placeholder.png"
                          bio="<p>With a multitude of production projects in many different domains under his belt, Jerry is versatile and adept at developing solutions using a plethora of technology stacks. No technical challenge is beyond his capabilities</p>" />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout'
import TeamMember from './components/TeamMember'

export default {
  name: 'About',
  components: {
    MainLayout,
    TeamMember
  }
}
</script>

<style scoped>
#title_wrapper{
  width: 100%;
  min-height: 500px;
  padding-top: 165px;
  background-image: url("./assets/conference-room.jpg");
  background-size: 100% 100%;
}

#main_layout.md #title_wrapper,
#main_layout.sm #title_wrapper,
#main_layout.xs #title_wrapper{
  padding-top: 125px;
  background-image: url("./assets/boardroom.jpg");
}

#title_wrapper h1{
  text-align: center;
  color: black;
  font-family: Lora;
}

#main_layout.md #title_wrapper h1,
#main_layout.sm #title_wrapper h1,
#main_layout.xs #title_wrapper h1{
  color: white;
}

#content{
  height: 100%;
  width: 80%;
  margin: auto;
  padding-top: 50px;
}

#content p{
  font-family: MavenPro;
  text-align: center;
}

#team_title_wrapper h1{
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  font-family: Lora;
}
</style>
