<!-- HTML -->
<template>
  <footer class="back-blue">
    <b-container fluid>
      <b-row>
        <b-col lg>
          <div class="footer-logo">
            <div class="logo-container brand">
              <Logo />
            </div>
            <div class="logo-container slogan">
              <Slogan />
            </div>
          </div>
          <p class="small-text mb-2">{{ Data.header.title }}</p>
          <div class="social">
            <a
              href="https://www.linkedin.com/company/abana-mauritius/"
              target="_blank"
            >
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
            <a
              href="https://www.youtube.com/channel/UC2x4KPES7lVZHF4WsgOGTHA"
              target="_blank"
            >
              <Youtube />
            </a>
          </div>
        </b-col>
        <b-col>
          <b-row class="mb-4 footer-links no-gutters">
            <b-col cols="12" sm class="mb-4 mb-sm-0">
              <div class="footer-title">Product</div>
              <div class="d-flex flex-column text-small">
                <g-link to="/how-it-works">How It Works</g-link>
                <g-link to="/pricing">Pricing</g-link>
                <g-link to="/why-africa">Why Africa</g-link>
              </div>
            </b-col>
            <b-col cols="12" sm class="mb-4 mb-sm-0">
              <div class="footer-title">Company</div>
              <div class="d-flex flex-column text-small">
                <g-link to="/about">About</g-link>
                <g-link to="/contact">Contact</g-link>
                <g-link to="/careers">Jobs</g-link>
                <g-link to="/press">Press</g-link>
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
          <p class="small-text">© 2021 ABANA</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<!-- SCRIPTS -->
<script>
import Data from '~/_settings/landing.json';
import Logo from '~/components/icons/Logo';
import Slogan from '@/components/icons/Slogan';
import Facebook from '~/components/icons/SocialFacebook';
import Linkedin from '~/components/icons/SocialLinkedin';
import Insta from '~/components/icons/SocialInsta';
import Youtube from '~/components/icons/SocialYoutube';

export default {
  components: { Logo, Slogan, Facebook, Linkedin, Insta, Youtube },
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
  display: block;
  width: 400px;
  margin-bottom: 10px;
  @media (min-width: $break-s) {
    width: 400px;
  }

  .logo-container {
    display: block;
    @media (min-width: $break-s) {
      display: inline-block;
    }

    &.brand {
      width: 50%;
      margin-bottom: 5px;
      @media (min-width: $break-s) {
        padding-right: 20px;
        margin-bottom: 0;
      }
    }
    &.slogan {
      width: 50%;
    }
  }

  .logo_brand {
    fill: $white;
  }

  .logo_slogan {
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
  color: $text-light;
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
