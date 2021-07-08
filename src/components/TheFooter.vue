<!-- HTML -->
<template>
  <footer class="back-blue ">
    <div class="contain pt-12 pb-4 overflow-hidden text-bodyOnDark">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div class="flex flex-col">
          <div class="footer-logo text-white block mb-2 ">
            <div class="block sm:inline-block w-1/2 mb-2 sm:pr-5 sm:mb-0">
              <Logo />
            </div>
            <div class="block sm:inline-block w-1/2">
              <Slogan />
            </div>
          </div>
          <p class="text-bodyOnDark mb-4">{{ Data.header.title }}</p>
          <div class="flex flex-row space-x-4">
            <a
              class="outline-none transition transform hover:scale-110 hover:text-white"
              href="https://www.linkedin.com/company/abana-mauritius/"
              target="_blank"
            >
              <Linkedin class="w-5 h-auto" />
            </a>
            <a
              class="outline-none transition transform hover:scale-110 hover:text-white"
              href="https://www.instagram.com/abana.mauritius"
              target="_blank"
            >
              <Insta class="w-5 h-auto" />
            </a>
            <a
              class="outline-none transition transform hover:scale-110 hover:text-white"
              href="https://www.youtube.com/channel/UC2x4KPES7lVZHF4WsgOGTHA"
              target="_blank"
            >
              <Youtube class="w-5 h-auto" />
            </a>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div cols="12" sm class="mb-4 mb-sm-0">
            <div class="text-white font-medium">Product</div>
            <div class="flex flex-col text-base">
              <g-link class="hover:text-white" to="/how-it-works">How It Works</g-link>
              <g-link class="hover:text-white" to="/pricing">Pricing</g-link>
              <g-link class="hover:text-white" to="/why-africa">Why Africa</g-link>
            </div>
          </div>
          <div cols="12" sm class="mb-4 mb-sm-0">
            <div class="text-white font-medium">Company</div>
            <div class="flex flex-col text-base">
              <g-link class="hover:text-white" to="/about">About</g-link>
              <g-link class="hover:text-white" to="/contact">Contact</g-link>
              <g-link class="hover:text-white" to="/careers">Jobs</g-link>
              <g-link class="hover:text-white" to="/press">Press</g-link>
            </div>
          </div>
          <div cols="12" sm class="mb-4 mb-sm-0">
            <div class="text-white font-medium">Resources</div>
            <div class="flex flex-col text-base">
              <g-link class="text-bodyOnDark hover:text-white" to="/privacy">Privacy Policy</g-link>
              <g-link class="text-bodyOnDark hover:text-white" to="/terms-conditions/">Terms & Conditions</g-link>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-10 mb-3">
        <p class="text-bodyOnDark">© 2021 ABANA</p>
      </div>
    </div>
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
.footer-logo {
  width: 400px;

  .logo_slogan {
    .slogan-text {
      fill: $text-light;
    }
    .slogan-bar {
      fill: white;
    }
  }
}
</style>
