<!-- HTML -->
<template>
  <div>
    <div
      id="announce"
      :class="{ hidden: !Data.active }"
      class="h-auto bg-secondary-400 z-50 relative flex w-full top-0 justify-center items-center text-center"
    >
      <a
        :href="link"
        target="_blank"
        class="text-white text-sm py-0.5 sm:text-base sm:py-2"
      >{{ Data.text }}</a>
    </div>
    <div class="relative">
      <div class="bg-white z-50" v-bind:class="[{ navShadow: scrollPosition > 40 }]">
        <div
          class="relative contain flex justify-between bg-white items-center lg:space-x-10 z-40 py-4 lg:py-0"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <g-link class="nav-logo w-36 h-auto block relative pb-4 sm:pb-5 lg:w-36 z-50" to="/">
              <Logo class="text-primary-300 z-20" />
              <Slogan class="z-10 opacity-100 h-auto absolute w-full bottom-0 left-0" />
            </g-link>
          </div>
          <div class="z-50 flex lg:hidden" @click="sideBar = !sideBar">
            <NavbarHamburger :isActive="sideBar" />
          </div>
          <nav class="space-x-8 hidden lg:flex">
            <div
              v-for="(link, index) in Nav"
              class="nav-link py-5 md:px-2 xl:px-4 group cursor-pointer hover:shadow-nav"
              :key="index"
              @mouseover="activetab = index"
              @mouseleave="activetab = ''"
              v-bind:class="[activetab === index ? 'active' : '']"
            >
              <div v-if="link.drop">
                <div
                  class="inline-flex items-center text-base font-medium text-gray-500 group-hover:text-gray-900"
                >
                  <span>{{ link.name }}</span>

                  <!-- Chevron-Down -->
                  <svg
                    class="text-gray-400 ml-2 h-3.5 w-3.5 group-hover:text-gray-500 transform transition group-hover:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
                <div
                  v-if="activetab === index"
                  class="bg-white absolute top-full z-10 -ml-4 -mt-2 py-2 border-b shadow-md transform w-screen lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                >
                  <div
                    class="max-w-2xl mx-auto relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
                  >
                    <div
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      v-for="(drop, index) in link.drop.links"
                      :key="index"
                    >
                      <span>{{ drop.title }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else
                class="inline-flex items-center text-base font-medium text-gray-500 group-hover:text-gray-900"
              >
                <g-link :to="link.link">{{ link.name }}</g-link>
              </div>
            </div>
          </nav>
          <div class="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >Log in</a>
            <a
              href="#"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center btn btn-primary"
            >Register</a>
          </div>
        </div>
        <transition
          name="slide-fade2"
          enter-active-class="transition duration-300"
          leave-active-class="transition duration-200"
          enter-class="transform -translate-y-full"
          leave-to-class="transform -translate-y-full"
        >
          <div
            class="absolute w-screen h-screen fixed top-full left-0 bg-gray-50 z-20"
            v-if="sideBar"
          >
            <!-- SIDEBAR 1 -->
            <div class="contain pt-5">
              <div v-for="(link, index) in Nav" :key="index">
                <div v-if="link.drop">
                  <div
                    @click="toggleSideBar2(link.name.toLowerCase())"
                    class="w-full py-4 inline-flex justify-between items-center text-base font-medium text-body hover:text-primary cursor-pointer"
                  >
                    <span class="text-lg">{{ link.name }}</span>

                    <!-- Arrow right-short -->
                    <svg
                      class="ml-2 h-6 w-6 transform transition group-hover:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </div>

                  <!-- SIDEBAR 2 -->
                  <div
                    :id="'sidebar-2-' + link.name.toLowerCase()"
                    class="absolute w-full h-full fixed top-0 left-0 bg-white z-20 transform sidebar-2-hide"
                  >
                    <div class="contain pt-5">
                      <div
                        class="inline-flex items-center cursor-pointer py-4"
                        @click="toggleSideBar2(link.name.toLowerCase())"
                      >
                        <!-- Arrow left-short -->
                        <svg
                          class="h-5 w-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5h-5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                          />
                        </svg>
                        <p>{{ link.name }}</p>
                      </div>

                      <div v-for="(link, index) in link.drop.links" :key="index">
                        <div
                          class="w-full py-4 inline-flex justify-between items-center text-base font-medium text-body hover:text-primary cursor-pointer"
                        >
                          <span class="text-lg">{{ link.title }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div @click="sideBar = !sideBar" v-else>
                  <g-link
                    :to="link.link"
                    class="text-lg w-full py-4 inline-flex items-center text-base font-medium text-body hover:text-primary"
                  >
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
import Data from "~/_settings/announce.json";

import Logo from "@/components/icons/Logo";
import Slogan from "@/components/icons/Slogan";
import NavbarHamburger from "@/components/NavbarHamburger";

import IMarket from "@/components/icons/IMarket";
import ICarbon from "@/components/icons/ICarbon";
import IEcomm from "@/components/icons/IEcomm";
import ISupply from "@/components/icons/ISupply";
import ISource from "@/components/icons/ISource";
import IProduct from "@/components/icons/IProduct";
import IGM from "@/components/icons/IGM";
import IIS from "@/components/icons/IIS";
import ISP from "@/components/icons/ISP";
import IAbout from "@/components/icons/IAbout";
import IPrivacy from "@/components/icons/IPrivacy";
import INews from "@/components/icons/INews";
import ITerms from "@/components/icons/ITerms";
import IContact from "@/components/icons/IContact";
import ICareer from "@/components/icons/ICareer";
import IPartnership from "@/components/icons/IPartnership";
import ISustainability from "@/components/icons/ISustainability";
import IFreelancers from "@/components/icons/IFreelancers";
import ICountryRep from "@/components/icons/ICountryRep";
import ITestimonial from "@/components/icons/ITestimonial";
import IHow from "@/components/icons/IHow";
import IVideo from "@/components/icons/IVideo";

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
    ISustainability
  },
  data() {
    return {
      scrollPosition: null,
      announce: true,
      sideBar: false,
      Data,
      activetab: "",
      link: "https://" + Data.link,
      Nav: {
        buyer: {
          name: "Buyers",
          drop: {
            type: 1,
            links: [
              {
                title: "Apparel Sourcing Solutions",
                link: "/"
              },
              {
                title: "Digital Platform",
                link: "/"
              },
              {
                title: "E-commerce Solutions",
                link: "/"
              }
            ]
          }
        },
        seller: {
          name: "Sellers",
          drop: {
            type: 1,
            links: [
              {
                title: "Apparel Manufacturers",
                link: "/"
              },
              {
                title: "Yarn, Fabric, Trim suppliers",
                link: "/"
              },
              {
                title: "Service Providers",
                link: "/"
              }
            ]
          }
        },
        carbonOffset: {
          name: "Carbon Offset",
          link: "/pricing"
        },
        company: {
          name: "Company",
          drop: {
            type: 2,
            links: [
              {
                title: "Apparel Sourcing Solutions",
                link: "/"
              },
              {
                title: "Digital Platform",
                link: "/"
              },
              {
                title: "E-commerce Solutions",
                link: "/"
              }
            ]
          }
        }
      },
      market: {
        title: "Matching Marketplace",
        subtitle: "Illuminating sourcing opportunities"
      },
      fastc: {
        title: "Fast Custom (coming soon)",
        subtitle: "Order directly from factories in low MOQs & short lead-times"
      },
      supply: {
        title: "Supply Chain Solutions",
        subtitle: "Tailored services to help you grow in the region"
      },
      carbon: {
        title: "Carbon Offset Solution (coming soon)",
        subtitle:
          "Offset the carbon emissions of your airfreight with our unique solution. Take a sneak peek here."
      },
      drops: {
        title: "Drops",
        subtitle:
          "Sophisticated products in low MOQs for immediate or quick deliveries"
      },
      cta: {
        main: "Register",
        sub: "Log In"
      }
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
    toggleSideBar2(target) {
      document
        .getElementById("sidebar-2-" + target)
        .classList.toggle("sidebar-2-hide");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
.sidebar-2-hide {
  @apply transform transition duration-1000 translate-x-full;
}

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
</style>
