<!-- HTML -->
<template>
  <div id="nav-bar" :class="{ announce: announce }" class="top-0">
    <div id="announce" :class="{ hidden: !announce }" class="absolute bg-primary z-20 relative flex w-full top-0 justify-center items-center text-center h-12 sm:h-10">
      <a :href="link" target="_blank" class="text-white text-sm sm:text-base hover:underline">{{ Data.text }}</a>
    </div>
    <div class="relative">
      <div :class="[{ 'nav-sticky': scrolled }, { absolute: !scrolled }]" class="top-0 transition duration-1000 z-10 w-full">
        <div class="mx-auto max-w-7xl lg:px-5 lg:py-4">
          <div class="nav-inner bg-white relative px-4 xs:px-5 sm:px-6 lg:px-5 py-4 lg:py-0 flex justify-between items-center space-x-6 xl:space-x-10 z-20">
            <div class="flex flex-row items-center space-x-10">
              <!-- Logo -->
              <div class="flex flex-col h-10 justify-center lg:flex-1">
                <g-link class="nav-logo h-auto w-28 xs:w-36 block relative pb-4 sm:pb-5 lg:w-36 transition" to="/">
                  <Logo class="text-primary z-20" />
                  <Slogan class="z-10 opacity-100 h-auto absolute w-full bottom-0 left-0" />
                </g-link>
              </div>
              <!-- Middle Links -->
              <nav class="space-x-4 hidden lg:flex">
                <div
                  v-for="(link, index) in Nav"
                  class="nav-link md:px-2 xl:px-4 py-5 group transition"
                  :key="index"
                  @mouseover="activetab = index"
                  @mouseleave="activetab = ''"
                  v-bind:class="[activetab === index ? 'active' : '']"
                >
                  <!-- Links w/ Dropdown -->
                  <div v-if="link.drop">
                    <div class="inline-flex items-center text-base text-body group-hover:text-title">
                      <span>{{ link.name }}</span>
                      <svg
                        class="text-gray-400 ml-2 h-3.5 w-3.5 group-hover:text-body transform transition group-hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                    <!-- DropDown -->
                    <transition enter-class="opacity-0 scale-y-75" enter-active-class="transition duration-300" leave-active-class="transition duration-300" leave-to-class="opacity-0 scale-y-75">
                      <div v-if="activetab === index" class="absolute top-full transform w-3/4 lg:left-1/2 lg:-translate-x-1/2 origin-top pt-3">
                        <div class="shadow-xl border rounded-lg overflow-hidden max-w-3xl">
                          <div v-if="link.drop.type === 1" class="relative grid gap-6 bg-white sm:gap-8 lg:grid-cols-5">
                            <div class="col-span-3 py-8 px-10">
                              <span class="uppercase text-sm font-medium tracking-wider text-caption pl-2 mb-6 block">{{ link.drop.header }}</span>
                              <div class="flex flex-col justify-center space-y-8">
                                <g-link :to="drop.link" class="drop-item flex flex-row" v-for="(drop, index) in link.drop.links" :key="index">
                                  <component :is="drop.icon" class="drop-item-icon h-12 h-12 mr-4" />
                                  <div class="flex flex-col">
                                    <span class="drop-item-title font-medium text-title text-lg">{{ drop.title }}</span>
                                    <span class="drop-item-subtitle text-subtitle text-xs ">{{ drop.title }}</span>
                                  </div>
                                </g-link>
                              </div>
                            </div>
                            <div class="col-span-2 bg-gray-50 py-8 px-10">
                              <span class="uppercase text-sm font-medium tracking-wider text-caption pl-1 mb-4 block">more...</span>
                              <div class="flex flex-col justify-center space-y-4">
                                <g-link :to="drop.link" class="drop-item flex items-center cursor-pointer" v-for="(drop, index) in link.drop.extra" :key="index">
                                  <component :is="drop.icon" class="drop-item-icon h-5 w-5 mr-4" />
                                  <div class="flex flex-col">
                                    <span class="drop-item-title font-regular text-subtitle hover:text-body text-base">{{ drop.title }}</span>
                                  </div>
                                </g-link>
                              </div>
                            </div>
                          </div>
                          <div v-else>
                            <span>HI</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                  <!-- Links w/o Dropdown -->
                  <div v-else class="inline-flex items-center text-base text-body group-hover:text-title">
                    <g-link :to="link.link">{{ link.name }}</g-link>
                  </div>
                </div>
              </nav>
            </div>
            <!-- Right Hand Buttons -->
            <div class="hidden lg:flex items-center justify-end md:flex-1 lg:w-0 divide-x divide-gray-300">
              <a href="#" class="whitespace-nowrap text-base text-primary hover:text-primary-400 hover:underline mr-4">Get a Demo</a>
              <div class="pl-4 space-x-4">
                <a href="#" class="whitespace-nowrap text-base font-medium text-body hover:text-title hover:underline">Log in</a>
                <a href="#" class="whitespace-nowrap inline-flex items-center justify-center btn btn-primary">Register</a>
              </div>
            </div>
            <!-- Hamburger -->
            <div class="z-50 flex lg:hidden items-center space-x-4" @click="sideBar = !sideBar">
              <div class="btn-xs btn-ghost">Get a Demo</div>
              <NavbarHamburger :isActive="sideBar" />
            </div>
          </div>
        </div>
        <!-- Mobile Menu -->
        <transition enter-class="transform -translate-y-full" enter-active-class="transition duration-300" leave-active-class="transition duration-200" leave-to-class="transform -translate-y-full">
          <div class="absolute w-screen h-screen top-full left-0 bg-gray-50 z-10" v-if="sideBar">
            <!-- SIDEBAR 1 -->
            <div class="contain pt-5">
              <div v-for="(link, index) in Nav" :key="index">
                <div v-if="link.drop">
                  <div @click="toggleSideBar2(link.name.toLowerCase())" class="w-full py-4 inline-flex justify-between items-center text-base font-medium text-body hover:text-primary cursor-pointer">
                    <span class="text-lg">{{ link.name }}</span>

                    <!-- Arrow right-short -->
                    <svg class="ml-2 h-6 w-6 transform transition group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </div>

                  <!-- SIDEBAR 2 -->
                  <div :id="'sidebar-2-' + link.name.toLowerCase()" class="absolute w-full h-full top-0 left-0 bg-gray-100 z-20 transition sidebar-2-hide">
                    <div class="contain pt-5">
                      <div class="inline-flex items-center cursor-pointer py-4 hover:text-primary" @click="toggleSideBar2(link.name.toLowerCase())">
                        <!-- Arrow left-short -->
                        <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5h-5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                        <span>{{ link.name }}</span>
                      </div>

                      <div v-for="(link, index) in link.drop.links" :key="index">
                        <g-link :to="link.link" class="w-full py-4 inline-flex justify-between items-center font-medium text-body hover:text-primary cursor-pointer">
                          <span class="text-lg">{{ link.title }}</span>
                        </g-link>
                      </div>
                    </div>
                  </div>
                </div>

                <div @click="sideBar = !sideBar" v-else>
                  <g-link :to="link.link" class="text-lg w-full py-4 inline-flex items-center font-medium text-body hover:text-primary">
                    <span>{{ link.name }}</span>
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </transition>
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

import IASS from '@/components/icons/IASS';
import IMarket from '@/components/icons/IMarket';
import IAfrica from '@/components/icons/IAfrica';
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
    IASS,
    IAfrica,
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
      Data,
      scrolled: false,
      announce: Data.active,
      sideBar: false,
      activetab: '',
      link: 'https://' + Data.link,
      Nav: {
        buyer: {
          name: 'Buyers',
          drop: {
            type: 1,
            header: 'ABANA features',
            links: [
              {
                title: 'Apparel Sourcing Solutions',
                link: '/apparel-sourcing-solutions',
                icon: IASS,
              },
              {
                title: 'Digital Platform',
                link: '/digital-platform',
                icon: ISource,
              },
              {
                title: 'E-commerce Solutions',
                link: '/e-commerce-solutions',
                icon: IEcomm,
              },
            ],
            extra: [
              {
                title: 'Why Africa',
                link: '/why-africa',
                icon: IAfrica,
              },
              {
                title: 'Sustainability',
                link: '/sustainability',
                icon: ISustainability,
              },
              {
                title: 'Country Reps',
                link: '/country-reps',
                icon: ICountryRep,
              },
              {
                title: 'Testimonials',
                link: '/testimonials',
                icon: ITestimonial,
              },
            ],
          },
        },
        seller: {
          name: 'Sellers',
          drop: {
            type: 1,
            header: 'ABANA for...',
            links: [
              {
                title: 'Apparel Manufacturers',
                link: '/apparel-manufacturers',
                icon: ISource,
              },
              {
                title: 'Yarn, Fabric, Trim suppliers',
                link: '/yarn-fabric-trim-suppliers',
                icon: IGM,
              },
              {
                title: 'Service Providers',
                link: '/service-providers',
                icon: ISP,
              },
            ],
            extra: [
              {
                title: 'Country Reps',
                link: '/country-reps',
                icon: ICountryRep,
              },
              {
                title: 'Testimonials',
                link: '/testimonials',
                icon: ITestimonial,
              },
            ],
          },
        },
        carbonOffset: {
          name: 'Carbon Offset',
          link: '/carbon-offset',
        },
        company: {
          name: 'Company',
          drop: {
            type: 2,
            links: [
              {
                title: 'Apparel Sourcing Solutions',
                link: '/',
                icon: ITerms,
              },
              {
                title: 'Digital Platform',
                link: '/',
                icon: ITerms,
              },
              {
                title: 'E-commerce Solutions',
                link: '/',
                icon: ITerms,
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
    };
  },
  methods: {
    updateScroll() {
      if (window.scrollY > 40) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
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
    toggleSideBar2(target) {
      document.getElementById('sidebar-2-' + target).classList.toggle('sidebar-2-hide');
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
#nav-bar {
  height: 72px;
  @media (min-width: $break-collapse) {
    height: 96px;
  }
  &.announce {
    height: 120px;
    @media (min-width: $break-collapse) {
      height: 136px;
    }
  }
}

.sidebar-2-hide {
  @apply transition transform translate-x-full;
}

.nav-sticky {
  @apply transition duration-300 bg-white lg:bg-transparent fixed;

  .nav-inner {
    @apply py-4 lg:py-0 lg:rounded-xl bg-white;
    box-shadow: inset 0 0 0 0.5px rgba(114, 111, 111, 0.2), 0 0 15px rgba(0, 0, 0, 0.05);
  }

  .nav-link {
    padding-top: 0.75rem 0 !important;
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

.nav-link {
  box-shadow: inset 0 0 #ff6158;
  &:hover {
    box-shadow: inset 0 -3px #ff6158;
  }
}

.drop-item:hover {
  .drop-item-title {
    @apply text-primary;
  }
  .drop-item-subtitle {
    @apply text-primary-200;
  }
  .drop-item-icon {
    .light {
      @apply text-primary-200;
    }
    .dark {
      @apply text-primary;
    }
    .bg {
      @apply text-primary-100;
    }
  }
}
</style>
