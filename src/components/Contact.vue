<template>
  <div class="contact" id="contactUs">
    <b-container>
      <b-row>
        <b-col md="6" cols="12">
          <div class="contact-content">
            <h4 class="typography-h4 text-dark mb-3">Contact Us</h4>
            <p class="body-1 mb-4">Do you have a Fintech / Blockchain related challenge or project requiring an innovative and reliable solution? Fill out this form to contact Dev Null Productions today!</p>
            <p class="body-1 mb-4">Or email us at <a class="text-primary" href="mailto:devnullproductions@gmail.com">devnullproductions@gmail.com</a></p>
          </div>
        </b-col>

        <b-col md="6" cols="12">
          <div class="contact-form">
            <b-form action="https://formsubmit.co/12f008b8425e2b06061cfd1cb0dc5627" method="POST">
              <b-form-input
                id="input-2"
                class="mb-3 contact-form-input"
                name="name"
                placeholder="Name"
                required />
              
              <b-form-input
                id="input-1"
                class="mb-3 contact-form-input"
                name="email"
                type="email"
                placeholder="Email"
                required />

              <b-form-textarea
                id="textarea"
                class="mb-4 contact-form-textarea"
                name="message"
                placeholder="Message"
                rows="11" />

              <b-button type="submit" variant="primary" class="normal-btn px-5 py-3 text-white w-100">
                Submit
              </b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  methods: {
    onSubmit: function () {
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";
.contact {
  padding-top: 40px;
  
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
</style>
