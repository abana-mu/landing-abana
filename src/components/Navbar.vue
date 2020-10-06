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
          class="row w-100 justify-content-between align-items-center no-gutters"
        >
          <!-- Nav Brand -->
          <div class="col col-auto">
            <g-link class="logo" to="/">
              <Logo />
            </g-link>
          </div>

          <!-- Middle Buttons / Hidden on mobile-->
          <div class="col col-auto d-none d-lg-block">
            <b-navbar-nav class="nav-main">
              <!-- Products-->
              <div
                class="nav-item nav-only"
                @mouseover="hoverPro = true"
                @mouseleave="hoverPro = false"
              >
                <a class="nav-link"
                  >Solutions<b-icon icon="chevron-down" scale=".6"
                /></a>
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
                          <span class="feature-details">{{
                            item.example
                          }}</span>
                        </li>
                      </ul>
                    </div>
                    <div v-show="hover2">
                      <b-dropdown-header>Features:</b-dropdown-header>
                      <ul class="feature-list">
                        <li v-for="item in ecom.examples" :key="item.example">
                          <span class="feature-title">{{ item.title }}</span>
                          <span class="feature-details">{{
                            item.example
                          }}</span>
                        </li>
                      </ul>
                    </div>
                    <div v-show="hover3">
                      <b-dropdown-header>Features:</b-dropdown-header>
                      <ul class="feature-list">
                        <li v-for="item in supply.examples" :key="item.example">
                          <span class="feature-title">{{ item.title }}</span>
                          <span class="feature-details">{{
                            item.example
                          }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

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
                <a class="nav-link"
                  >Company<b-icon icon="chevron-down" scale=".6"
                /></a>
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
                      to="/careers/"
                    >
                      <div class="drop-image-sm">
                        <ICareer />
                      </div>
                      <div class="drop-text">Careers</div>
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
                  </div>
                  <div class="col col-2">
                    <b-dropdown-header>Support</b-dropdown-header>

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
                      to="/terms-conditions-conditions/"
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

          <!-- Right aligned nav items --
          <div class="col col-auto d-none d-lg-block">
            <b-navbar-nav class="d-none d-lg-block ml-auto">
              <b-button variant="link" class="title-dark">{{
                cta.sub
              }}</b-button>
              <b-button variant="primary">{{ cta.main }}</b-button>
            </b-navbar-nav>
          </div>
          -->

          <div class="col col-auto d-none d-lg-block">
            <b-navbar-nav class="d-none d-lg-block ml-auto">
              <g-link to="/Register/"
                ><b-button variant="primary">Pre-Register</b-button>
              </g-link>
            </b-navbar-nav>
          </div>

          <!-- Mobile Navigation -->
          <b-navbar-nav class="d-block d-lg-none ml-auto">
            <Hamburger v-b-toggle.sidebar-level-1 />
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
              <b-button variant="link" class="title-dark">{{
                cta.sub
              }}</b-button>
              <b-button variant="primary">{{ cta.main }}</b-button>
            </div>
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

          <!-- Sidebar for Solutions -->
          <b-sidebar
            id="sidebar-level-2-1"
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
                    <b-icon icon="arrow-left-short" class="mr-2" />For Business
                  </div>
                  <b-dropdown-header class="sidebar-item-level-2-subtitle"
                    >For Buyers</b-dropdown-header
                  >
                  <div class="col col-12 mb-3">
                    <g-link class="sidebar-item-level-2" to="/sourcing-buyers/">
                      <div
                        class="sidebar-item-level-2-container d-flex align-items-center"
                      >
                        <div class="drop-image">
                          <ISource />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ source.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ source.subtitle }}
                          </p>
                        </div>
                      </div>
                    </g-link>
                  </div>
                  <div class="col col-12 mb-3">
                    <g-link class="sidebar-item-level-2" to="/product-buyers/">
                      <div
                        class="sidebar-item-level-2-container d-flex align-items-center"
                      >
                        <div class="drop-image">
                          <IProduct />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ product.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ product.subtitle }}
                          </p>
                        </div>
                      </div>
                    </g-link>
                  </div>

                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle"
                      >For Makers</b-dropdown-header
                    >
                    <g-link class="sidebar-item-level-2" to="/garment-makers/">
                      <div
                        class="sidebar-item-level-2-container d-flex align-items-center"
                      >
                        <div class="drop-image">
                          <IGM />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ gm.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ gm.subtitle }}
                          </p>
                        </div>
                      </div>
                    </g-link>
                  </div>
                  <div class="col col-12 mb-3">
                    <g-link class="sidebar-item-level-2" to="/input-suppliers/">
                      <div
                        class="sidebar-item-level-2-container d-flex align-items-center"
                      >
                        <div class="drop-image">
                          <IIS />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ ip.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ ip.subtitle }}
                          </p>
                        </div>
                      </div>
                    </g-link>
                  </div>
                  <div class="col col-12 mb-3">
                    <g-link
                      class="sidebar-item-level-2"
                      to="/service-providers"
                    >
                      <div
                        class="sidebar-item-level-2-container d-flex align-items-center"
                      >
                        <div class="drop-image">
                          <ISP />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ sp.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ sp.subtitle }}
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
                      to="/sustainability/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <ISustainability />
                      </div>
                      <div class="drop-text">Sustainability</div>
                    </g-link>
                  </div>
                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle"
                      >Support</b-dropdown-header
                    >
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

import Logo from "@/components/compIcons/Logo";
import Hamburger from "@/components/Hamburger";
import IMarket from "@/components/compIcons/IMarket";

import IEcomm from "@/components/compIcons/IEcomm";
import ISupply from "@/components/compIcons/ISupply";
import ISource from "@/components/compIcons/ISource";
import IProduct from "@/components/compIcons/IProduct";
import IGM from "@/components/compIcons/IGM";
import IIS from "@/components/compIcons/IIS";
import ISP from "@/components/compIcons/ISP";
import IAbout from "@/components/compIcons/IAbout";
import IPrivacy from "@/components/compIcons/IPrivacy";
import ITerms from "@/components/compIcons/ITerms";
import IContact from "@/components/compIcons/IContact";
import ICareer from "@/components/compIcons/ICareer";
import IPartnership from "@/components/compIcons/IPartnership";
import ISustainability from "@/components/compIcons/ISustainability";

export default {
  components: {
    BNavbar,
    Logo,
    BNavbarNav,
    BDropdownHeader,
    BDropdownDivider,
    BIcon,
    BIconChevronDown,
    BIconArrowRightShort,
    BIconArrowLeftShort,
    Hamburger,
    IMarket,
    IEcomm,
    ISupply,
    IProduct,
    ISource,
    IGM,
    IIS,
    ISP,
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
      source: {
        title: "Sourcing Buyers",
        subtitle: "Looking for factories to partner with",
        examples: [
          {
            title: "NEW TO THE REGION",
            example: "Discover what the region has to offer",
          },
          {
            title: "CONSOLIDATE YOUR SOURCING",
            example: "Find more products and suppliers",
          },
          {
            title: "EXPLORE NEW POSSIBILITIES",
            example:
              "Connect with material and accessory suppliers in the region",
          },
        ],
      },
      product: {
        title: "Product Buyers",
        subtitle: "Looking for high-quality, ready-to-ship styles",
        examples: [
          {
            title: "ON TREND – NOW",
            example:
              "Ready-to-ship DROP collections, add your private label, start selling within a week",
          },
          {
            title: "YOUR PRIVATE LABEL BASICS – FAST",
            example:
              "Build your order directly with our selection of high-quality suppliers",
          },
          {
            title: "FIND SPECIAL OFFERS",
            example:
              "Stock garments and other opportunities directly from factories",
          },
        ],
      },
      gm: {
        title: "Garment Makers",
        subtitle: "FOB & CMT Factories, Textile Producers",
        examples: [
          {
            title: "FIND NEW BUYERS",
            example:
              "Find, connect, message and build relationships with new buyers",
          },
          {
            title: "SEIZE ORDER OPPORTUNITIES",
            example: "View and instantly respond to buyer requests ",
          },
          {
            title: "SEE WHAT’S THERE",
            example:
              "Post offers & needs to buyers, other factories, input suppliers and service providers",
          },
        ],
      },
      ip: {
        title: "Input Suppliers",
        subtitle: "Accessories, Yarn, Fabric, & Trim Suppliers",
        examples: [
          {
            title: "EXPLORE A NEW MARKET",
            example:
              "Find and build relationships with a whole new set of buyers",
          },
          {
            title: "UNDERSTAND NEEDS",
            example:
              "Post offers and needs to buyers, factories, other input suppliers and service providers",
          },
        ],
      },
      sp: {
        title: "Service Providers",
        subtitle:
          "Agents, QC & Compliance, Logistics, Finance Services, Industry Associations",
        examples: [
          {
            title: "RESEARCH",
            example:
              "Find, connect and build relationships with platform members",
          },
          {
            title: "COMMUNICATE",
            example: "Constantly update your offers to the platform community",
          },
          {
            title: "PROMOTE",
            example:
              "Post listings to highlight and promote new services or offers",
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
    padding: 0.75rem 0;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }
  .dropdown-container {
    margin-top: 12px;
  }
}

.nav-item.nav-only {
  cursor: pointer;
  margin-left: 20px;
  padding: 1.2rem 0;
  box-shadow: inset 0px 0px $primary;
  &:hover {
    box-shadow: inset 0px 3px $primary;
    transition: 0.3s;
  }
  @media (min-width: $break-l) and (max-width: $break-xl) {
    margin-left: 15px;
  }
}

.logo {
  fill: $primary;
  width: 7rem;
  display: block;
  @media (min-width: $break-collapse) {
    width: 8rem;
  }
}

.btn-link {
  color: $title-dark;
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
