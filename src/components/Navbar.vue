<!-- HTML -->
<template>
  <b-navbar
    class="p-4 px-sm-5 px-lg-0 my-0 py-lg-0 bg-white bbody"
    :class="{navShadow: scrollPosition > 50}"
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
            <div class="nav-item" @mouseover="hoverPro = true" @mouseleave="hoverPro = false">
              <a class="nav-link">Products</a>
              <div id="products-drop" class="dropdown-container" v-show="hoverPro">
                <div class="col col-6 left-panel">
                  <div class="left-link-container">
                    <b-dropdown-header id="dropdown-header-1">Products</b-dropdown-header>
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
                          <p class="drop-title text-transition">{{ market.title }}</p>
                          <p class="drop-subtitle text-transition">{{ market.subtitle }}</p>
                        </div>
                      </g-link>
                    </div>

                    <div
                      class="dropdown-link"
                      @mouseover="hover2 = true"
                      @mouseleave="hover2 = false"
                    >
                      <g-link class="dropdown-item d-flex align-items-center" to="/ecommerce/">
                        <div class="drop-image">
                          <IEcomm />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">{{ ecom.title }}</p>
                          <p class="drop-subtitle text-transition">{{ ecom.subtitle }}</p>
                        </div>
                      </g-link>
                    </div>

                    <div
                      class="dropdown-link"
                      @mouseover="hover3 = true"
                      @mouseleave="hover3 = false"
                    >
                      <g-link class="dropdown-item d-flex align-items-center" to="/supply-chain/">
                        <div class="drop-image">
                          <ISupply />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">{{ supply.title }}</p>
                          <p class="drop-subtitle text-transition">{{ supply.subtitle }}</p>
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
                        <span class="feature-details">{{ item.example }}</span>
                      </li>
                    </ul>
                  </div>
                  <div v-show="hover2">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in ecom.examples" :key="item.example">
                        <span class="feature-title">{{ item.title }}</span>
                        <span class="feature-details">{{ item.example }}</span>
                      </li>
                    </ul>
                  </div>
                  <div v-show="hover3">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in supply.examples" :key="item.example">
                        <span class="feature-title">{{ item.title }}</span>
                        <span class="feature-details">{{ item.example }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Solutions-->
            <div class="nav-item" @mouseover="hoverSol = true" @mouseleave="hoverSol = false">
              <a class="nav-link">Solutions</a>
              <div id="solutions-drop" class="dropdown-container" v-show="hoverSol">
                <div class="col col-6 left-panel">
                  <div class="left-link-container">
                    <b-dropdown-header id="dropdown-header-1">For Buyers</b-dropdown-header>
                    <div
                      class="dropdown-link"
                      @mouseover="hover1 = true"
                      @mouseleave="hover1 = false"
                    >
                      <g-link
                        class="dropdown-item d-flex align-items-center"
                        to="/sourcing-buyers/"
                      >
                        <div class="drop-image">
                          <ISource />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">{{ source.title }}</p>
                          <p class="drop-subtitle text-transition">{{ source.subtitle }}</p>
                        </div>
                      </g-link>
                    </div>
                    <div
                      class="dropdown-link"
                      @mouseover="hover2 = true"
                      @mouseleave="hover2 = false"
                    >
                      <g-link class="dropdown-item d-flex align-items-center" to="/product-buyers/">
                        <div class="drop-image">
                          <IProduct />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">{{ product.title }}</p>
                          <p class="drop-subtitle text-transition">{{ product.subtitle }}</p>
                        </div>
                      </g-link>
                    </div>
                    <b-dropdown-header id="dropdown-header-2">For Makers</b-dropdown-header>
                    <div
                      class="dropdown-link"
                      @mouseover="hover3 = true"
                      @mouseleave="hover3 = false"
                    >
                      <g-link class="dropdown-item d-flex align-items-center" to="/garment-makers/">
                        <div class="drop-image">
                          <IGM />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">{{ gm.title }}</p>
                          <p class="drop-subtitle text-transition">{{ gm.subtitle }}</p>
                        </div>
                      </g-link>
                    </div>
                    <div
                      class="dropdown-link"
                      @mouseover="hover4 = true"
                      @mouseleave="hover4 = false"
                    >
                      <g-link
                        class="dropdown-item d-flex align-items-center"
                        to="/input-suppliers/"
                      >
                        <div class="drop-image">
                          <IIS />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">{{ ip.title }}</p>
                          <p class="drop-subtitle text-transition">{{ ip.subtitle }}</p>
                        </div>
                      </g-link>
                    </div>
                    <div
                      class="dropdown-link"
                      @mouseover="hover5 = true"
                      @mouseleave="hover5 = false"
                    >
                      <g-link
                        class="dropdown-item d-flex align-items-center"
                        to="/service-providers"
                      >
                        <div class="drop-image">
                          <ISP />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">{{ sp.title }}</p>
                          <p class="drop-subtitle text-transition">{{ sp.subtitle }}</p>
                        </div>
                      </g-link>
                    </div>
                  </div>
                </div>
                <div class="col col-6 grey-panel">
                  <div v-show="hover1">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in source.examples" :key="item.example">
                        <span class="feature-title">{{ item.title }}</span>
                        <span class="feature-details">{{ item.example }}</span>
                      </li>
                    </ul>
                  </div>
                  <div v-show="hover2">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in product.examples" :key="item.example">
                        <span class="feature-title">{{ item.title }}</span>
                        <span class="feature-details">{{ item.example }}</span>
                      </li>
                    </ul>
                  </div>
                  <div v-show="hover3">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in gm.examples" :key="item.example">
                        <span class="feature-title">{{ item.title }}</span>
                        <span class="feature-details">{{ item.example }}</span>
                      </li>
                    </ul>
                  </div>
                  <div v-show="hover4">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in ip.examples" :key="item.example">
                        <span class="feature-title">{{ item.title }}</span>
                        <span class="feature-details">{{ item.example }}</span>
                      </li>
                    </ul>
                  </div>
                  <div v-show="hover5">
                    <b-dropdown-header>Features:</b-dropdown-header>
                    <ul class="feature-list">
                      <li v-for="item in sp.examples" :key="item.example">
                        <span class="feature-title">{{ item.title }}</span>
                        <span class="feature-details">{{ item.example }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Why Africa-->
            <li class="nav-item">
              <g-link class="nav-link" to="/why-africa/">Why Africa</g-link>
            </li>

            <!-- Plans-->
            <li class="nav-item">
              <g-link class="nav-link" to="/plans/">Plans</g-link>
            </li>

            <!-- Company-->
            <div class="nav-item" @mouseover="hoverCom = true" @mouseleave="hoverCom = false">
              <a class="nav-link">Company</a>
              <div
                id="company-drop"
                class="dropdown-container pt-2 pb-5 justify-content-center"
                v-show="hoverCom"
              >
                <div class="col col-2">
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
                <div class="col col-2">
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
            </div>
          </b-navbar-nav>
        </div>

        <!-- Right aligned nav items -->
        <div class="col col-auto">
          <!-- Desktop Navigation -->
          <b-navbar-nav class="d-none d-lg-block ml-auto">
            <b-button variant="link" class="text-dark">{{ cta.sub }}</b-button>
            <b-button variant="primary">{{cta.main}}</b-button>
          </b-navbar-nav>

          <!-- Mobile Navigation -->
          <b-navbar-nav class="d-block d-lg-none ml-auto">
            <Hamburger v-b-toggle.sidebar-level-1 />
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
                    <g-link class="sidebar-item-level-1" to="/why-africa/" @click="hide">
                      Why Africa
                      <b-icon icon="arrow-right-short" class="float-right" />
                    </g-link>
                    <g-link class="sidebar-item-level-1" to="/about/" @click="hide">
                      Plans
                      <b-icon icon="arrow-right-short" class="float-right" />
                    </g-link>

                    <div class="sidebar-item-level-1" v-b-toggle.sidebar-level-2-2>
                      Company
                      <b-icon icon="arrow-right-short" class="float-right" />
                    </div>

                    <div class="sidebar-buttons d-flex flex-row mt-5 justify-content-center">
                      <b-button variant="link">{{ cta.sub}}</b-button>
                      <b-button variant="primary">{{cta.main}}</b-button>
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
                          <div class="col col-12 mb-3">
                            <g-link class="sidebar-item-level-2" to="/matching-marketplace/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IMarket />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ market.title }}</p>
                                  <p class="drop-subtitle text-transition">{{ market.subtitle }}</p>
                                </div>
                              </div>
                              <ul class="grey-panel-mobile feature-list">
                                <li v-for="item in market.examples" :key="item.example">
                                  <span class="feature-title">{{ item.title }}</span>
                                  <span class="feature-details">{{ item.example }}</span>
                                </li>
                              </ul>
                            </g-link>
                          </div>
                          <b-dropdown-divider></b-dropdown-divider>
                          <div class="col col-12 mb-3">
                            <g-link class="sidebar-item-level-2" to="/ecommerce/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IEcomm />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ ecom.title }}</p>
                                  <p class="drop-subtitle text-transition">{{ ecom.subtitle }}</p>
                                </div>
                              </div>
                              <ul class="grey-panel-mobile feature-list">
                                <li v-for="item in ecom.examples" :key="item.example">
                                  <span class="feature-title">{{ item.title }}</span>
                                  <span class="feature-details">{{ item.example }}</span>
                                </li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 mb-3">
                            <g-link class="sidebar-item-level-2" to="/supply-chain/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <ISupply />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ supply.title }}</p>
                                  <p class="drop-subtitle text-transition">{{ supply.subtitle }}</p>
                                </div>
                              </div>
                              <ul class="grey-panel-mobile feature-list">
                                <li v-for="item in supply.examples" :key="item.example">
                                  <span class="feature-title">{{ item.title }}</span>
                                  <span class="feature-details">{{ item.example }}</span>
                                </li>
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
                          <div class="col col-12 mb-3">
                            <g-link class="sidebar-item-level-2" to="/sourcing-buyers/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <ISource />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ source.title }}</p>
                                  <p class="drop-subtitle text-transition">{{ source.subtitle }}</p>
                                </div>
                              </div>
                              <ul class="grey-panel-mobile feature-list">
                                <li v-for="item in source.examples" :key="item.example">
                                  <span class="feature-title">{{ item.title }}</span>
                                  <span class="feature-details">{{ item.example }}</span>
                                </li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 mb-3">
                            <g-link class="sidebar-item-level-2" to="/product-buyers/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IProduct />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ product.title }}</p>
                                  <p class="drop-subtitle text-transition">{{ product.subtitle }}</p>
                                </div>
                              </div>
                              <ul class="grey-panel-mobile feature-list">
                                <li v-for="item in product.examples" :key="item.example">
                                  <span class="feature-title">{{ item.title }}</span>
                                  <span class="feature-details">{{ item.example }}</span>
                                </li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 mb-3">
                            <g-link class="sidebar-item-level-2" to="/garment-makers/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IGM />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ gm.title }}</p>
                                  <p class="drop-subtitle text-transition">{{ gm.subtitle }}</p>
                                </div>
                              </div>
                              <ul class="grey-panel-mobile feature-list">
                                <li v-for="item in gm.examples" :key="item.example">
                                  <span class="feature-title">{{ item.title }}</span>
                                  <span class="feature-details">{{ item.example }}</span>
                                </li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 mb-3">
                            <g-link class="sidebar-item-level-2" to="/input-suppliers/">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <IIS />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ ip.title }}</p>
                                  <p class="drop-subtitle text-transition">{{ ip.subtitle }}</p>
                                </div>
                              </div>
                              <ul class="grey-panel-mobile feature-list">
                                <li v-for="item in ip.examples" :key="item.example">
                                  <span class="feature-title">{{ item.title }}</span>
                                  <span class="feature-details">{{ item.example }}</span>
                                </li>
                              </ul>
                            </g-link>
                          </div>
                          <div class="col col-12 mb-3">
                            <g-link class="sidebar-item-level-2" to="/service-providers">
                              <div
                                class="sidebar-item-level-2-container px-5 mb-2 d-flex align-items-center"
                              >
                                <div class="drop-image">
                                  <ISP />
                                </div>
                                <div class="drop-text">
                                  <p class="drop-title text-transition">{{ sp.title }}</p>
                                  <p class="drop-subtitle text-transition">{{ sp.subtitle }}</p>
                                </div>
                              </div>
                              <ul class="grey-panel-mobile feature-list">
                                <li v-for="item in sp.examples" :key="item.example">
                                  <span class="feature-title">{{ item.title }}</span>
                                  <span class="feature-details">{{ item.example }}</span>
                                </li>
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

                            <g-link
                              class="sidebar-item-level-2 drop-title-singular d-flex align-items-center"
                              to="/sustainability/"
                              @click="hide"
                            >
                              <div class="drop-image-sm">
                                <ISustainability />
                              </div>
                              <div class="drop-text">Sustainability</div>
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
import IContact from "@/components/compIcons/IContact";
import ICareer from "@/components/compIcons/ICareer";
import IPartnership from "@/components/compIcons/IPartnership";
import ISustainability from "@/components/compIcons/ISustainability";

export default {
  components: {
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
            example:
              "Use multiple criteria to find the most appropriate partners",
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
              "Products available directly from factories in low MOQs & short lead-times (coming soon)",
          },
        ],
      },
      supply: {
        title: "Supply Chain Solutions",
        subtitle: "Tailored services to help you grow in the region",
        examples: [
          {
            title: "QUALITY",
            example: "Quality Control, Testing",
          },
          {
            title: "SUSTAINABILITY",
            example: "Social, environmental, ethical Compliance",
          },
          {
            title: "FOLLOW-UP",
            example:
              "Sampling to delivery follow-up, logistics & documentation",
          },
          {
            title: "FULL SERVICE",
            example:
              "Virtual supplier accessing a network of smaller factories",
          },
          {
            title: "ADVISORY",
            example: "Customized advice to succeed and grow in the region",
          },
        ],
      },
      source: {
        title: "Sourcing Buyers",
        subtitle: "Find new factories, products and input-suppliers",
        examples: [
          {
            title: "NEW TO THE REGION",
            example:
              "Search our factory database, post requests for information, quickly & easily request quotes from multiple suppliers",
          },
          {
            title: "CONSOLIDATE YOUR SOURCING",
            example:
              "Find more products and suppliers, make the region significant for your business",
          },
          {
            title: "EXPLORE NEW POSSIBILITIES",
            example:
              "Connect with material and accessory suppliers active in the region",
          },
        ],
      },
      product: {
        title: "Product Buyers",
        subtitle: "Shop on-line for sophisticated products in low MOQs",
        examples: [
          {
            title: "ON TREND – NOW",
            example:
              "Order from our ready-to-ship DROP collections, add your private label, start selling within a week. Improve your margins, lower your risk",
          },
          {
            title: "YOUR PRIVATE LABEL BASICS – FAST",
            example:
              "Build your order directly with our selection of high-quality suppliers. Customize and get delivered within weeks",
          },
          {
            title: "FIND SPECIAL OFFERS",
            example:
              "Take advantage of stock garments and other opportunities directly from factories on our marketplace",
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
              "Find, connect, message and build relationships with the most appropriate buyers for your products",
          },
          {
            title: "SEIZE ORDER OPPORTUNITIES",
            example: "View and instantly respond to buyer requests ",
          },
          {
            title: "SEE WHAT’S THERE",
            example:
              "Post offers & needs to buyers, other factories, input suppliers and service providers and monitor new business opportunities using our tagging and notification tools",
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
              "Find and build relationships with the most appropriate buyers and factories for your products",
          },
          {
            title: "UNDERSTAND NEEDS",
            example:
              "Post offers and needs to buyers, factories, other input suppliers and service providers and monitor new business opportunities using our tagging and notification tools. ",
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

.navShadow {
  -webkit-box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
  box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  .nav-item {
    padding: 0.75rem 0;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }
  .dropdown-container {
    margin-top: 14px;
  }
}

.nav-item {
  cursor: pointer;
  margin-left: 20px;
  padding: 1.2rem 0;
}

.logo {
  width: 8rem;
  display: block;
}

.btn-link {
  color: $text-dark;
}

//DROPDOWN

.dropdown-container {
  display: flex;
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

.left-link-container {
  width: 425px;
}

.dropdown-header {
  letter-spacing: 1px;
  font-size: 0.75rem !important;
  text-transform: uppercase;
  padding: 0;
  color: $text-light-on-light;
}

.left-panel {
  padding: 1rem 2rem 3rem 0 !important;
  display: flex;
  justify-content: flex-end;
}

.grey-panel {
  background-color: #fafafa;
  padding: 1rem 7rem 3rem 2rem !important;
  border-left: 1px solid rgba(0, 0, 0, 0.125);
}
.grey-panel-mobile {
  background-color: #fafafa;
  padding: 1.5rem !important;
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
  font-size: 0.9rem;
  color: $text-light-on-light;
  margin: 0;
  font-weight: 300;
  white-space: normal;
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
  color: $text-dark;
  font-weight: 500;
  text-transform: uppercase;
}

.feature-details {
  color: $text-light-on-light;
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
  outline: none;
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
