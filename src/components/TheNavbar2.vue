<!-- HTML -->
<template>
  <nav>
    <div id="announce" :class="{ hidden: !Data.active }">
      <a :href="link" target="_blank">
        {{ Data.text }}
      </a>
    </div>
    <b-navbar class="py-3 px-4 px-sm-5 px-lg-0 my-0 py-lg-0 bg-white" :class="{ navShadow: scrollPosition > 40 }" toggleable="lg" tag="header">
      <div>
        <div class="row top-row w-100 justify-content-between align-items-center ">
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
              <div class="nav-item nav-only" @mouseover="hoverPro = true" @mouseleave="hoverPro = false">
                <a class="nav-link inline-flex items-center">
                  Products
                  <!-- Chevron-Down -->
                  <svg class="h-3 w-3 ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </a>
                <div id="products-drop" class="dropdown-container" v-bind:class="{ dropActive: hoverPro }">
                  <div class="col col-6 left-panel">
                    <div class="left-link-container">
                      <b-dropdown-header id="dropdown-header-1">Our Solutions</b-dropdown-header>
                      <div class="dropdown-link">
                        <g-link class="dropdown-item flex" to="/matching-marketplace/">
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

                      <div class="dropdown-link">
                        <g-link class="dropdown-item flex" to="/supply-chain/">
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

                      <div class="dropdown-link">
                        <a href="/documents/ABANA_Carbon_Emissions.pdf" target="_blank" class="dropdown-item flex">
                          <div class="drop-image">
                            <ICarbon />
                          </div>
                          <div class="drop-text">
                            <p class="drop-title text-transition">
                              {{ carbon.title }}
                            </p>
                            <p class="drop-subtitle text-transition">
                              {{ carbon.subtitle }}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col col-6 right-panel">
                    <div class="left-link-container">
                      <b-dropdown-header id="dropdown-header-1">Ecommerce</b-dropdown-header>

                      <div class="dropdown-link">
                        <g-link class="dropdown-item flex" to="/drops/">
                          <div class="drop-image">
                            <IEcomm />
                          </div>
                          <div class="drop-text">
                            <p class="drop-title text-transition">
                              {{ drops.title }}
                            </p>
                            <p class="drop-subtitle text-transition">
                              {{ drops.subtitle }}
                            </p>
                          </div>
                        </g-link>
                      </div>

                      <div class="dropdown-link">
                        <g-link class="dropdown-item flex" to="/fast-custom/">
                          <div class="drop-image">
                            <IGM />
                          </div>
                          <div class="drop-text">
                            <p class="drop-title text-transition">
                              {{ fastc.title }}
                            </p>
                            <p class="drop-subtitle text-transition">
                              {{ fastc.subtitle }}
                            </p>
                          </div>
                        </g-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Why Africa-->
              <li class="nav-item nav-only">
                <g-link class="nav-link" to="/why-africa/">Why Africa</g-link>
              </li>

              <!-- Sustainability-->
              <li class="nav-item nav-only">
                <g-link class="nav-link" to="/sustainability/">Sustainability</g-link>
              </li>

              <!-- Pricing-->
              <li class="nav-item nav-only">
                <g-link class="nav-link" to="/pricing/">Pricing</g-link>
              </li>

              <!-- Company-->
              <div class="nav-item nav-only" @mouseover="hoverCom = true" @mouseleave="hoverCom = false">
                <a class="nav-link inline-flex items-center">
                  Company
                  <!-- Chevron-Down -->
                  <svg class="h-3 w-3 ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </a>
                <div id="company-drop" class="dropdown-container pt-2 pb-5 justify-content-center" v-bind:class="{ dropActive: hoverCom }">
                  <div class="col col-2">
                    <b-dropdown-header>Company</b-dropdown-header>
                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/about/">
                      <div class="drop-image-sm">
                        <IAbout />
                      </div>
                      <div class="drop-text">About Us</div>
                    </g-link>

                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/careers/">
                      <div class="drop-image-sm">
                        <ICareer />
                      </div>
                      <div class="drop-text">Careers</div>
                    </g-link>

                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/press/">
                      <div class="drop-image-sm">
                        <INews />
                      </div>
                      <div class="drop-text">Press</div>
                    </g-link>
                  </div>

                  <div class="col col-2">
                    <b-dropdown-header>Partnerships</b-dropdown-header>

                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/country-reps/">
                      <div class="drop-image-sm">
                        <ICountryRep />
                      </div>
                      <div class="drop-text">Country Reps</div>
                    </g-link>

                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/freelancers/">
                      <div class="drop-image-sm">
                        <IFreelancers />
                      </div>
                      <div class="drop-text">Freelancers</div>
                    </g-link>

                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/testimonials/">
                      <div class="drop-image-sm">
                        <ITestimonial />
                      </div>
                      <div class="drop-text">Testimonials</div>
                    </g-link>
                  </div>

                  <div class="col col-2">
                    <b-dropdown-header>Support</b-dropdown-header>
                    <div @click="launch(), (hoverCom = false)" class="dropdown-item drop-title-singular flex align-items-center">
                      <div class="drop-image-sm">
                        <IHow />
                      </div>
                      <div class="drop-text">FAQ</div>
                    </div>
                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/how-it-works/">
                      <div class="drop-image-sm">
                        <IVideo />
                      </div>
                      <div class="drop-text">Video Tutorials</div>
                    </g-link>

                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/contact/">
                      <div class="drop-image-sm">
                        <IContact />
                      </div>
                      <div class="drop-text">Contact Us</div>
                    </g-link>

                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/privacy/">
                      <div class="drop-image-sm">
                        <IPrivacy />
                      </div>
                      <div class="drop-text">Privacy</div>
                    </g-link>
                    <g-link class="dropdown-item drop-title-singular flex align-items-center" to="/terms-conditions/">
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
              <a href="https://app.abana.mu/login" class="log-in">{{ cta.sub }}</a>

              <a href="https://app.abana.mu/register-buyer" class="btn btn-primary">
                {{ cta.main }}
              </a>
            </b-navbar-nav>
          </div>

          <!-- Mobile Navigation -->
          <b-navbar-nav class="flex flex-row align-items-center d-lg-none ml-auto">
            <a href="https://app.abana.mu/login" class="log-in pl-2">{{ cta.sub }}</a>
            <NavbarHamburger v-b-toggle.sidebar-level-1 ref="hamburger" />
            <!-- Main SideBar -->
          </b-navbar-nav>
        </div>
      </div>
    </b-navbar>
    <b-sidebar id="sidebar-level-1" no-header bg-variant="white">
      <template v-slot:default="{ hide }">
        <div class="sidebar-container">
          <div class="sidebar-container-1">
            <div class="sidebar-item-level-1" v-b-toggle.sidebar-level-2-0>
              Products
              <!-- Arrow right-short -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </div>

            <div @click="hide">
              <g-link class="sidebar-item-level-1" to="/why-africa/">
                Why Africa
                <!-- Arrow right-short -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </g-link>
            </div>

            <div @click="hide">
              <g-link class="sidebar-item-level-1" to="/sustainability/">
                Sustainability
                <!-- Arrow right-short -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </g-link>
            </div>

            <div @click="hide">
              <g-link class="sidebar-item-level-1" to="/pricing/">
                Pricing
                <!-- Arrow right-short -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </g-link>
            </div>

            <div class="sidebar-item-level-1" v-b-toggle.sidebar-level-2-2>
              Company
              <!-- Arrow right-short -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </div>

            <div class="sidebar-buttons flex mt-5 justify-content-center">
              <a href="https://app.abana.mu/login" class="text-primary text-center w-100 mb-2">{{ cta.sub }}</a>
              <a href="https://app.abana.mu/register-buyer" class="btn btn-primary w-100">{{ cta.main }}</a>
            </div>
          </div>

          <!-- Sidebar for Products -->
          <b-sidebar id="sidebar-level-2-0" class="w-100" right shadow no-header bg-variant="white">
            <template v-slot:default="{ hide }">
              <div class="sidebar-container-2">
                <!-- Content -->
                <div class="row  align-items-stretch nowrap">
                  <div class="sidebar-item-level-2-title" @click="hide">
                    <!-- Arrow left-short -->
                    <svg class="h-5 w-5 mr-2 inline-flex" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5h-5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>

                    Products
                  </div>
                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle">Our Solutions</b-dropdown-header>
                    <div @click="hide">
                      <g-link class="sidebar-item-level-2" to="/matching-marketplace/">
                        <div class="sidebar-item-level-2-container flex align-items-center">
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
                    <g-link class="sidebar-item-level-2" to="/supply-chain/">
                      <div class="sidebar-item-level-2-container flex align-items-center">
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

                  <div class="col col-12 mb-3">
                    <a href="/documents/ABANA_Carbon_Emissions.pdf" target="_blank" class="sidebar-item-level-2">
                      <div class="sidebar-item-level-2-container flex align-items-center">
                        <div class="drop-image">
                          <ICarbon />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ carbon.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ carbon.subtitle }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle">Ecommerce</b-dropdown-header>
                    <g-link class="sidebar-item-level-2" to="/drops/">
                      <div class="sidebar-item-level-2-container flex align-items-center">
                        <div class="drop-image">
                          <IEcomm />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ drops.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ drops.subtitle }}
                          </p>
                        </div>
                      </div>
                    </g-link>
                    <g-link class="sidebar-item-level-2" to="/fast-custom/">
                      <div class="sidebar-item-level-2-container flex align-items-center">
                        <div class="drop-image">
                          <IEcomm />
                        </div>
                        <div class="drop-text">
                          <p class="drop-title text-transition">
                            {{ fastc.title }}
                          </p>
                          <p class="drop-subtitle text-transition">
                            {{ fastc.subtitle }}
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
          <b-sidebar id="sidebar-level-2-2" class="w-100" right shadow no-header bg-variant="white">
            <template v-slot:default="{ hide }">
              <div class="sidebar-container-2">
                <!-- Content -->
                <div class="row  align-items-stretch nowrap mb-2">
                  <div class="sidebar-item-level-2-title" @click="hide">
                    <!-- Arrow left-short -->
                    <svg class="h-5 w-5 mr-2 inline-flex" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5h-5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>

                    Company
                  </div>
                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle">Company</b-dropdown-header>
                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/about/" @click="hide">
                      <div class="drop-image-sm">
                        <IAbout />
                      </div>
                      <div class="drop-text">About Us</div>
                    </g-link>

                    <!-- <g-link
                      class="sidebar-item-level-2 flex align-items-center"
                      to="/sustainability/"
                      @click="hide"
                    >
                      <div class="drop-image-sm">
                        <ISustainability />
                      </div>
                      <div class="drop-text">Sustainability</div>
                    </g-link>-->

                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/careers/" @click="hide">
                      <div class="drop-image-sm">
                        <ICareer />
                      </div>
                      <div class="drop-text">Careers</div>
                    </g-link>
                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/press/" @click="hide">
                      <div class="drop-image-sm">
                        <INews />
                      </div>
                      <div class="drop-text">Press</div>
                    </g-link>
                  </div>

                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle">Partnerships</b-dropdown-header>
                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/country-reps/" @click="hide">
                      <div class="drop-image-sm">
                        <ICountryRep />
                      </div>
                      <div class="drop-text">Our Country Reps</div>
                    </g-link>

                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/freelancers/" @click="hide">
                      <div class="drop-image-sm">
                        <IFreelancers />
                      </div>
                      <div class="drop-text">Freelancers</div>
                    </g-link>

                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/testimonials/" @click="hide">
                      <div class="drop-image-sm">
                        <ITestimonial />
                      </div>
                      <div class="drop-text">Testimonials</div>
                    </g-link>
                  </div>

                  <div class="col col-12 mb-3">
                    <b-dropdown-header class="sidebar-item-level-2-subtitle">Support</b-dropdown-header>
                    <div v-b-toggle.sidebar-level-1 @click="launchMobile()" class="dropdown-item drop-title-singular flex align-items-center">
                      <div class="drop-image-sm">
                        <IHow />
                      </div>
                      <div class="drop-text">FAQ</div>
                    </div>
                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/how-it-works/" @click="hide">
                      <div class="drop-image-sm">
                        <IVideo />
                      </div>
                      <div class="drop-text">Video Tutorials</div>
                    </g-link>
                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/contact/" @click="hide">
                      <div class="drop-image-sm">
                        <IContact />
                      </div>
                      <div class="drop-text">Contact Us</div>
                    </g-link>

                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/privacy/" @click="hide">
                      <div class="drop-image-sm">
                        <IPrivacy />
                      </div>
                      <div class="drop-text">Privacy</div>
                    </g-link>

                    <g-link class="sidebar-item-level-2 flex align-items-center" to="/terms-conditions/" @click="hide">
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
import { BNavbar, BNavbarNav } from 'bootstrap-vue';
import Data from '~/_settings/announce.json';

import { BDropdownHeader, BDropdownDivider } from 'bootstrap-vue';

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
    BNavbar,
    IVideo,
    ICarbon,
    ICountryRep,
    Logo,
    Slogan,
    BNavbarNav,
    BDropdownHeader,
    BDropdownDivider,
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
      link: 'https://' + Data.link,
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
// MAIN ELLEMENTS

.navbar {
  z-index: 1036 !important;
}

.navShadow {
  -webkit-box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
  box-shadow: 0 2px 12px 0 rgba(36, 50, 66, 0.075);
  background-color: white;
  -webkit-transition: all 0.3s;

  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  width: 100%;
  top: 0;
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

.top-row {
  flex-wrap: nowrap;
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

  @media (min-width: $break-sm) {
    padding-bottom: 20px;
    width: 10rem;
  }

  @media (min-width: $break-lg) and (max-width: $break-xl) {
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

  @media (min-width: $break-lg) and (max-width: $break-xl) {
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

  @media (min-width: $break-lg) {
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
  -webkit-transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 10ms;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 10ms;

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

.right-panel {
  padding: 1rem 7rem 3rem 2rem !important;
  display: flex;
}

.dropdown-link {
  padding: 1rem 0;
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
    .bg {
      fill: $lightest-red;
    }
    .dark {
      fill: $primary;
    }
    .light {
      fill: $light-red;
    }
  }
}

.dropdown-item:active,
.dropdown-item.active {
  .drop-image,
  .drop-image-sm {
    .bg {
      fill: $lightest-red;
    }
    .dark {
      fill: $primary;
    }
    .light {
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
  @media (min-width: $break-sm) {
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
    .bg {
      fill: $lightest-red;
    }
    .dark {
      fill: $primary;
    }
    .light {
      fill: $light-red;
    }
  }
}

#announce {
  height: auto;
  background-color: $secondary;
  z-index: 1050;
  position: relative;
  display: flex;
  width: 100%;
  top: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  a {
    color: white;
    font-size: $f14;
    padding: 2px 0;
    @media (min-width: $break-sm) {
      font-size: $f16;
      padding: 6px 0;
    }
  }
}

.hidden {
  display: none !important;
}
</style>
