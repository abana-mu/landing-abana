<!-- HTML -->
<template>
  <div id="nav-bar" :class="{ announce: announce }" class="top-0 bg-white">
    <div
      id="announce"
      :class="{ hidden: !announce }"
      class="absolute bg-primary z-20 relative flex w-full top-0 justify-center items-center text-center h-12 sm:h-10"
    >
      <a
        :href="link"
        target="_blank"
        class="text-white text-sm sm:text-base hover:underline"
      >{{ AnnounceData.text }}</a>
    </div>
    <div class="relative">
      <div
        :class="[{ 'nav-sticky': scrolled }, { absolute: !scrolled }]"
        class="top-0 transition duration-1000 z-10 w-full"
      >
        <div class="mx-auto max-w-7xl lg:px-5 lg:py-4">
          <div
            class="nav-inner bg-white relative px-4 xs:px-5 sm:px-6 lg:px-5 py-4 lg:py-0 flex justify-between items-center space-x-6 xl:space-x-10 z-20"
          >
            <div class="flex flex-row items-center space-x-10">
              <!-- Logo -->
              <div class="flex flex-col h-10 justify-center lg:flex-1">
                <g-link
                  class="nav-logo h-auto w-28 xs:w-36 block relative pb-4 sm:pb-5 lg:w-36 transition"
                  to="/"
                >
                  <Logo class="text-primary z-20" />
                  <Slogan class="z-10 opacity-100 h-auto absolute w-full bottom-0 left-0" />
                </g-link>
              </div>
              <!-- Middle Links -->
              <nav class="space-x-4 hidden lg:flex">
                <div
                  v-for="(link, index) in Nav"
                  class="nav-link md:px-2 xl:px-4 py-5 group transition"
                  :key="link.name + index"
                  @mouseover="activetab = index"
                  @mouseleave="activetab = ''"
                  v-bind:class="[activetab === index ? 'active' : '']"
                >
                  <!-- Links w/ Dropdown -->
                  <div v-if="link.drop">
                    <div
                      :class="link.name"
                      class="inline-flex items-center text-base text-title group-hover:text-title"
                    >
                      <span>{{ link.name }}</span>
                      <svg
                        class="text-gray-400 ml-2 h-3.5 w-3.5 group-hover:text-body transform transition group-hover:rotate-180"
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
                    <!-- DropDown -->
                    <transition
                      enter-class="opacity-0 scale-y-75"
                      enter-active-class="transition duration-300"
                      leave-active-class="transition duration-300"
                      leave-to-class="opacity-0 scale-y-75"
                    >
                      <div
                        v-if="activetab === index"
                        class="absolute top-full transform w-3/4 lg:left-1/2 lg:-translate-x-1/2 origin-top pt-3"
                      >
                        <div class="shadow-xl border rounded-lg overflow-hidden max-w-4xl">
                          <div
                            v-if="link.drop.type === 1"
                            class="relative grid gap-6 bg-white sm:gap-8 lg:grid-cols-5"
                          >
                            <div class="col-span-3 py-8 px-10">
                              <span
                                class="uppercase text-sm s tracking-widest text-caption pl-2 mb-8 block"
                              >{{ link.drop.header }}</span>
                              <div class="flex flex-col justify-center space-y-10">
                                <g-link
                                  :to="drop.link"
                                  class="drop-item flex flex-row"
                                  v-for="(drop, index) in link.drop.links"
                                  :key="drop + index"
                                >
                                  <component :is="drop.icon" class="drop-item-icon h-12 w-12 mr-4" />
                                  <div class="flex flex-col">
                                    <span
                                      class="drop-item-title font-medium text-title text-lg"
                                    >{{ drop.title }}</span>
                                    <span
                                      class="drop-item-subtitle text-subtitle text-xs"
                                    >{{ drop.subtitle }}</span>
                                  </div>
                                </g-link>
                              </div>
                            </div>
                            <div class="col-span-2 bg-gray-50 py-8 px-10">
                              <span
                                class="uppercase text-sm tracking-widest text-caption pl-1 mb-6 block"
                              >more...</span>
                              <div class="flex flex-col justify-center space-y-4">
                                <div v-for="(drop, index) in link.drop.extra" :key="drop + index">
                                  <a
                                    v-if="drop.title == 'Carbon Offset'"
                                    href="/documents/ABANA_Carbon_Emissions.pdf"
                                    target="_blank"
                                    class="drop-item flex items-center cursor-pointer"
                                  >
                                    <component :is="drop.icon" class="drop-item-icon h-5 w-5 mr-4" />
                                    <div class="flex flex-col">
                                      <span
                                        class="drop-item-title font-regular text-subtitle hover:text-body text-base"
                                      >{{ drop.title }}</span>
                                    </div>
                                  </a>
                                  <g-link
                                    :to="drop.link"
                                    class="drop-item flex items-center cursor-pointer"
                                    v-else
                                  >
                                    <component :is="drop.icon" class="drop-item-icon h-5 w-5 mr-4" />
                                    <div class="flex flex-col">
                                      <span
                                        class="drop-item-title font-regular text-subtitle hover:text-body text-base"
                                      >{{ drop.title }}</span>
                                    </div>
                                  </g-link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-else class="relative grid gap-6 bg-white lg:grid-cols-3 p-8">
                            <div
                              v-for="(col, index) in link.drop.columns"
                              :key="col.header + index"
                            >
                              <span
                                class="uppercase text-sm font-regular tracking-widest text-caption mb-4 block ml-4"
                              >{{ col.header }}</span>
                              <div v-for="(link, index) in col.links" :key="link.title + index">
                                <template v-if="link.title == 'FAQ'">
                                  <div
                                    @click="launch()"
                                    class="drop-item flex items-center cursor-pointer p-4 rounded-md hover:bg-primary-100 hover:bg-opacity-75 transition duration-200"
                                  >
                                    <component :is="link.icon" class="drop-item-icon h-6 w-6 mr-4" />
                                    <div class="flex flex-col">
                                      <span
                                        class="drop-item-title text-title text-base"
                                      >{{ link.title }}</span>
                                    </div>
                                  </div>
                                </template>
                                <template v-else>
                                  <g-link
                                    :to="link.link"
                                    class="drop-item flex items-center cursor-pointer p-4 rounded-md hover:bg-primary-100 hover:bg-opacity-75 transition duration-200"
                                  >
                                    <component :is="link.icon" class="drop-item-icon h-6 w-6 mr-4" />
                                    <div class="flex flex-col">
                                      <span
                                        class="drop-item-title text-title text-base"
                                      >{{ link.title }}</span>
                                    </div>
                                  </g-link>
                                </template>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                  <!-- Links w/o Dropdown -->
                  <div
                    v-else
                    class="inline-flex items-center text-base text-title group-hover:text-title"
                  >
                    <g-link :to="link.link">{{ link.name }}</g-link>
                  </div>
                </div>
              </nav>
            </div>
            <!-- Right Hand Buttons -->
            <div
              class="hidden lg:flex items-center justify-end md:flex-1 lg:w-0 divide-x divide-gray-300"
            >
              <a
                href="https://meetings.hubspot.com/abana"
                target="_blank"
                class="whitespace-nowrap text-base text-primary hover:text-primary-400 hover:underline mr-4"
              >Book a Demo</a>
              <div class="pl-4 space-x-4">
                <a
                  href="https://app.abana.mu/login"
                  class="whitespace-nowrap text-base font-regular text-body hover:text-title hover:underline"
                >Log in</a>
                <g-link
                  to="/registration/"
                  class="whitespace-nowrap inline-flex items-center justify-center btn btn-primary"
                >Register</g-link>
              </div>
            </div>
            <!-- Hamburger -->
            <div class="z-50 flex lg:hidden items-center space-x-4" @click="sideBar = !sideBar">
              <a
                href="https://meetings.hubspot.com/abana"
                target="_blank"
                class="btn-xs btn-ghost"
              >Book a Demo</a>
              <NavbarHamburger :isActive="sideBar" />
            </div>
          </div>
        </div>
        <!-- Mobile Menu -->
        <transition
          enter-class="transform -translate-y-full"
          enter-active-class="transition duration-300"
          leave-active-class="transition duration-200"
          leave-to-class="transform -translate-y-full"
        >
          <div class="absolute w-screen h-screen top-full left-0 bg-gray-50 z-10" v-if="sideBar">
            <!-- SIDEBAR 1 -->
            <div class="contain pt-5">
              <div v-for="(link, index) in Nav" :key="link.name + index">
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
                    class="absolute w-full h-full top-0 left-0 bg-gray-50 z-20 transition sidebar-2-hide"
                  >
                    <div class="contain pt-5">
                      <div
                        class="inline-flex items-center cursor-pointer mt-2 mb-6 hover:text-primary"
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
                        <span>{{ link.name }}</span>
                      </div>
                      <template v-if="link.drop.type === 1">
                        <div
                          class="uppercase text-sm s tracking-widest text-caption pl-2 mb-2 block"
                        >{{ link.drop.header }}</div>
                        <div v-for="(link, index) in link.drop.links" :key="link.title + index">
                          <g-link
                            :to="link.link"
                            class="drop-item w-full p-3 -ml-3 inline-flex hover:bg-primary-100 rounded-md items-center font-medium text-body hover:text-primary cursor-pointer"
                          >
                            <component :is="link.icon" class="drop-item-icon h-12 w-12 mr-4" />
                            <span class="text-lg">{{ link.title }}</span>
                          </g-link>
                        </div>
                        <div
                          class="uppercase text-sm s tracking-widest text-caption pl-2 mt-5 mb-2 block"
                        >more...</div>
                        <div v-for="(link, index) in link.drop.extra" :key="link.title + index">
                          <a
                            v-if="link.title == 'Carbon Offset'"
                            href="/documents/ABANA_Carbon_Emissions.pdf"
                            target="_blank"
                            class="drop-item w-full p-3 inline-flex hover:bg-primary-100 rounded-md items-center text-body hover:text-primary cursor-pointer"
                          >
                            <component :is="link.icon" class="drop-item-icon h-5 w-5 mr-4" />
                            <div class="flex flex-col">
                              <span
                                class="drop-item-title font-regular text-subtitle hover:text-body text-base"
                              >{{ link.title }}</span>
                            </div>
                          </a>

                          <g-link
                            v-else
                            :to="link.link"
                            class="drop-item w-full p-3 inline-flex hover:bg-primary-100 rounded-md items-center text-body hover:text-primary cursor-pointer"
                          >
                            <component :is="link.icon" class="drop-item-icon h-6 w-6 mr-4" />
                            <span class="text-base">{{ link.title }}</span>
                          </g-link>
                        </div>
                      </template>
                      <template v-else>
                        <div
                          v-for="(col, index) in link.drop.columns"
                          :key="col.header + index"
                          class="mb-6"
                        >
                          <div
                            class="uppercase text-sm tracking-widest text-caption pl-2 mb-2 block"
                          >{{ col.header }}</div>

                          <div v-for="(link, index) in col.links" :key="link.title + index">
                            <template v-if="link.title == 'FAQ'">
                              <div
                                @click="launch()"
                                class="drop-item flex items-center cursor-pointer p-4 rounded-md hover:bg-primary-100 hover:bg-opacity-75 transition duration-200"
                              >
                                <component :is="link.icon" class="drop-item-icon h-6 w-6 mr-4" />
                                <div class="flex flex-col">
                                  <span
                                    class="drop-item-title text-title text-base"
                                  >{{ link.title }}</span>
                                </div>
                              </div>
                            </template>
                            <template v-else>
                              <g-link
                                :to="link.link"
                                class="drop-item w-full p-3 inline-flex hover:bg-primary-100 rounded-md items-center text-body hover:text-primary cursor-pointer"
                              >
                                <component :is="link.icon" class="drop-item-icon h-6 w-6 mr-4" />
                                <span class="text-base">{{ link.title }}</span>
                              </g-link>
                            </template>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>

                <div @click="sideBar = !sideBar" v-else>
                  <g-link
                    :to="link.link"
                    class="text-lg w-full py-4 inline-flex items-center font-medium text-body hover:text-primary"
                  >
                    <span>{{ link.name }}</span>
                  </g-link>
                </div>
              </div>
              <div class="w-full max-w-xs mx-auto flex flex-col text-center space-y-4 mt-10">
                <a
                  href="https://app.abana.mu/login"
                  class="whitespace-nowrap text-base font-regular text-body hover:text-title hover:underline"
                >Log in</a>
                <g-link
                  to="/registration/"
                  class="whitespace-nowrap inline-flex items-center justify-center btn btn-primary"
                >Register</g-link>
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
import AnnounceData from "~/_settings/announce.json";
import NavData from "~/_settings/navigation.json";

import Logo from "@/components/icons/Logo";
import Slogan from "@/components/icons/Slogan";
import NavbarHamburger from "@/components/NavbarHamburger";

import IASS from "@/components/icons/IASS";
import IMarket from "@/components/icons/IMarket";
import IAfrica from "@/components/icons/IAfrica";
import ICarbon from "@/components/icons/ICarbon";
import IDrops from "@/components/icons/IDrops";
import IDigital from "@/components/icons/IDigital";
import IFastCustom from "@/components/icons/IFastCustom";
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
    IASS,
    IAfrica,
    ICarbon,
    IDigital,
    ICountryRep,
    IFastCustom,
    Logo,
    Slogan,
    NavbarHamburger,
    IFreelancers,
    IMarket,
    IDrops,
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
      AnnounceData,
      NavData,
      scrolled: false,
      announce: false,
      sideBar: false,
      activetab: "",
      link: "https://" + AnnounceData.link,
      Nav: {
        buyer: {
          name: "Buyers",
          drop: {
            type: 1,
            header: "ABANA features",
            links: [
              {
                title: "Apparel Sourcing Solutions",
                subtitle: NavData.appSouSol,
                link: "/apparel-sourcing-solutions",
                icon: IASS
              },
              {
                title: "B2B Digital Platform",
                subtitle: NavData.digPla,
                link: "/digital-platform",
                icon: IDigital
              },
              {
                title: "Drops",
                subtitle: NavData.dro,
                link: "/drops",
                icon: IFastCustom
              },
              {
                title: "Fast Custom",
                subtitle: NavData.fasCus,
                link: "/fast-custom",
                icon: IDrops
              }
            ],
            extra: [
              {
                title: "Why Africa",
                link: "/why-africa",
                icon: IAfrica
              },
              {
                title: "Carbon Offset",
                link: "/carbon-offset",
                icon: IAbout
              },
              {
                title: "Sustainability",
                link: "/sustainability",
                icon: ISustainability
              },
              {
                title: "Country Reps",
                link: "/country-reps",
                icon: ICountryRep
              },
              {
                title: "Testimonials",
                link: "/testimonials",
                icon: ITestimonial
              }
            ]
          }
        },
        seller: {
          name: "Sellers",
          drop: {
            type: 1,
            header: "ABANA for...",
            links: [
              {
                title: "Apparel Manufacturers",
                subtitle: NavData.appMan,
                link: "/apparel-manufacturers",
                icon: ISource
              },
              {
                title: "Yarn, Fabric, Trim suppliers",
                subtitle: NavData.yarSup,
                link: "/yarn-fabric-trim-suppliers",
                icon: IGM
              },
              {
                title: "Service Providers",
                subtitle: NavData.serPro,
                link: "/service-providers",
                icon: ISP
              }
            ],
            extra: [
              {
                title: "Country Reps",
                link: "/country-reps",
                icon: ICountryRep
              },
              {
                title: "Carbon Offset",
                link: "/carbon-offset",
                icon: IAbout
              },
              {
                title: "Testimonials",
                link: "/testimonials",
                icon: ITestimonial
              }
            ]
          }
        },
        about: {
          name: "About us",
          link: "/about"
        },
        company: {
          name: "Resources",
          drop: {
            type: 2,
            columns: [
              {
                header: "Company",
                links: [
                  {
                    title: "Careers",
                    link: "/careers",
                    icon: ICareer
                  },
                  {
                    title: "Press",
                    link: "/press",
                    icon: INews
                  },
                  {
                    title: "Testimonials",
                    link: "/testimonials",
                    icon: ITestimonial
                  }
                ]
              },
              {
                header: "Partnerships",
                links: [
                  {
                    title: "Country Reps",
                    link: "/country-reps",
                    icon: ICountryRep
                  },
                  {
                    title: "Freelancers",
                    link: "/freelancers",
                    icon: IFreelancers
                  }
                ]
              },
              {
                header: "Support",
                links: [
                  {
                    title: "FAQ",
                    link: "#",
                    icon: IHow
                  },
                  {
                    title: "Contact Us",
                    link: "/contact",
                    icon: IContact
                  },
                  {
                    title: "Video Tutorials",
                    link: "/how-it-works",
                    icon: IVideo
                  }
                ]
              }
            ]
          }
        }
      },

      cta: {
        main: "Register",
        sub: "Log In"
      }
    };
  },
  methods: {
    setannounce() {
      this.$router.currentRoute.path == "/"
        ? (this.announce = AnnounceData.active)
        : false;
    },
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
      document
        .getElementById("sidebar-2-" + target)
        .classList.toggle("sidebar-2-hide");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.setannounce();
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateScroll);
  }
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
    box-shadow: inset 0 0 0 0.5px rgba(114, 111, 111, 0.2),
      0 0 15px rgba(0, 0, 0, 0.05);
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
  .active {
    @apply text-primary font-medium;
  }
}

.drop-item-icon {
  flex-shrink: 0;
}

.drop-item:hover,
.drop-item.active {
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
