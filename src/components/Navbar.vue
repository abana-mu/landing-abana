<!-- HTML -->
<template>
  <b-navbar
    class="px-4 px-sm-5 px-lg-0 py-3 my-0 py-lg-0 bg-white bbody"
    toggleable="lg"
    fixed="top"
    tag="header"
  >
    <b-container fluid>
      <div class="row w-100 justify-content-between align-items-center no-gutters">
        <!-- Nav Brand -->
        <div class="col col-auto">
          <g-link class="logo" to="/">
            <img class src="../assets/images/logo.svg" />
          </g-link>
        </div>

        <!-- Middle Buttons / Hidden on mobile-->
        <div class="col col-auto d-none d-lg-block">
          <b-navbar-nav class="nav-main">
            <!-- Products-->
            <b-nav-item-dropdown text="Products">
              <div id="products-drop" class="dropdown-container">
                <div class="col col-7 left-panel px-5 py-4">
                  <b-dropdown-header id="dropdown-header-1">Products</b-dropdown-header>
                  <div
                    class="dropdown-link"
                    @mouseover="hover1 = true"
                    @mouseleave="hover1 = false"
                  >
                    <g-link
                      class="dropdown-item d-flex align-items-center"
                      to="/matching-marketplace"
                    >
                      <div class="drop-image">
                        <IMarket />
                      </div>
                      <div class="drop-text">
                        <p class="drop-title text-transition">{{market.title}}</p>
                        <p class="drop-subtitle text-transition">{{market.subtitle}}</p>
                      </div>
                    </g-link>
                  </div>

                  <div
                    class="dropdown-link"
                    @mouseover="hover2 = true"
                    @mouseleave="hover2 = false"
                  >
                    <g-link class="dropdown-item d-flex align-items-center" to="/ecommerce">
                      <div class="drop-image">
                        <IEcomm />
                      </div>
                      <div class="drop-text">
                        <p class="drop-title text-transition">{{ecom.title}}</p>
                        <p class="drop-subtitle text-transition">{{ecom.subtitle}}</p>
                      </div>
                    </g-link>
                  </div>

                  <div
                    class="dropdown-link"
                    @mouseover="hover3 = true"
                    @mouseleave="hover3 = false"
                  >
                    <g-link class="dropdown-item d-flex align-items-center" to="/supply-chain">
                      <div class="drop-image">
                        <ISupply />
                      </div>
                      <div class="drop-text">
                        <p class="drop-title text-transition">{{supply.title}}</p>
                        <p class="drop-subtitle text-transition">{{supply.subtitle}}</p>
                      </div>
                    </g-link>
                  </div>
                </div>

                <div class="col col-5 right-panel grey-panel pl-5 px-4 py-4">
                  <div v-show="hover1">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in market.examples" :key="item.example">{{ item.example }}</li>
                    </ul>
                  </div>
                  <div v-show="hover2">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in ecom.examples" :key="item.example">{{ item.example }}</li>
                    </ul>
                  </div>
                  <div v-show="hover3">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in supply.examples" :key="item.example">{{ item.example }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </b-nav-item-dropdown>

            <!-- Solutions-->
            <b-nav-item-dropdown text="Solutions">
              <div id="solutions-drop" class="dropdown-container">
                <div class="col col-7 left-panel px-5 py-4">
                  <b-dropdown-header id="dropdown-header-1">For Buyers</b-dropdown-header>
                  <div
                    class="dropdown-link"
                    @mouseover="hover1 = true"
                    @mouseleave="hover1 = false"
                  >
                    <g-link class="dropdown-item d-flex align-items-center" to="/sourcing-buyers">
                      <div class="drop-image">
                        <ISource />
                      </div>
                      <div class="drop-text">
                        <p class="drop-title text-transition">{{source.title}}</p>
                        <p class="drop-subtitle text-transition">{{source.subtitle}}</p>
                      </div>
                    </g-link>
                  </div>
                  <div
                    class="dropdown-link"
                    @mouseover="hover2 = true"
                    @mouseleave="hover2 = false"
                  >
                    <g-link class="dropdown-item d-flex align-items-center" to="/product-buyers">
                      <div class="drop-image">
                        <IProduct />
                      </div>
                      <div class="drop-text">
                        <p class="drop-title text-transition">{{product.title}}</p>
                        <p class="drop-subtitle text-transition">{{product.subtitle}}</p>
                      </div>
                    </g-link>
                  </div>
                  <b-dropdown-header id="dropdown-header-2">For Makers</b-dropdown-header>
                  <div
                    class="dropdown-link"
                    @mouseover="hover3 = true"
                    @mouseleave="hover3 = false"
                  >
                    <g-link class="dropdown-item d-flex align-items-center" to="/garment-makers">
                      <div class="drop-image">
                        <IGM />
                      </div>
                      <div class="drop-text">
                        <p class="drop-title text-transition">{{gm.title}}</p>
                        <p class="drop-subtitle text-transition">{{gm.subtitle}}</p>
                      </div>
                    </g-link>
                  </div>
                  <div
                    class="dropdown-link"
                    @mouseover="hover4 = true"
                    @mouseleave="hover4 = false"
                  >
                    <g-link class="dropdown-item d-flex align-items-center" to="/input-suppliers">
                      <div class="drop-image">
                        <IIS />
                      </div>
                      <div class="drop-text">
                        <p class="drop-title text-transition">{{ip.title}}</p>
                        <p class="drop-subtitle text-transition">{{ip.subtitle}}</p>
                      </div>
                    </g-link>
                  </div>
                  <div
                    class="dropdown-link"
                    @mouseover="hover5 = true"
                    @mouseleave="hover5 = false"
                  >
                    <g-link class="dropdown-item d-flex align-items-center" to="/service-providers">
                      <div class="drop-image">
                        <ISP />
                      </div>
                      <div class="drop-text">
                        <p class="drop-title text-transition">{{sp.title}}</p>
                        <p class="drop-subtitle text-transition">{{sp.subtitle}}</p>
                      </div>
                    </g-link>
                  </div>
                </div>
                <div class="col col-5 right-panel grey-panel pl-5 px-4 py-4">
                  <div v-show="hover1">
                    <b-dropdown-header>Example:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in source.examples" :key="item.example">{{ item.example }}</li>
                    </ul>
                  </div>
                  <div v-show="hover2">
                    <b-dropdown-header>Example:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in product.examples" :key="item.example">{{ item.example }}</li>
                    </ul>
                  </div>
                  <div v-show="hover3">
                    <b-dropdown-header>Example:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in gm.examples" :key="item.example">{{ item.example }}</li>
                    </ul>
                  </div>
                  <div v-show="hover4">
                    <b-dropdown-header>Example:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in ip.examples" :key="item.example">{{ item.example }}</li>
                    </ul>
                  </div>
                  <div v-show="hover5">
                    <b-dropdown-header>Example:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in sp.examples" :key="item.example">{{ item.example }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </b-nav-item-dropdown>

            <!-- Plans-->
            <li class="nav-item">
              <g-link class="nav-link" to="/plans/">Plans</g-link>
            </li>

            <!-- Journal-->
            <li class="nav-item">
              <g-link class="nav-link" to="/journal/">Journal</g-link>
            </li>

            <!-- Company-->
            <b-nav-item-dropdown text="Company">
              <div id="company-drop" class="dropdown-container p-5">
                <div class="col col-4">
                  <b-dropdown-header id="dropdown-header-3">Company</b-dropdown-header>
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
                </div>
                <div class="col col-4">
                  <b-dropdown-header id="dropdown-header-4">Support</b-dropdown-header>

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
                    <div class="drop-text">Privacy & Terms</div>
                  </g-link>
                </div>
                <div class="col col-4">
                  <b-dropdown-header id="dropdown-header-5">Partnerships</b-dropdown-header>

                  <g-link
                    class="dropdown-item drop-title-singular d-flex align-items-center"
                    to="/partnerships/"
                  >
                    <div class="drop-image-sm">
                      <IPartnership />
                    </div>
                    <div class="drop-text">Partner with us</div>
                  </g-link>
                </div>
              </div>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>

        <!-- Right aligned nav items -->
        <div class="col col-auto">
          <!-- Desktop Navigation -->
          <b-navbar-nav class="d-none d-lg-block ml-auto">
            <b-button variant="link" color="secondary">Login</b-button>
            <b-button variant="primary">Sign Up</b-button>
          </b-navbar-nav>

          <!-- Mobile Navigation -->
          <b-navbar-nav class="d-block d-lg-none ml-auto">
            <tasty-burger-button
              :type="buttonType"
              :active="isActive"
              :size="size"
              :color="color"
              v-on:toggle="onToggle"
              v-b-toggle.sidebar-level-1
              class="burger"
            />

            <!-- Main SideBar -->
            <b-sidebar id="sidebar-level-1" title="Sidebar Level 1" no-header bg-variant="white">
              <template v-slot:default="{ hide }">
                <g-link class="logo" to="/">
                  <img src="../assets/images/logo.svg" />
                </g-link>
                <div class="sidebar-container">
                  <div class="sidebar-container-1">
                    <div class="sidebar-item-level-1" v-b-toggle.sidebar-level-2-0>
                      Products
                      <b-icon icon="arrow-right-short" class="float-right" />
                    </div>
                    <div class="sidebar-item-level-1" v-b-toggle.sidebar-level-2-1>
                      Solutions
                      <b-icon icon="arrow-right-short" class="float-right" />
                    </div>
                    <g-link class="sidebar-item-level-1" to="/about/" @click="hide">
                      Plans
                      <b-icon icon="arrow-right-short" class="float-right" />
                    </g-link>
                    <g-link class="sidebar-item-level-1" to="/journal/" @click="hide">
                      Journal
                      <b-icon icon="arrow-right-short" class="float-right" />
                    </g-link>
                    <div class="sidebar-item-level-1" v-b-toggle.sidebar-level-2-2>
                      Company
                      <b-icon icon="arrow-right-short" class="float-right" />
                    </div>

                    <div class="sidebar-buttons d-flex flex-row mt-5 justify-content-center">
                      <b-button variant="link">Login</b-button>
                      <b-button variant="primary">Sign Up</b-button>
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
                      <div class="sidebar-container">
                        <!-- Content -->
                        <div class="row no-gutters align-items-stretch nowrap">
                          <div class="sidebar-item-level-2-title px-5 mb-3" @click="hide">
                            <b-icon icon="arrow-left-short" class="mr-2" />Products
                          </div>
                          <div class="col col-12 left-panel mb-3">
                            <g-link class="sidebar-item-level-2" to="/matching-marketplace/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IMarket />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{market.title}}</p>
                                  <p class="drop-subtitle text-transition">{{market.subtitle}}</p>
                                </div>
                              </div>
                              <ul class="grey-panel feature-list">
                                <li
                                  v-for="item in market.examples"
                                  :key="item.example"
                                >{{ item.example }}</li>
                              </ul>
                            </g-link>
                          </div>
                          <b-dropdown-divider></b-dropdown-divider>
                          <div class="col col-12 left-panel mb-3">
                            <g-link class="sidebar-item-level-2" to="/ecommerce/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IEcomm />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ecom.title}}</p>
                                  <p class="drop-subtitle text-transition">{{ecom.subtitle}}</p>
                                </div>
                              </div>
                              <ul class="grey-panel feature-list">
                                <li
                                  v-for="item in ecom.examples"
                                  :key="item.example"
                                >{{ item.example }}</li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 left-panel mb-3">
                            <g-link class="sidebar-item-level-2" to="/supply-chain/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <ISupply />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{supply.title}}</p>
                                  <p class="drop-subtitle text-transition">{{supply.subtitle}}</p>
                                </div>
                              </div>
                              <ul class="grey-panel feature-list">
                                <li
                                  v-for="item in supply.examples"
                                  :key="item.example"
                                >{{ item.example }}</li>
                              </ul>
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
                      <div class="sidebar-container">
                        <!-- Content -->
                        <div class="row no-gutters align-items-stretch nowrap">
                          <div class="sidebar-item-level-2-title px-5 mb-3" @click="hide">
                            <b-icon icon="arrow-left-short" class="mr-2" />Solutions
                          </div>
                          <div class="col col-12 left-panel mb-3">
                            <g-link class="sidebar-item-level-2" to="/sourcing-buyers/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <ISource />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{source.title}}</p>
                                  <p class="drop-subtitle text-transition">{{source.subtitle}}</p>
                                </div>
                              </div>
                              <ul class="grey-panel feature-list">
                                <li
                                  v-for="item in source.examples"
                                  :key="item.example"
                                >{{ item.example }}</li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 left-panel mb-3">
                            <g-link class="sidebar-item-level-2" to="/product-buyers/" exact>
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IProduct />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{product.title}}</p>
                                  <p class="drop-subtitle text-transition">{{product.subtitle}}</p>
                                </div>
                              </div>
                              <ul class="grey-panel feature-list">
                                <li
                                  v-for="item in product.examples"
                                  :key="item.example"
                                >{{ item.example }}</li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 left-panel mb-3">
                            <g-link class="sidebar-item-level-2" to="/garment-makers/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IGM />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{gm.title}}</p>
                                  <p class="drop-subtitle text-transition">{{gm.subtitle}}</p>
                                </div>
                              </div>
                              <ul class="grey-panel feature-list">
                                <li
                                  v-for="item in gm.examples"
                                  :key="item.example"
                                >{{ item.example }}</li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 left-panel mb-3">
                            <g-link class="sidebar-item-level-2" to="/input-suppliers/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IIS />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ip.title}}</p>
                                  <p class="drop-subtitle text-transition">{{ip.subtitle}}</p>
                                </div>
                              </div>
                              <ul class="grey-panel feature-list">
                                <li
                                  v-for="item in ip.examples"
                                  :key="item.example"
                                >{{ item.example }}</li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 left-panel mb-3">
                            <g-link class="sidebar-item-level-2" to="/service-providers/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <ISP />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{sp.title}}</p>
                                  <p class="drop-subtitle text-transition">{{sp.subtitle}}</p>
                                </div>
                              </div>
                              <ul class="grey-panel feature-list">
                                <li
                                  v-for="item in sp.examples"
                                  :key="item.example"
                                >{{ item.example }}</li>
                              </ul>
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
                      <div class="sidebar-container">
                        <!-- Content -->
                        <div class="row no-gutters align-items-stretch nowrap mb-2">
                          <div class="sidebar-item-level-2-title px-5 mb-3" @click="hide">
                            <b-icon icon="arrow-left-short" class="mr-2" />Company
                          </div>
                          <div class="col col-12 px-5 mb-3">
                            <b-dropdown-header>Company</b-dropdown-header>
                            <g-link
                              class="sidebar-item-level-2 drop-title-singular d-flex align-items-center"
                              to="/about/"
                              @click="hide"
                            >
                              <div class="drop-image-sm">
                                <IAbout />
                              </div>
                              <div class="drop-text">About Us</div>
                            </g-link>
                            <g-link
                              class="sidebar-item-level-2 drop-title-singular d-flex align-items-center"
                              to="/careers/"
                              @click="hide"
                            >
                              <div class="drop-image-sm">
                                <ICareer />
                              </div>
                              <div class="drop-text">Careers</div>
                            </g-link>
                          </div>
                          <div class="col col-12 px-5 mb-3">
                            <b-dropdown-header>Support</b-dropdown-header>
                            <g-link
                              class="sidebar-item-level-2 drop-title-singular d-flex align-items-center"
                              to="/contact/"
                              @click="hide"
                            >
                              <div class="drop-image-sm">
                                <IContact />
                              </div>
                              <div class="drop-text">Contact Us</div>
                            </g-link>

                            <g-link
                              class="sidebar-item-level-2 drop-title-singular d-flex align-items-center"
                              to="/privacy/"
                              @click="hide"
                            >
                              <div class="drop-image-sm">
                                <IPrivacy />
                              </div>
                              <div class="drop-text">Privacy & Terms</div>
                            </g-link>
                          </div>
                          <div class="col col-12 px-5 mb-3">
                            <b-dropdown-header>Partnerships</b-dropdown-header>
                            <g-link
                              class="sidebar-item-level-2 drop-title-singular d-flex align-items-center"
                              to="/partnerships/"
                              @click="hide"
                            >
                              <div class="drop-image-sm">
                                <IPartnership />
                              </div>
                              <div class="drop-text">Partner with us</div>
                            </g-link>
                          </div>
                        </div>
                      </div>
                    </template>
                  </b-sidebar>
                </div>
              </template>
            </b-sidebar>
          </b-navbar-nav>
        </div>
      </div>
    </b-container>
  </b-navbar>
</template>

<!-- SCRIPTS -->
<script>
import { TastyBurgerButton } from "vue-tasty-burgers";
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
import IContact from "@/components/compIcons/IContact";
import ICareer from "@/components/compIcons/ICareer";
import IPartnership from "@/components/compIcons/IPartnership";

export default {
  components: {
    "tasty-burger-button": TastyBurgerButton,
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
    IContact,
    ICareer,
    IPartnership
  },
  data() {
    return {
      market: {
        title: "Matching Marketplace",
        subtitle: "some text here1",
        examples: [{ example: "market1" }, { example: "market2" }]
      },
      ecom: {
        title: "E-commerce",
        subtitle: "some text here1",
        examples: [{ example: "Ecom1" }, { example: "Ecom2" }]
      },
      supply: {
        title: "Supply Chain Solutions",
        subtitle: "some text here1",
        examples: [{ example: "Supply1" }, { example: "Supply2" }]
      },
      source: {
        title: "Sourcing Buyers",
        subtitle: "some text here1",
        examples: [{ example: "Source1" }, { example: "Source2" }]
      },
      product: {
        title: "Product Buyers",
        subtitle: "some text here1",
        examples: [{ example: "product1" }, { example: "product2" }]
      },
      gm: {
        title: "Garment Makers",
        subtitle: "some text here1",
        examples: [{ example: "gm1" }, { example: "gm2" }]
      },
      ip: {
        title: "Input Suppliers",
        subtitle: "some text here1",
        examples: [{ example: "is1" }, { example: "is2" }]
      },
      sp: {
        title: "Service Providers",
        subtitle: "some text here1",
        examples: [{ example: "sp1" }, { example: "sp2" }]
      },
      hover0: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,

      buttonType: "spin",
      isActive: false,
      size: "s",
      color: "#0d1537"
    };
  },

  methods: {
    onToggle(active) {
      // Toggle menu
    }
  }
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
// MAIN ELLEMENTS

.nav-item {
  margin-left: 20px;
  padding: 1.2rem 0;
}

.burger {
  z-index: 1500;
  position: relative;
}

.logo {
  width: 8rem;
  display: block;
}

//DROPDOWN

.dropdown-container {
  display: flex;
  flex-direction: row;
  padding: 0;
}

#products-drop {
  width: 45rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
#solutions-drop {
  width: 45rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

#company-drop {
  width: 45rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.dropdown-header {
  letter-spacing: 1px;
  font-size: 0.75rem !important;
  text-transform: uppercase;
  padding: 0;
  color: $text-light-on-light;
}

.left-panel {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.grey-panel {
  background-color: #f7f8fc;
}

.right-panel {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.dropdown-link {
  padding: 0.5rem 0;
}

.drop-image {
  width: 3rem;
  height: 3rem;
  display: block;
}

.dropdown-item:hover,
.dropdown-item:active,
.dropdown-item.active {
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

.drop-image-sm {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
}

.drop-text {
  padding-left: 1rem;
}

.drop-title {
  color: #0d1537;
  font-weight: 600;
  margin: 0;
}

.drop-title-singular {
  padding: 0.5rem 0 !important;
}

.drop-subtitle {
  font-size: 0.875rem;
  color: $text-light-on-light;
  margin: 0;
  font-weight: 300;
}

.feature-list {
  list-style: initial;
  padding: 0 10px;
  margin-top: 1rem;
  li {
    font-weight: 300;
    margin-bottom: 5px;
    color: $text-light-on-light;
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}

//SIDEBAR

#sidebar-level-1,
#sidebar-level-2-0,
#sidebar-level-2-1,
#sidebar-level-2-2 {
  width: 100%;
}

.sidebar-container {
  padding: 3rem 0;
}
.sidebar-container-1 {
  padding: 4rem 0;
}

.b-sidebar-body {
  .logo {
    margin: 1.25rem 3rem;
    position: absolute;
  }
}

.sidebar-item-level-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 3rem;
  color: $text-dark;
  font-size: 1.25rem;

  &:hover {
    color: $primary;
    text-decoration: none;
    font-weight: 600;
  }
}

.sidebar-item-level-2-title {
  display: block;
  width: 100%;
  padding: 0.5rem 3rem;
  color: $text-dark;
  font-size: 1.25rem;

  &:hover {
    color: $primary;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
  }
}

.sidebar-item-level-2 {
  display: block;
  width: 100%;
  padding: 0.25rem 0rem;
  color: $text-dark;
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
