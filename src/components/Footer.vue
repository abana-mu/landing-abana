<!-- HTML -->
<template>
  <footer class="back-blue">
    <b-container fluid>
      <b-row>
        <b-col lg>
          <div class="footer-logo">
            <Logo />
            <Slogan />
          </div>
          <p class="small-text mb-2">{{ Data.header.title }}</p>
          <div class="social">
            <a href="https://www.linkedin.com/company/abana-mauritius/" target="_blank">
              <Linkedin />
            </a>
            <!--
            <a href="https://www.facebook.com" target="_blank">
              <Facebook />
            </a>
            -->
            <a href="https://www.instagram.com/abana.mauritius" target="_blank">
              <Insta />
            </a>
          </div>
        </b-col>
        <b-col>
          <b-row class="mb-4 footer-links no-gutters">
            <b-col cols="12" sm class="mb-4 mb-sm-0">
              <div class="footer-title">Product</div>
              <div class="d-flex flex-column text-small">
                <g-link to="/pricing">Pricing</g-link>
                <g-link to="/why-africa">Why Africa</g-link>
                <g-link to="/sustainability">Sustainability</g-link>
              </div>
            </b-col>
            <b-col cols="12" sm class="mb-4 mb-sm-0">
              <div class="footer-title">Company</div>
              <div class="d-flex flex-column text-small">
                <g-link to="/about">About</g-link>
                <g-link to="/contact">Contact</g-link>
                <g-link to="/careers">Jobs</g-link>
              </div>
            </b-col>
            <b-col cols="12" sm class="mb-4 mb-sm-0">
              <div class="footer-title">Resources</div>
              <div class="d-flex flex-column text-small">
                <g-link to="/privacy">Privacy Policy</g-link>
                <g-link to="/terms-conditions/">Terms & Conditions</g-link>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="text-center mt-5">
          <p class="text-lighter small-text">© 2020 ABANA</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<!-- SCRIPTS -->
<script>
import Data from "~/_settings/landing.json";
import Logo from "~/components/compIcons/Logo";
import Slogan from "@/components/compIcons/Slogan";
import Facebook from "~/components/compIcons/SocialFacebook";
import Linkedin from "~/components/compIcons/SocialLinkedin";
import Insta from "~/components/compIcons/SocialInsta";

export default {
  components: { Logo, Slogan, Facebook, Linkedin, Insta },
  data() {
    return {
      Data
    };
  }
};
</script>

<!-- QUERIES -->
<page-query>
</page-query>

<!-- STYLING -->
<style lang="scss">
footer {
  padding: 3rem 0rem 1rem 0rem;
  overflow: hidden;
  p {
    color: $text-light;
  }
}

.footer-logo {
  fill: $white;
  display: flex;
  flex-direction: column;

  @media (min-width: $break-s) {
    flex-direction: row;
  }

  .logo_brand {
    fill: $white;
    max-width: 190px;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .logo_slogan {
    max-width: 175px;
    margin-bottom: 10px;

    .slogan-text {
      fill: $text-light;
    }
    .slogan-bar {
      fill: white;
    }
  }
}

.small-text {
  font-size: 1rem;
}

.footer-title {
  color: white;
  font-weight: 600;
}

.footer-links {
  margin-top: 2rem;
  @media (min-width: $break-collapse) {
    margin-top: 0;
  }
}

.footer-links a {
  color: $text-light;
  &:hover {
    color: white;
    text-decoration: none;
  }
}

.social {
  svg {
    width: 20px;
    height: auto;
    fill: $text-light;
    margin-right: 1rem;
  }

  a {
    outline: none;
    &:hover {
      svg {
        transition: ease-out 0.2s;
        transform: scale(1.1);
        fill: #fff;
      }
    }
  }
}
</style>
