<!-- HTML -->
<template>
  <footer class="bg-secondary-400" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
        <div class="mt-8 lg:mt-12 xl:mt-0 mb-16">
          <div class="footer-logo text-white block mb-4">
            <div class="block sm:inline-block w-full mb-2 sm:pr-5 sm:mb-0">
              <Logo class="mb-2 " />
              <Slogan class="dark" />
            </div>
          </div>
          <div class="flex flex-row space-x-4 text-bodyOnDark">
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

        <div class="grid grid-cols-2 gap-8 xl:col-span-4">
          <div class="md:grid md:grid-cols-2 md:gap-8 xl:justify-items-end">
            <div>
              <h3 class="text-sm font-semibold text-titleOnDark tracking-wider uppercase">
                Solutions
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <g-link to="/apparel-sourcing-solutions/" class="text-base text-bodyOnDark hover:text-white">
                    Apparel Sourcing
                  </g-link>
                </li>

                <li>
                  <g-link to="/digital-platform/" class="text-base text-bodyOnDark hover:text-white">
                    Digital platform
                  </g-link>
                </li>

                <li>
                  <g-link to="/drops/" class="text-base text-bodyOnDark hover:text-white">
                    Drops
                  </g-link>
                </li>
                <li>
                  <g-link to="/fast-custom/" class="text-base text-bodyOnDark hover:text-white">
                    Fast Custom
                  </g-link>
                </li>

                <li>
                  <g-link to="/apparel-manufacturers/" href="#" class="text-base text-bodyOnDark hover:text-white">
                    For Manufacturers
                  </g-link>
                </li>
                <li>
                  <g-link to="/yarn-fabric-trim-suppliers/" class="text-base text-bodyOnDark hover:text-white">
                    For Suppliers
                  </g-link>
                </li>
                <li>
                  <g-link to="/service-providers/" class="text-base text-bodyOnDark hover:text-white">
                    For Service Providers
                  </g-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-titleOnDark tracking-wider uppercase">
                Support
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <g-link to="/pricing/" class="text-base text-bodyOnDark hover:text-white">
                    Pricing
                  </g-link>
                </li>
                <li>
                  <g-link to="/country-reps/" class="text-base text-bodyOnDark hover:text-white">
                    Country Reps
                  </g-link>
                </li>

                <li>
                  <g-link to="/why-africa/" class="text-base text-bodyOnDark hover:text-white">
                    Why Africa
                  </g-link>
                </li>

                <li>
                  <g-link to="/sustainability/" class="text-base text-bodyOnDark hover:text-white">
                    Sustainability
                  </g-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8 xl:justify-items-end">
            <div>
              <h3 class="text-sm font-semibold text-titleOnDark tracking-wider uppercase">
                Company
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <g-link to="/about/" class="text-base text-bodyOnDark hover:text-white">
                    About
                  </g-link>
                </li>

                <li>
                  <g-link to="/contact/" class="text-base text-bodyOnDark hover:text-white">
                    Contact
                  </g-link>
                </li>

                <li>
                  <g-link to="/careers/" class="text-base text-bodyOnDark hover:text-white">
                    Jobs
                  </g-link>
                </li>

                <li>
                  <g-link to="/press/" class="text-base text-bodyOnDark hover:text-white">
                    Press
                  </g-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-titleOnDark tracking-wider uppercase">
                Legal
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <g-link to="/privacy/" class="text-base text-bodyOnDark hover:text-white">
                    Privacy
                  </g-link>
                </li>

                <li>
                  <g-link to="/terms-conditions/" class="text-base text-bodyOnDark hover:text-white">
                    Terms
                  </g-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-500 pt-8 space-y-4 lg:flex lg:items-center lg:justify-between xl:mt-0">
        <div>
          <h3 class="text-sm font-semibold text-titleOnDark tracking-wider uppercase mb-1">
            Book a Demo
          </h3>
          <p class="text-base text-bodyOnDark">
            Pick a date and our sales team will get in touch with you for details.
          </p>
        </div>
        <a href="https://meetings.hubspot.com/abana" target="_blank" class="btn btn-primary inline-flex justify-center items-center">
          <svg class="h-5 w-5 mr-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
            />
          </svg>
          Book a Demo
        </a>
      </div>
      <div class="mt-8 border-t border-gray-500 pt-8 md:flex md:items-center md:justify-between">
        <p class="mt-8 text-base text-center text-bodyOnDark md:mt-0">
          &copy; 2021 ABANA, All rights reserved.
        </p>
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

<style lang="scss">
.footer-logo {
  max-width: 250px;
}
</style>
