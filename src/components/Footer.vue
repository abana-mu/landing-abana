<!-- HTML -->
<template>
  <footer class="back-blue container-fluid">
    <b-row>
      <b-col lg order="1" order-lg="0" class="mt-5 mt-lg-0">
        <Logo class="footer-logo" />
        <p class="text-white small-text">{{ Data.header.title }}</p>
        <p class="text-lighter small-text">© 2020 ABANA</p>
      </b-col>
      <b-col class="d-flex flex-row footer-links">
        <b-col>
          <div class="footer-title">Product</div>
          <div class="d-flex flex-column">
            <g-link to="/pricing">Pricing</g-link>
            <g-link to="/why-africa">Why Africa</g-link>
            <g-link to="/sustainability">Sustainability</g-link>
          </div>
        </b-col>
        <b-col
          ><div class="footer-title">Company</div>
          <div class="d-flex flex-column">
            <g-link to="/about">About</g-link>
            <g-link to="/contact">Contact</g-link>
            <g-link to="/careers">Jobs</g-link>
          </div></b-col
        >
        <b-col
          ><div class="footer-title">Resources</div>
          <div class="d-flex flex-column">
            <g-link to="/privacy">Privacy & Terms</g-link>
          </div></b-col
        >
      </b-col>
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
  padding: 35px 0 24px;
  overflow: hidden;
}

.footer-logo {
  max-width: 125px;
  margin-bottom: 1rem;
  fill: $primary;
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