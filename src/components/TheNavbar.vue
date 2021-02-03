<!-- HTML -->
<template>
  <nav>
    <b-navbar
      class="py-3 px-4 px-sm-5 px-lg-0 my-0 py-lg-0 bg-white"
      :class="{ navShadow: scrollPosition > 50 }"
      toggleable="lg"
      fixed="top"
      tag="header"
    >
      <b-container fluid>
        <div
          class="row top-row w-100 justify-content-between align-items-center no-gutters"
        >
          <!-- Nav Brand -->
          <div class="col col-auto">
            <g-link class="nav-logo" to="/">
              <Logo />
              <Slogan />
            </g-link>
          </div>

          <!-- Middle Buttons / Hidden on mobile-->
          <div class="col col-auto d-none d-lg-flex justify-content-center">
            <b-navbar-nav class="nav-main">
              <!-- Products-->
              <div
                class="nav-item nav-only"
                @mouseover="hoverPro = true"
                @mouseleave="hoverPro = false"
              >
                <a class="nav-link">
                  Solutions
                  <b-icon icon="chevron-down" scale=".6" />
                </a>
                <div
                  id="products-drop"
                  class="dropdown-container"
                  v-bind:class="{ dropActive: hoverPro }"
                >
                  <div class="col col-6 left-panel">
                    <div class="left-link-container">
                      <b-dropdown-header id="dropdown-header-1"
                        >Our Solutions</b-dropdown-header
                      >
                      <div
                        class="dropdown-link"
                        @mouseover="hover1 = true"
                        @mouseleave="hover1 = false"
                      >
                        <g-link
                          class="dropdown-item d-flex align-items-center"
                          to="/matching-marketplace/"
                        >
                          <div class="drop-image">
                            <IMarket />
                          </div>
                          <div class="drop-text">
                            <p class="drop-title text-transition">
                              {{ market.title }}
                            </p>
                            <p class="drop-subtitle text-transition">
                              {{ market.subtitle }}
                            </p>
                          </div>
                        </g-link>
                      </div>

                      <div
                        class="dropdown-link"
                        @mouseover="hover2 = true"
                        @mouseleave="hover2 = false"
                      >
                        <g-link
                          class="dropdown-item d-flex align-items-center"
                          to="/ecommerce/"
                        >
                          <div class="drop-image">
                            <IEcomm />
                          </div>
                          <div class="drop-text">
                            <p class="drop-title text-transition">
                              {{ ecom.title }}
                            </p>
                            <p class="drop-subtitle text-transition">
                              {{ ecom.subtitle }}
                            </p>
                          </div>
                        </g-link>
                      </div>

                      <div
                        class="dropdown-link"
                        @mouseover="hover3 = true"
                        @mouseleave="hover3 = false"
                      >
                        <g-link
                          class="dropdown-item d-flex align-items-center"
                          to="/supply-chain/"
                        >
                          <div class="drop-image">
                            <ISupply />
                          </div>
                          <div class="drop-text">
                            <p class="drop-title text-transition">
                              {{ supply.title }}
                            </p>
                            <p class="drop-subtitle text-transition">
                              {{ supply.subtitle }}
                            </p>
                          </div>
                        </g-link>
                      </div>
                    </div>
                  </div>
                  <div class="col col-6 grey-panel">
                    <div v-show="hover1">
                      <b-dropdown-header>Features:</b-dropdown-header>
                      <ul class="feature-list">
                        <li v-for="item in market.examples" :key="item.example">
                          <span class="feature-title">{{ item.title }}</span>
                          <span class="feature-details">
                            {{ item.example }}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div v-show="hover2">
                      <b-dropdown-header>Features:</b-dropdown-header>
                      <ul class="feature-list">
                        <li v-for="item in ecom.examples" :key="item.example">
                          <span class="feature-title">{{ item.title }}</span>
                          <span class="feature-details">
                            {{ item.example }}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div v-show="hover3">
                      <b-dropdown-header>Features:</b-dropdown-header>
                      <ul class="feature-list">
                        <li v-for="item in supply.examples" :key="item.example">
                          <span class="feature-title">{{ item.title }}</span>
                          <span class="feature-details">
                            {{ item.example }}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Drops-->
              <li class="nav-item nav-only">
                <g-link class="nav-link" to="/drops/">Drops</g-link>
              </li>

              <!-- Why Africa-->
              <li class="nav-item nav-only">
                <g-link class="nav-link" to="/why-africa/">Why Africa</g-link>
              </li>

              <!-- Pricing-->
              <li class="nav-item nav-only">
                <g-link class="nav-link" to="/pricing/">Pricing</g-link>
              </li>

              <!-- Company-->
              <div
                class="nav-item nav-only"
                @mouseover="hoverCom = true"
                @mouseleave="hoverCom = false"
              >
                <a class="nav-link">
                  Company
                  <b-icon icon="chevron-down" scale=".6" />
                </a>
                <div
                  id="company-drop"
                  class="dropdown-container pt-2 pb-5 justify-content-center"
                  v-bind:class="{ dropActive: hoverCom }"
                >
                  <div class="col col-2">
                    <b-dropdown-header>Company</b-dropdown-header>
                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/about/"
                    >
                      <div class="drop-image-sm">
                        <IAbout />
                      </div>
                      <div class="drop-text">About Us</div>
                    </g-link>

                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/sustainability/"
                    >
                      <div class="drop-image-sm">
                        <ISustainability />
                      </div>
                      <div class="drop-text">Sustainability</div>
                    </g-link>

                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/careers/"
                    >
                      <div class="drop-image-sm">
                        <ICareer />
                      </div>
                      <div class="drop-text">Careers</div>
                    </g-link>

                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/press/"
                    >
                      <div class="drop-image-sm">
                        <INews />
                      </div>
                      <div class="drop-text">Press</div>
                    </g-link>
                  </div>

                  <div class="col col-2">
                    <b-dropdown-header>Partnerships</b-dropdown-header>

                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/country-reps/"
                    >
                      <div class="drop-image-sm">
                        <ICountryRep />
                      </div>
                      <div class="drop-text">Country Reps</div>
                    </g-link>

                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/freelancers/"
                    >
                      <div class="drop-image-sm">
                        <IFreelancers />
                      </div>
                      <div class="drop-text">Freelancers</div>
                    </g-link>
                  </div>

                  <div class="col col-2">
                    <b-dropdown-header>Support</b-dropdown-header>

                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/how-it-works/"
                    >
                      <div class="drop-image-sm">
                        <IHow />
                      </div>
                      <div class="drop-text">How It Works</div>
                    </g-link>

                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/contact/"
                    >
                      <div class="drop-image-sm">
                        <IContact />
                      </div>
                      <div class="drop-text">Contact Us</div>
                    </g-link>

                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/privacy/"
                    >
                      <div class="drop-image-sm">
                        <IPrivacy />
                      </div>
                      <div class="drop-text">Privacy</div>
                    </g-link>
                    <g-link
                      class="dropdown-item drop-title-singular d-flex align-items-center"
                      to="/terms-conditions/"
                    >
                      <div class="drop-image-sm">
                        <ITerms />
                      </div>
                      <div class="drop-text">Terms & Conditions</div>
                    </g-link>
                  </div>
                </div>
              </div>
            </b-navbar-nav>
          </div>

          <!-- Right aligned nav items -->
          <div class="col col-auto d-none d-lg-flex">
            <b-navbar-nav class="d-none d-lg-block ml-auto">
              <a href="https://app.abana.mu/login" class="log-in"
                >{{ cta.sub }}
              </a>

              <b-button
                href="https://app.abana.mu/register-buyer"
                variant="primary"
                >{{ cta.main }}</b-button
              >
            </b-navbar-nav>
          </div>

          <!-- Right aligned nav items --
          <div class="col col-auto d-none d-lg-block">
            <b-navbar-nav class="d-none d-lg-block ml-auto">
              <g-link to="/Register/"
                ><b-button variant="primary">Pre-Register</b-button>
              </g-link>
            </b-navbar-nav>
          </div>

          -->

          <!-- Mobile Navigation -->
          <b-navbar-nav
            class="d-flex flex-row align-items-center d-lg-none ml-auto"
          >
            <a href="https://app.abana.mu/login" class="log-in pl-2"
              >{{ cta.sub }}
            </a>
            <NavbarHamburger v-b-toggle.sidebar-level-1 />
            <!-- Main SideBar -->
          </b-navbar-nav>
        </div>
      </b-container>
    </b-navbar>
    <b-sidebar id="sidebar-level-1" no-header bg-variant="white">
      <template v-slot:default="{ hide }">
        <div class="sidebar-container">
          <div class="sidebar-container-1">
            <div class="sidebar-item-level-1" v-b-toggle.sidebar-level-2-0>
              Solutions
              <b-icon icon="arrow-right-short" class="float-right" />
            </div>
            <div @click="hide">
              <g-link class="sidebar-item-level-1" to="/Drops/">
                Drops
                <b-icon icon="arrow-right-short" class="float-right" />
              </g-link>
            </div>
            <div @click="hide">
              <g-link class="sidebar-item-level-1" to="/why-africa/">
                Why Africa
                <b-icon icon="arrow-right-short" class="float-right" />
              </g-link>
            </div>
            <div @click="hide">
              <g-link class="sidebar-item-level-1" to="/pricing/">
                Pricing
                <b-icon icon="arrow-right-short" class="float-right" />
              </g-link>
            </div>

            <div class="sidebar-item-level-1" v-b-toggle.sidebar-level-2-2>
              Company
              <b-icon icon="arrow-right-short" class="float-right" />
            </div>

            <div class="sidebar-buttons d-flex mt-5 justify-content-center">
              <b-button
                href="https://app.abana.mu/login"
                variant="link"
                class="title-dark w-100 mb-2"
                >{{ cta.sub }}</b-button
              >
              <b-button
                href="https://app.abana.mu/register-buyer"
                variant="primary"
                class="w-100"
                >{{ cta.main }}</b-button
              >
            </div>

            <!--
            <div class="sidebar-buttons mt-5 text-center">
              <g-link to="/Register/">
                <b-button variant="primary">Pre-Register</b-button>
              </g-link>
            </div>

            -->
          </div>

          <!-- Sidebar for Products -->
          <b-sidebar
            id="sidebar-level-2-0"
            class="w-100"
            right
            shadow
            no-header
            bg-variant="white"
          >
            <template v-slot:default="{ hide }">
              <div class="sidebar-container-2">
                <!-- Content -->
                <div class="row no-gutters align-items-stretch nowrap">
                  <div class="sidebar-item-level-2-title" @click="hide">
                    <b-icon icon="arrow-left-short" class="mr-2" />Solutions
                  </div>
                  <div class="col col-12 mb-3">
                    <div @click="hide">
                      <g-link
                        class="sidebar-item-level-2"
                        to="/matching-marketplace/"
                      >
                        <div
                          class="sidebar-item-level-2-container d-flex align-items-center"
                        >
                          <div class="drop-image">
                            <IMarket />
                          </div>
                          <div class="drop-text">
                            <p class="drop-title text-transition">
                              {{ market.title }}
                            </p>
                            <p class="drop-subtitle text-transition">
                              {{ market.subtitle }}
                            </p>
                          </div>
                        </div>
                      </g-link>
                    </div>
                  </div>
                  <div class="col col-12 mb-3">
                    <g-link class="sidebar-item-level-2" to="/ecommerce/">
                      <div
                        class="sidebar-item-level-2-container d-flex align-items-center"
                      >
                        <div class="drop-image">
                          <IEcomm />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ ecom.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ ecom.subtitle }}
                          </p>
                        </div>
                      </div>
                    </g-link>
                  </div>
                  <div class="col col-12 mb-3">
                    <g-link class="sidebar-item-level-2" to="/supply-chain/">
                      <div
                        class="sidebar-item-level-2-container d-flex align-items-center"
                      >
                        <div class="drop-image">
                          <ISupply />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ supply.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ supply.subtitle }}
                          </p>
                        </div>
                      </div>
                    </g-link>
                  </div>
                </div>
              </div>
            </template>
          </b-sidebar>

          <!-- Sidebar for Company -->
          <b-sidebar
            id="sidebar-level-2-2"
            class="w-100"
            right
            shadow
            no-header
            bg-variant="white"
          >
            <template v-slot:default="{ hide }">
              <div class="sidebar-container-2">
                <!-- Content -->
                <div class="row no-gutters align-items-stretch nowrap mb-2">
                  <div class="sidebar-item-level-2-title" @click="hide">
                    <b-icon icon="arrow-left-short" class="mr-2" />Company
                  </div>
                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle"
                      >Company</b-dropdown-header
                    >
                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/about/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <IAbout />
                      </div>
                      <div class="drop-text">About Us</div>
                    </g-link>

                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/sustainability/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <ISustainability />
                      </div>
                      <div class="drop-text">Sustainability</div>
                    </g-link>

                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/careers/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <ICareer />
                      </div>
                      <div class="drop-text">Careers</div>
                    </g-link>
                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/press/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <INews />
                      </div>
                      <div class="drop-text">Press</div>
                    </g-link>
                  </div>

                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle"
                      >Partnerships</b-dropdown-header
                    >
                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/country-reps/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <ICountryRep />
                      </div>
                      <div class="drop-text">Our Country Reps</div>
                    </g-link>

                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/freelancers/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <IFreelancers />
                      </div>
                      <div class="drop-text">Freelancers</div>
                    </g-link>
                  </div>

                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle"
                      >Support</b-dropdown-header
                    >
                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/how-it-works/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <IHow />
                      </div>
                      <div class="drop-text">How it Works</div>
                    </g-link>
                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/contact/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <IContact />
                      </div>
                      <div class="drop-text">Contact Us</div>
                    </g-link>

                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/privacy/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <IPrivacy />
                      </div>
                      <div class="drop-text">Privacy</div>
                    </g-link>

                    <g-link
                      class="sidebar-item-level-2 d-flex align-items-center"
                      to="/terms-conditions/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <ITerms />
                      </div>
                      <div class="drop-text">Terms & Conditions</div>
                    </g-link>
                  </div>
                </div>
              </div>
            </template>
          </b-sidebar>
        </div>
      </template>
    </b-sidebar>
  </nav>
</template>

<!-- SCRIPTS -->
<script>
import { BNavbar, BNavbarNav } from "bootstrap-vue";

import {
  BIcon,
  BIconChevronDown,
  BIconArrowRightShort,
  BDropdownHeader,
  BDropdownDivider,
  BIconArrowLeftShort,
} from "bootstrap-vue";

import Logo from "@/components/icons/Logo";
import Slogan from "@/components/icons/Slogan";
import NavbarHamburger from "@/components/NavbarHamburger";

import IMarket from "@/components/icons/IMarket";
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
import IHow from "@/components/icons/IHow";

export default {
  components: {
    BNavbar,
    ICountryRep,
    Logo,
    Slogan,
    BNavbarNav,
    BDropdownHeader,
    BDropdownDivider,
    BIcon,
    BIconChevronDown,
    BIconArrowRightShort,
    BIconArrowLeftShort,
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
    IContact,
    ICareer,
    IPartnership,
    ISustainability,
  },
  data() {
    return {
      scrollPosition: null,
      market: {
        title: "Matching Marketplace",
        subtitle: "Illuminating sourcing opportunities",
        examples: [
          {
            title: "DATABASE",
            example: "Use multiple criteria to find new partners",
          },
          {
            title: "MARKETPLACE",
            example:
              "Discover a wealth of targeted information and opportunities",
          },
        ],
      },
      ecom: {
        title: "E-commerce",
        subtitle:
          "Sophisticated products in low MOQs for immediate or quick deliveries",
        examples: [
          {
            title: "Drops",
            example: "Bi-monthly collections of ready-to-ship styles",
          },
          {
            title: "Brands",
            example: "Curated list of the best regional brands (coming soon)",
          },
          {
            title: "Fast Custom",
            example:
              "Order directly from factories in low MOQs & short lead-times (coming soon)",
          },
        ],
      },
      supply: {
        title: "Supply Chain Solutions",
        subtitle: "Tailored services to help you grow in the region",
        examples: [
          {
            title: "Support Services",
            example: "Quality Assurance, Compliance & Testing",
          },
          {
            title: "Virtual Supplier",
            example: "Sample development, merchandising and more...",
          },
          {
            title: "Advisory",
            example: "Strategic advice on sourcing from the Indian Ocean",
          },
          {
            title: "Online order Tracking",
            example: "Set up Critical Path dates",
          },
          {
            title: "Corporate Discounts",
            example: "Key partners in the region",
          },
        ],
      },
      cta: {
        main: "Sign Up",
        sub: "Log In",
      },
      hoverPro: false,
      hoverSol: false,
      hoverCom: false,
      hover0: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
// MAIN ELLEMENTS

.navbar {
  z-index: 1036 !important;
}

.navShadow {
  -webkit-box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
  box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
  background-color: white;
  -webkit-transition: all 0.5s;
  transition: all 0.25s;
  .nav-item.nav-only {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }
  .dropdown-container {
    margin-top: 12px;
  }

  .nav-logo {
    transition: all 0.25s ease-out;
    padding-bottom: 0px;

    .logo_slogan {
      transition: opacity 0.25s ease-out;
      opacity: 0;
    }
  }
}

.nav-logo {
  width: 8rem;
  height: auto;
  display: block;
  position: relative;
  padding-bottom: 15px;

  @media (min-width: 400px) {
    padding-bottom: 16px;
    width: 8.75rem;
  }

  @media (min-width: $break-s) {
    padding-bottom: 20px;
    width: 10rem;
  }

  @media (min-width: $break-l) and (max-width: $break-xl) {
    width: 9rem;
  }

  .logo_brand {
    fill: $primary;
    z-index: 2;
  }

  .logo_slogan {
    z-index: 1;

    opacity: 1;
    height: auto;

    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    .slogan-text {
      fill: $text-body;
    }
    .slogan-bar {
      fill: $primary;
    }
  }
}

.nav-item.nav-only {
  cursor: pointer;
  padding: 1.2rem;

  @media (min-width: $break-l) and (max-width: $break-xl) {
    padding: 1.2rem 0.7rem;
  }

  box-shadow: inset 0px 0px $primary;

  &:hover {
    box-shadow: inset 0px 3px $primary;
    transition: 0.3s;
  }
}

.log-in {
  font-size: 0.9rem;
  color: $title-dark;
  &:hover {
    color: $info;
  }

  padding-right: 1.5rem;

  @media (min-width: $break-l) {
    padding: 1rem;
    font-size: 1rem;
  }
}

//DROPDOWN

.dropdown-container {
  display: flex;
  opacity: 0;

  pointer-events: none;
  -webkit-transform: translateY(-0.8em);
  transform: translateY(-0.8em);
  -webkit-transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
    z-index 0s linear 10ms;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
    z-index 0s linear 10ms;

  background-color: white;
  flex-direction: row;
  padding: 0;
  position: fixed;
  margin-top: 20px;
  justify-content: flex-end;
  left: 0;
  width: 100%;
  box-shadow: 0 1px 1px rgba(47, 57, 78, 0.08), 0 4px 4px rgba(47, 57, 78, 0.08);
}

.dropActive {
  opacity: 1;
  pointer-events: all !important;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition-delay: 0s, 0s, 0.3s;
  transition-delay: 0s, 0s, 0.3s;
}

.left-link-container {
  width: 425px;
}

.dropdown-header {
  letter-spacing: 1px;
  font-size: 0.75rem !important;
  text-transform: uppercase;
  padding: 0;
  color: $subtitle-dark;
}

.left-panel {
  padding: 1rem 2rem 3rem 0 !important;
  display: flex;
  justify-content: flex-end;
}

.grey-panel {
  background-color: $grey-light;
  padding: 1rem 7rem 3rem 2rem !important;
  border-left: 1px solid rgba(0, 0, 0, 0.125);
}

.dropdown-link {
  padding: 0.75rem 0;
}

.drop-image {
  width: 3rem;
  height: 3rem;
  display: block;
}

.dropdown-item:hover {
  .drop-title,
  .drop-subtitle,
  .drop-text {
    color: $light-red;
  }
  .drop-image,
  .drop-image-sm {
    .cls-1 {
      fill: $lightest-red;
    }
    .cls-2 {
      fill: $primary;
    }
    .cls-3 {
      fill: $light-red;
    }
  }
}

.dropdown-item:active,
.dropdown-item.active {
  .drop-image,
  .drop-image-sm {
    .cls-1 {
      fill: $lightest-red;
    }
    .cls-2 {
      fill: $primary;
    }
    .cls-3 {
      fill: $light-red;
    }
  }
}

.drop-image-sm {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
}

.drop-text {
  padding-left: 1rem;
  font-size: $f16;
}

.drop-title {
  color: #0d1537;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.75px;
}

.drop-title-singular {
  padding: 0.5rem 0 !important;
}

.drop-subtitle {
  font-size: 0.9rem;
  color: $subtitle-dark;
  margin: 0;
  font-weight: 300;
  white-space: normal;
  letter-spacing: 0.5px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  li {
    font-weight: 300;
    margin-bottom: 16px;
    font-size: 0.875rem;
    letter-spacing: 1px;
  }
}

.feature-title {
  display: block;
  color: $title-dark;
  font-weight: 500;
  text-transform: uppercase;
}

.feature-details {
  color: $subtitle-dark;
}

//SIDEBAR

#sidebar-level-1 {
  top: 56px;
  height: calc(100vh - 56px);
  overflow: scroll;
}
#sidebar-level-1,
#sidebar-level-2-0,
#sidebar-level-2-1,
#sidebar-level-2-2 {
  width: 100%;
}

.sidebar-container {
  padding: 2rem 0;
}

.sidebar-container-1 {
  padding: 0 2rem;
}

.sidebar-container-2 {
  padding: 2rem;
}

.sidebar-item-level-1 {
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0rem;
  color: $title-dark;
  font-size: 1.25rem;

  &:hover {
    color: $primary;
    text-decoration: none;
    font-weight: 600;
  }

  &.active {
    color: $primary;
    text-decoration: none;
    font-weight: 600;
  }
}

.sidebar-buttons {
  margin: auto;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  @media (min-width: $break-s) {
    width: 50%;
  }
  @media (min-width: $break-collapse) {
    display: flex;
    flex-direction: row;
  }
}

.sidebar-item-level-2-title {
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  color: $title-dark;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    color: $primary;
    text-decoration: none;
    font-weight: 600;
  }
}

.sidebar-item-level-2-subtitle {
  list-style: none;
}

.sidebar-item-level-2 {
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  color: $title-dark;
  &:hover {
    text-decoration: none;
  }
  .feature-list {
    padding: 1rem 4rem;
    box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.1);
  }
}

.sidebar-item-level-2:hover,
.sidebar-item-level-2:active,
.sidebar-item-level-1.active,
.sidebar-item-level-2.active {
  outline: none;
  .drop-title,
  .drop-subtitle,
  .drop-text {
    color: $light-red;
  }
  .drop-image,
  .drop-image-sm {
    .cls-1 {
      fill: $lightest-red;
    }
    .cls-2 {
      fill: $primary;
    }
    .cls-3 {
      fill: $light-red;
    }
  }
}
</style>
