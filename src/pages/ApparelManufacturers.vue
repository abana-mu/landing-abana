<template>
  <Layout>
    <div class="py-20 mb-10 text-center">
      <h1 class="font-medium text-5xl mb-4">{{ Data.header.title }}</h1>
      <p class="text-lg text-subtitle max-w-2xl mx-auto">
        {{ Data.header.subtext }}
      </p>
      <div v-if="Data.header.image" class="mx-auto text-center max-w-5xl">
        <g-image :src="Data.header.image" quality="100" blur="40" width="750" class="mt-12 lg:rounded-md" />
      </div>
    </div>

    <section class="relative">
      <div id="scrollAnchor" class="relative bg-white">
        <p class="text-center semi-spaced mb-10 text-xl">OUR SOLUTIONS</p>
        <div class="block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex contain" aria-label="Tabs">
              <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
              <a v-on:click="activetab = 'b2b'" v-bind:class="[activetab === 'b2b' ? 'active' : '']" class="tab-buttons">
                B2B Platform
              </a>

              <a v-on:click="activetab = 'support'" v-bind:class="[activetab === 'support' ? 'active' : '']" class="tab-buttons" aria-current="page">
                On-the-Ground Support
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="mb-20">
        <transition enter-class="opacity-0" enter-active-class="transition duration-500" leave-active-class="transition duration-200" leave-to-class="opacity-0">
          <div v-show="activetab == 'b2b'">
            <TwoCol :data="Data.b2bblocks" />
            <div class="w-100 text-center">
              <button
                class="btn btn-primary"
                @click="
                  activetab = 'support';
                  scrollToTop();
                "
              >
                See our On-the-Ground Support
              </button>
            </div>
          </div>
        </transition>
        <transition enter-class="opacity-0" enter-active-class="transition duration-500" leave-active-class="transition duration-200" leave-to-class="opacity-0">
          <div v-show="activetab == 'support'">
            <TwoCol :data="Data.supportblocks" />
            <div class="w-100 text-center">
              <button
                class="btn btn-primary"
                @click="
                  activetab = 'b2b';
                  scrollToTop();
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
import Data from '~/_settings/app-man.json';
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
  methods: {
    scrollToTop() {
      window.scrollTo(0, 280);
    },
  },
};
</script>
