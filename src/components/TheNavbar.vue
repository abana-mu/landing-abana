<!-- HTML -->
<template>
  <div>
    <div id="announce" :class="{ hidden: !Data.active }" class="h-auto bg-secondary-400 z-50 relative flex w-full top-0 justify-center items-center text-center">
      <a :href="link" target="_blank" class="text-white text-sm py-0.5 sm:text-base sm:py-2">
        {{ Data.text }}
      </a>
    </div>
    <div class="relative bg-white">
      <div class="contain flex justify-between bg-white items-center md:justify-start md:space-x-10 z-10" v-bind:class="[{ navShadow: scrollPosition > 40 }]">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <g-link class="nav-logo w-32 h-auto block relative pb-4 sm:pb-5 sm:w-40 lg:w-36" to="/">
            <Logo class="text-primary-300 z-20" />
            <Slogan class="z-10 opacity-100 h-auto absolute w-full bottom-0 left-0" />
          </g-link>
        </div>
        <div class="-mr-2 -my-2 hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="flex space-x-10">
          <div
            v-for="(link, index) in Nav"
            class="nav-link py-5 px-4 group cursor-pointer hover:shadow-nav "
            :key="index"
            @mouseover="activetab = index"
            @mouseleave="activetab = ''"
            v-bind:class="[activetab === index ? 'active' : '']"
          >
            <div v-if="link.drop">
              <div class="inline-flex items-center text-base font-medium text-gray-500 group-hover:text-gray-900">
                <span>{{ link.name }}</span>
                <svg
                  v-if="link.drop"
                  class=" text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 transform transition group-hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              <div v-if="activetab === index" class="bg-white absolute top-full z-10 -ml-4 -mt-2 py-2 border-b shadow-md transform w-screen lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="max-w-2xl mx-auto relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  <div class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" v-for="(drop, index) in link.drop.links" :key="index">
                    <span>{{ drop.title }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="inline-flex items-center text-base font-medium text-gray-500 group-hover:text-gray-900">
              <g-link :to="link.link">{{ link.name }}</g-link>
            </div>
          </div>
        </nav>
        <nav class="flex space-x-10 hidden">
          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Solutions</span>
              <!--Heroicon name: solid/chevron-down
                Item active: "text-gray-600", Item inactive: "text-gray-400"-->
              <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            <!--
                'Solutions' flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                  From: "opacity-0 translate-y-1"
                  To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100 translate-y-0"
                  To: "opacity-0 translate-y-1"
              -->
            <div class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/chart-bar -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Analytics
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Get a better understanding of where your traffic is coming from.
                      </p>
                    </div>
                  </a>

                  <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/cursor-click -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Engagement
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Speak directly to your customers in a more meaningful way.
                      </p>
                    </div>
                  </a>

                  <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/shield-check -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Security
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Your customers&#039; data will be safe and secure.
                      </p>
                    </div>
                  </a>

                  <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/view-grid -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Integrations
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Connect with third-party tools that you&#039;re already using.
                      </p>
                    </div>
                  </a>

                  <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/refresh -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Automations
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Build strategic funnels that will drive your customers to convert
                      </p>
                    </div>
                  </a>

                  <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/document-report -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Reports
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Get detailed reports that will help you make more informed decisions
                      </p>
                    </div>
                  </a>
                </div>
                <div class="p-5 bg-gray-50 sm:p-8">
                  <a href="#" class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                    <div class="flex items-center">
                      <div class="text-base font-medium text-gray-900">
                        Enterprise
                      </div>
                      <span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                        New
                      </span>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">
                      Empower your entire team with even more advanced tools.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Docs
          </a>

          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>More</span>
              <!--
            Heroicon name: solid/chevron-down

            Item active: "text-gray-600", Item inactive: "text-gray-400"
          -->
              <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            <!--
          'More' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        -->
            <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <a href="#" class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                    <p class="text-base font-medium text-gray-900">
                      Help Center
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Get all of your questions answered in our forums or contact support.
                    </p>
                  </a>

                  <a href="#" class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                    <p class="text-base font-medium text-gray-900">
                      Guides
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Learn how to maximize our platform to get the most out of it.
                    </p>
                  </a>

                  <a href="#" class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                    <p class="text-base font-medium text-gray-900">
                      Events
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      See what meet-ups and other events we might be planning near you.
                    </p>
                  </a>

                  <a href="#" class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                    <p class="text-base font-medium text-gray-900">
                      Security
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Understand how we take your privacy seriously.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Log in
          </a>
          <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center btn btn-primary">
            Register
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import Data from '~/_settings/announce.json';

import Logo from '@/components/icons/Logo';
import Slogan from '@/components/icons/Slogan';
import NavbarHamburger from '@/components/NavbarHamburger';

import IMarket from '@/components/icons/IMarket';
import ICarbon from '@/components/icons/ICarbon';
import IEcomm from '@/components/icons/IEcomm';
import ISupply from '@/components/icons/ISupply';
import ISource from '@/components/icons/ISource';
import IProduct from '@/components/icons/IProduct';
import IGM from '@/components/icons/IGM';
import IIS from '@/components/icons/IIS';
import ISP from '@/components/icons/ISP';
import IAbout from '@/components/icons/IAbout';
import IPrivacy from '@/components/icons/IPrivacy';
import INews from '@/components/icons/INews';
import ITerms from '@/components/icons/ITerms';
import IContact from '@/components/icons/IContact';
import ICareer from '@/components/icons/ICareer';
import IPartnership from '@/components/icons/IPartnership';
import ISustainability from '@/components/icons/ISustainability';
import IFreelancers from '@/components/icons/IFreelancers';
import ICountryRep from '@/components/icons/ICountryRep';
import ITestimonial from '@/components/icons/ITestimonial';
import IHow from '@/components/icons/IHow';
import IVideo from '@/components/icons/IVideo';

export default {
  components: {
    IVideo,
    ICarbon,
    ICountryRep,
    Logo,
    Slogan,
    NavbarHamburger,
    IFreelancers,
    IMarket,
    IEcomm,
    ISupply,
    IProduct,
    INews,
    ISource,
    IGM,
    IIS,
    ISP,
    IHow,
    IAbout,
    IPrivacy,
    ITerms,
    ITestimonial,
    IContact,
    ICareer,
    IPartnership,
    ISustainability,
  },
  data() {
    return {
      scrollPosition: null,
      announce: true,
      Data,
      activetab: '',
      link: 'https://' + Data.link,
      Nav: {
        buyer: {
          name: 'Buyers',
          drop: {
            type: 1,
            links: [
              {
                title: 'Apparel Sourcing Solutions',
                link: '/',
              },
              {
                title: 'Digital Platform',
                link: '/',
              },
              {
                title: 'E-commerce Solutions',
                link: '/',
              },
            ],
          },
        },
        seller: {
          name: 'Sellers',
          drop: {
            type: 1,
            links: [
              {
                title: 'Apparel Manufacturers',
                link: '/',
              },
              {
                title: 'Yarn, Fabric, Trim suppliers',
                link: '/',
              },
              {
                title: 'Service Providers',
                link: '/',
              },
            ],
          },
        },
        carbonOffset: {
          name: 'Carbon Offset',
          link: '/page',
        },
        company: {
          name: 'Company',
          drop: {
            type: 2,
            links: [
              {
                title: 'Apparel Sourcing Solutions',
                link: '/',
              },
              {
                title: 'Digital Platform',
                link: '/',
              },
              {
                title: 'E-commerce Solutions',
                link: '/',
              },
            ],
          },
        },
      },
      market: {
        title: 'Matching Marketplace',
        subtitle: 'Illuminating sourcing opportunities',
      },
      fastc: {
        title: 'Fast Custom (coming soon)',
        subtitle: 'Order directly from factories in low MOQs & short lead-times',
      },
      supply: {
        title: 'Supply Chain Solutions',
        subtitle: 'Tailored services to help you grow in the region',
      },
      carbon: {
        title: 'Carbon Offset Solution (coming soon)',
        subtitle: 'Offset the carbon emissions of your airfreight with our unique solution. Take a sneak peek here.',
      },
      drops: {
        title: 'Drops',
        subtitle: 'Sophisticated products in low MOQs for immediate or quick deliveries',
      },
      cta: {
        main: 'Register',
        sub: 'Log In',
      },
      hoverPro: false,
      hoverCom: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    launch() {
      window.fcWidget.open();
      window.fcWidget.show();
    },
    launchMobile() {
      window.fcWidget.open();
      window.fcWidget.show();
      this.$refs.hamburger.activate();
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
.navShadow {
  box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;

  .nav-link {
    padding-top: 0.75rem 0 !important;
    transition: all 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .dropdown-container {
    margin-top: 12px;
    transition: all 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-logo {
    padding-bottom: 0px;
    transition: all 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    .logo_slogan {
      opacity: 0;
      transition: all 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}

// MAIN ELLEMENTS

// .navbar {
//   z-index: 1036 !important;
// }

// .navShadow {
//   -webkit-box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
//   box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
//   background-color: white;
//   -webkit-transition: all 0.3s;

//   transition: all 0.3s;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   position: fixed;
//   width: 100%;
//   top: 0;
//   .nav-item.nav-only {
//     padding-top: 0.75rem;
//     padding-bottom: 0.75rem;
//     -webkit-transition: all 0.25s;
//     transition: all 0.25s;
//   }
//   .dropdown-container {
//     margin-top: 12px;
//   }

//   .nav-logo {
//     transition: all 0.25s ease-out;
//     padding-bottom: 0px;

//     .logo_slogan {
//       transition: opacity 0.25s ease-out;
//       opacity: 0;
//     }
//   }
// }

// .top-row {
//   flex-wrap: nowrap;
// }

// .nav-logo {
//   width: 8rem;
//   height: auto;
//   display: block;
//   position: relative;
//   padding-bottom: 15px;

//   @media (min-width: 400px) {
//     padding-bottom: 16px;
//     width: 8.75rem;
//   }

//   @media (min-width: $break-s) {
//     padding-bottom: 20px;
//     width: 10rem;
//   }

//   @media (min-width: $break-l) and (max-width: $break-xl) {
//     width: 9rem;
//   }

//   .logo_brand {
//     fill: $primary;
//     z-index: 2;
//   }

//   .logo_slogan {
//     z-index: 1;

//     opacity: 1;
//     height: auto;

//     position: absolute;
//     width: 100%;
//     bottom: 0;
//     left: 0;

//     .slogan-text {
//       fill: $text-body;
//     }
//     .slogan-bar {
//       fill: $primary;
//     }
//   }
// }

// .nav-item.nav-only {
//   cursor: pointer;
//   padding: 1.2rem;

//   @media (min-width: $break-l) and (max-width: $break-xl) {
//     padding: 1.2rem 0.7rem;
//   }

//   box-shadow: inset 0px 0px $primary;

//   &:hover {
//     box-shadow: inset 0px 3px $primary;
//     transition: 0.3s;
//   }
// }

// .log-in {
//   font-size: 0.9rem;
//   color: $title-dark;
//   &:hover {
//     color: $info;
//   }

//   padding-right: 1.5rem;

//   @media (min-width: $break-l) {
//     padding: 1rem;
//     font-size: 1rem;
//   }
// }

// //DROPDOWN

// .dropdown-container {
//   display: flex;
//   opacity: 0;

//   pointer-events: none;
//   -webkit-transform: translateY(-0.8em);
//   transform: translateY(-0.8em);
//   -webkit-transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 10ms;
//   transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 10ms;

//   background-color: white;
//   flex-direction: row;
//   padding: 0;
//   position: fixed;
//   margin-top: 20px;
//   justify-content: flex-end;
//   left: 0;
//   width: 100%;
//   box-shadow: 0 1px 1px rgba(47, 57, 78, 0.08), 0 4px 4px rgba(47, 57, 78, 0.08);
// }

// .dropActive {
//   opacity: 1;
//   pointer-events: all !important;
//   -webkit-transform: translateY(0);
//   transform: translateY(0);
//   -webkit-transition-delay: 0s, 0s, 0.3s;
//   transition-delay: 0s, 0s, 0.3s;
// }

// .left-link-container {
//   width: 425px;
// }

// .dropdown-header {
//   letter-spacing: 1px;
//   font-size: 0.75rem !important;
//   text-transform: uppercase;
//   padding: 0;
//   color: $subtitle-dark;
// }

// .left-panel {
//   padding: 1rem 2rem 3rem 0 !important;
//   display: flex;
//   justify-content: flex-end;
// }

// .grey-panel {
//   background-color: $grey-light;
//   padding: 1rem 7rem 3rem 2rem !important;
//   border-left: 1px solid rgba(0, 0, 0, 0.125);
// }

// .right-panel {
//   padding: 1rem 7rem 3rem 2rem !important;
//   display: flex;
// }

// .dropdown-link {
//   padding: 1rem 0;
// }

// .drop-image {
//   width: 3rem;
//   height: 3rem;
//   display: block;
// }

// .dropdown-item:hover {
//   .drop-title,
//   .drop-subtitle,
//   .drop-text {
//     color: $light-red;
//   }
//   .drop-image,
//   .drop-image-sm {
//     .cls-1 {
//       fill: $lightest-red;
//     }
//     .cls-2 {
//       fill: $primary;
//     }
//     .cls-3 {
//       fill: $light-red;
//     }
//   }
// }

// .dropdown-item:active,
// .dropdown-item.active {
//   .drop-image,
//   .drop-image-sm {
//     .cls-1 {
//       fill: $lightest-red;
//     }
//     .cls-2 {
//       fill: $primary;
//     }
//     .cls-3 {
//       fill: $light-red;
//     }
//   }
// }

// .drop-image-sm {
//   width: 1.5rem;
//   height: 1.5rem;
//   display: block;
// }

// .drop-text {
//   padding-left: 1rem;
//   font-size: $f16;
// }

// .drop-title {
//   color: #0d1537;
//   font-weight: 500;
//   margin: 0;
//   letter-spacing: 0.75px;
// }

// .drop-title-singular {
//   padding: 0.5rem 0 !important;
// }

// .drop-subtitle {
//   font-size: 0.9rem;
//   color: $subtitle-dark;
//   margin: 0;
//   font-weight: 300;
//   white-space: normal;
//   letter-spacing: 0.5px;
// }

// .feature-list {
//   list-style: none;
//   padding: 0;
//   margin-top: 1rem;
//   li {
//     font-weight: 300;
//     margin-bottom: 16px;
//     font-size: 0.875rem;
//     letter-spacing: 1px;
//   }
// }

// .feature-title {
//   display: block;
//   color: $title-dark;
//   font-weight: 500;
//   text-transform: uppercase;
// }

// .feature-details {
//   color: $subtitle-dark;
// }

// //SIDEBAR

// #sidebar-level-1 {
//   top: 56px;
//   height: calc(100vh - 56px);
//   overflow: scroll;
// }
// #sidebar-level-1,
// #sidebar-level-2-0,
// #sidebar-level-2-1,
// #sidebar-level-2-2 {
//   width: 100%;
// }

// .sidebar-container {
//   padding: 2rem 0;
// }

// .sidebar-container-1 {
//   padding: 0 2rem;
// }

// .sidebar-container-2 {
//   padding: 2rem;
// }

// .sidebar-item-level-1 {
//   outline: none;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   padding: 0.5rem 0rem;
//   color: $title-dark;
//   font-size: 1.25rem;

//   &:hover {
//     color: $primary;
//     text-decoration: none;
//     font-weight: 600;
//   }

//   &.active {
//     color: $primary;
//     text-decoration: none;
//     font-weight: 600;
//   }
// }

// .sidebar-buttons {
//   margin: auto;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
//   @media (min-width: $break-s) {
//     width: 50%;
//   }
//   @media (min-width: $break-collapse) {
//     display: flex;
//     flex-direction: row;
//   }
// }

// .sidebar-item-level-2-title {
//   display: block;
//   width: 100%;
//   padding: 0.5rem 0;
//   margin-bottom: 1rem;
//   color: $title-dark;
//   font-size: 1.25rem;
//   cursor: pointer;
//   &:hover {
//     color: $primary;
//     text-decoration: none;
//     font-weight: 600;
//   }
// }

// .sidebar-item-level-2-subtitle {
//   list-style: none;
// }

// .sidebar-item-level-2 {
//   display: block;
//   width: 100%;
//   padding: 0.5rem 0;
//   color: $title-dark;
//   &:hover {
//     text-decoration: none;
//   }
//   .feature-list {
//     padding: 1rem 4rem;
//     box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.1);
//   }
// }

// .sidebar-item-level-2:hover,
// .sidebar-item-level-2:active,
// .sidebar-item-level-1.active,
// .sidebar-item-level-2.active {
//   outline: none;
//   .drop-title,
//   .drop-subtitle,
//   .drop-text {
//     color: $light-red;
//   }
//   .drop-image,
//   .drop-image-sm {
//     .cls-1 {
//       fill: $lightest-red;
//     }
//     .cls-2 {
//       fill: $primary;
//     }
//     .cls-3 {
//       fill: $light-red;
//     }
//   }
// }

// #announce {
//   height: auto;
//   background-color: $secondary;
//   z-index: 1050;
//   position: relative;
//   display: flex;
//   width: 100%;
//   top: 0;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   a {
//     color: white;
//     font-size: $f14;
//     padding: 2px 0;
//     @media (min-width: $break-s) {
//       font-size: $f16;
//       padding: 6px 0;
//     }
//   }
// }

// .hidden {
//   display: none !important;
// }
</style>
