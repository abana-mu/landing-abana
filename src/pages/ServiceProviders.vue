<template>
  <Layout>
    <div class="contain mt-8 mb-10 md:mb-20">
      <div class="banner-container">
        <div class="product-banner overlay">
          <h1 class="banner-title" data-aos="fade-up" data-aos-duration="1000">{{ Data.header.title }}</h1>
          <p class="banner-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            {{ Data.header.subtext }}
          </p>
        </div>
        <g-image :src="Data.header.image" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
      </div>
    </div>

    <section class="relative">
      <div class="realtive bg-white">
        <p class="text-center semi-spaced mb-10 text-xl">OUR SOLUTIONS</p>
        <div class="block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex contain" aria-label="Tabs">
              <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
              <a v-on:click="changeTab('b2b')" v-bind:class="[activetab === 'b2b' ? 'active' : '']" class="tab-buttons">B2B Platform</a>

              <a v-on:click="changeTab('support')" v-bind:class="[activetab === 'support' ? 'active' : '']" class="tab-buttons" aria-current="page"
                >On-the-Ground Support</a
              >
            </nav>
          </div>
        </div>
      </div>
      <div class="mb-20">
        <transition
          enter-class="opacity-0"
          enter-active-class="transition duration-500"
          leave-active-class="transition duration-200"
          leave-to-class="opacity-0"
        >
          <div v-show="activetab == 'b2b'">
            <TwoCol isGrey :data="Data.b2bblocks" />
            <div class="my-10 w-100 text-center flex flex-col space-y-10 justify-center items-center">
              <a
                href="https://meetings.hubspot.com/abana"
                target="_blank"
                class="px-16 py-6 text-3xl btn-primary"
              >
                <svg
                  class="h-8 w-8 mr-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                  />
                </svg>
                Book a Demo
              </a>
              
              <button
                class="btn btn-ghost"
                @click="
                  scrollToTop();
                  changeTab('support');
                "
              >
                See our On-the-Ground Support
              </button>
              
            </div>
          </div>
        </transition>
        <transition
          enter-class="opacity-0"
          enter-active-class="transition duration-500"
          leave-active-class="transition duration-200"
          leave-to-class="opacity-0"
        >
          <div v-show="activetab == 'support'">
            <TwoCol isGrey :data="Data.supportblocks" />
            <div class="my-10 w-100 text-center flex flex-col space-y-10 justify-center items-center">
              
              <a
                href="https://meetings.hubspot.com/abana"
                target="_blank"
                class="px-16 py-6 text-3xl btn-primary"
              >
                <svg
                  class="h-8 w-8 mr-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                  />
                </svg>
                Book a Demo
              </a>
              <button
                class="btn btn-ghost"
                @click="
                  scrollToTop();
                  changeTab('b2b');
                "
              >
                Get to know our B2B Platform
              </button>
            
            </div>
          </div>
        </transition>
      </div>
    </section>
  </Layout>
</template>

<script>
import Data from '~/_settings/ser-pro.json';
import OneCol from '~/components/PageElementOneCol';
import TwoCol from '~/components/PageElementTwoCol';
import String1 from '~/components/icons/String1';
import String2 from '~/components/icons/String2';
import ICheck from '@/components/icons/ICheck';

export default {
  components: {
    OneCol,
    TwoCol,
    String1,
    String2,
  },
  metaInfo: {
    title: Data.header.title,
    meta: [
      {
        name: 'description',
        title: Data.header.subtext,
      },
    ],
  },
  data() {
    return {
      Data,
      activetab: 'b2b',
    };
  },
  created() {
    if (this.$router.currentRoute.hash == '#support') {
      this.activetab = 'support';
      window.scrollTo(0, 0);
    } else if (this.$router.currentRoute.hash == '#b2b') {
      this.activetab = 'b2b';
      window.scrollTo(0, 0);
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 280);
    },
    changeTab(e) {
      location.hash = e;
      this.activetab = e;
    },
  },
};
</script>

<style scoped>
.overlay {
  background-color: rgba(47, 37, 74, 0.53);
}
</style>
