<!-- HTML -->
<template>
  <footer class="back-blue container-fluid">
    <b-row>
      <b-col lg>
        <Logo class="footer-logo" />
        <p class="small-text">{{ Data.header.title }}</p>
      </b-col>
      <b-col class="mt-3 mb-4 my-md-0 d-flex flex-row footer-links no-gutters">
        <b-col>
          <div class="footer-title">Product</div>
          <div class="d-flex flex-column text-small">
            <g-link to="/pricing">Pricing</g-link>
            <g-link to="/why-africa">Why Africa</g-link>
            <g-link to="/sustainability">Sustainability</g-link>
          </div>
        </b-col>
        <b-col
          ><div class="footer-title">Company</div>
          <div class="d-flex flex-column text-small">
            <g-link to="/about">About</g-link>
            <g-link to="/contact">Contact</g-link>
            <g-link to="/careers">Jobs</g-link>
          </div></b-col
        >
        <b-col
          ><div class="footer-title">Resources</div>
          <div class="d-flex flex-column text-small">
            <g-link to="/privacy">Privacy & Terms</g-link>
          </div></b-col
        >
      </b-col>
      <b-col cols="12" class="text-center mt-5"
        ><p class="text-lighter small-text">© 2020 ABANA</p></b-col
      >
    </b-row>
  </footer>
</template>

<!-- SCRIPTS -->
<script>
import Data from "~/_settings/landing.json";
import Logo from "~/components/compIcons/Logo";

export default {
  components: { Logo },
  data() {
    return {
      Data,
    };
  },
};
</script>

<!-- QUERIES -->
<page-query>
</page-query>

<!-- STYLING -->
<style lang='scss'>
footer {
  padding: 3rem 0 1rem 0;
  overflow: hidden;
  p {
    color: $text-light;
  }
}

.footer-logo {
  max-width: 125px;
  margin-bottom: 1rem;
  fill: $white;
}

.small-text {
  font-size: 1rem;
}

.footer-title {
  color: white;
  font-weight: 600;
}

.footer-links a {
  color: $text-light;
  &:hover {
    color: white;
    text-decoration: none;
  }
}
</style>