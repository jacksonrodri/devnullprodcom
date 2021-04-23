<template>
  <MainLayout section="about">
    <div id="about">
      <div class="section">
        <div class="section-wrapper">
          <h2 class="typography-h2 mb-5">Our Story</h2>
          <p class="body-1 text-center our-story-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit euismod vel enim enim, vel adipiscing consectetur erat auctor. Habitant pellentesque dictum viverra lectus pharetra volutpat sodales phasellus. Semper ullamcorper viverra tempus, et. At ac sed scelerisque massa. Quisque sit ultrices ornare quis tortor in arcu. Tortor, ac a turpis phasellus. Feugiat dolor sed volutpat nullam eget sapien in lobortis. Interdum nisl ullamcorper integer sollicitudin. Tincidunt in eros porttitor ut volutpat, risus, mi.</p>
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
          <div class="contact">
            <b-container>
              <b-row>
                <b-col md="6" cols="12">
                  <div class="contact-content">
                    <h4 class="typography-h4 text-dark mb-3">Contact Us</h4>
                    <p class="body-1 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit euismod vel enim enim, vel adipiscing consectetur erat auctor.</p>
                    <p class="body-1 mb-4">or email us at <a class="text-primary" href="mailto:devnullproductions@email.com">devnullproductions@email.com</a></p>
                  </div>
                </b-col>
                <b-col md="6" cols="12">
                  <div class="contact-form">
                    <b-form @submit="onSubmit">
                      <b-form-input
                        id="input-2"
                        class="mb-3 contact-form-input"
                        v-model="form.name"
                        placeholder="Name"
                        required
                      ></b-form-input>
                      <b-form-input
                        id="input-1"
                        class="mb-3 contact-form-input"
                        v-model="form.email"
                        type="email"
                        placeholder="Email"
                        required
                      ></b-form-input>
                      <b-form-textarea
                        id="textarea"
                        class="mb-4 contact-form-textarea"
                        v-model="form.message"
                        placeholder="Message"
                        rows="11"
                      ></b-form-textarea>
                      <b-button type="submit" variant="primary" class="normal-btn px-5 py-3 text-white w-100">Submit</b-button>
                    </b-form>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
        <div class="linear-gradient"></div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout'

export default {
  name: 'About',
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
#about {
  background: $grey-0;
}

#about .section {
  padding-top: 155px;
  padding-bottom: 160px;
}

#about .section-wrapper {
  max-width: 914px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}

.our-team {
  margin-bottom: 200px;  
}

.our-story-content {
  margin-bottom: 100px;
  padding: 0 15px;
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

.contact {
  &-form {
    &-input {
      height: 72px;
      border: 1px solid $grey-1;
      background: $white;
    }

    &-textarea {
      min-height: 296px;
      border: 1px solid $grey-1;
      background: $white;
    }
  }
  position: relative;
  z-index: 1;
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
