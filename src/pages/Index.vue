<template>
  <Layout class="index-layout">
    <div id="parallax-over" class="relative z-1 bg-white">
      <div id="banner" class="relative w-full flex flex-col md:flex-row justify-center bg-white">
        <div class="contain lg:h-full w-full flex flex-col justify-between z-10 mb-20">
          <div class="flex flex-col md:flex-row">
            <div class="w-full pt-24 pb-20 md:w-1/2 h-full text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <vue-simple-markdown :source="Data.header.title" class="colourful text-5xl lg:text-6xl font-medium mb-6 text-title max-w-xl"></vue-simple-markdown>
              <span class="text-lg sm:text-xl lg:text-2xl font-regular mb-12 text-subtitle max-w-lg">{{ Data.header.subtext }}</span>
              <a href="https://meetings.hubspot.com/abana" target="_blank" class="btn-xl btn-primary inline-flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5 mr-4" viewBox="0 0 16 16">
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                  />
                  <path
                    d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z"
                  />
                </svg>
                {{ Data.header.cta }}
              </a>
            </div>
            <div class="w-full md:w-1/2 h-full relative overflow-hidden md:overflow-visible">
              <div id="banner-image" class="md:absolute top-0 left-0">
                <g-image :src="Data.header.image" quality="100" class="w-full" immediate />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 border-t border-b">
        <div class="contain my-12">
          <IndexTrusted :data="Data.trusted" gray read title="Trusted by" class="w-full max-w-screen-lg mx-auto" />
        </div>
      </div>

      <!-- BOX -
    <div class="bg-gray-50 overflow-hidden border my-4 py-4">
      <div class="contain py-8 rounded lg:p-12 text-center">
        <h2 class="text-title font-medium text-3xl mb-4">{{ Data.boxes.header.title }}</h2>
        <p class="text-subtitle text-lg">{{ Data.boxes.header.subtext }}</p>

        <div class="py-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(box, index) in Data.boxes.boxes" :key="box.title" cols="12" md="6" class="flex flex-col items-center text-center p-0 max-w-2xl mx-auto mb-1 sm:px-4 md:px-8">
              <component :is="index" class="h-24 w-24 rounded-full overflow-hidden mb-6"></component>
              <div class="flex flex-col">
                <h4 class="text-title text-xl font-medium mb-2">{{ box.title }}</h4>
                <p class="m-0 max-w-lg">{{ box.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <g-link to="/why-africa" class="btn btn-ghost">
            Why Africa?
          </g-link>
        </div>
      </div>
    </div>
      -->
      <div class="bg-white"></div>

      <section class="z-1 bg-white">
        <div class="contain">
          <div class="my-20 md:mt-32 md:mb-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="col-span-1 flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1200">
                <vue-simple-markdown :source="Data.digHeader.title" class="colourful text-5xl lg:text-6xl mb-4 font-bold text-title max-w-2xl"></vue-simple-markdown>
                <div class="text-lg lg:text-xl max-w-xl leading-loose">{{ Data.digHeader.subtext }}</div>
              </div>
              <div class="col-span-1 md:pl-6" data-aos="fade-up" data-aos-duration="1200">
                <Flow class="hidden" />
                <Lottie :options="networkAnimationData" />
              </div>
            </div>
          </div>

          <div class="flex-row items-start hidden lg:flex">
            <div class="flex justify-between flex-col pt-10 pb-10 pl-0 lg:px-3 w-2/5">
              <div :id="'block' + index" class="block-item pt-44 pb-44 flex flex-col pr-6" v-for="(block, index) in Data.digBlock" :key="index">
                <h2 class="mb-4 text-4xl lg:text-5xl font-medium text-title">{{ block.title }}</h2>
                <p class="mb-4 text-xl">{{ block.subtext }}</p>
              </div>
            </div>
            <div id="image-container" class="sticky block w-3/5">
              <div class="h-full relative overflow-hidden rounded-lg">
                <div
                  :id="'block' + index + '-image'"
                  v-bind:class="[
                    index == 0
                      ? 'relative h-full w-full flex items-center justify-center bg-white'
                      : 'opacity-0 absolute top-0 h-full w-full flex items-center justify-center bg-white transition duration-300',
                  ]"
                  v-for="(block, index) in Data.digBlock"
                  :key="index + 'image'"
                >
                  <g-image :src="block.image" quality="100" class="object-cover w-full" immediate />
                </div>
              </div>
            </div>
          </div>

          <div class="flex-row items-start flex lg:hidden">
            <div class="flex justify-between flex-col pl-0 w-full">
              <div class="pb-20 flex flex-col" v-for="(block, index) in Data.digBlock" :key="index + 'mobile'">
                <h2 class="mb-4 text-4xl lg:text-5xl font-medium text-title">{{ block.title }}</h2>
                <p class="mb-4 text-xl">{{ block.subtext }}</p>

                <div class="mt-10 h-96 relative w-full flex items-center justify-center bg-white overflow-hidden rounded-lg">
                  <g-image :src="block.image" quality="100" class="object-cover w-full" immediate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="z-1 bg-white pb-20 md:pb-40">
        <div class="contain">
          <div class="my-20 md:mt-32 md:mb-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="col-span-1 flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1200">
                <vue-simple-markdown :source="Data.anaHeader.title" class="colourful text-5xl lg:text-6xl mb-4 font-bold text-title max-w-2xl"></vue-simple-markdown>
                <div class="text-lg lg:text-xl max-w-xl leading-loose">{{ Data.anaHeader.subtext }}</div>
              </div>
              <div class="col-span-1 md:pl-6" data-aos="fade-up" data-aos-duration="1200">
                <Flow class="hidden" />
                <Lottie :options="supportAnimationData" />
              </div>
            </div>
          </div>

          <div class="flex-row items-start hidden lg:flex">
            <div class="flex justify-between flex-col pt-10 pb-10 pl-0 lg:px-3 w-2/5">
              <div :id="'block1' + index" class="block-item pt-44 pb-44 flex flex-col pr-6" v-for="(block, index) in Data.anaBlock" :key="index">
                <h2 class="mb-4 text-4xl lg:text-5xl font-medium text-title">{{ block.title }}</h2>
                <p class="mb-4 text-xl">{{ block.subtext }}</p>
                <div class="space-y-2">
                  <g-link v-for="link in block.links" :key="link.linkText" class="group inline-flex items-center text-primary hover:underline text-lg" :to="link.url">
                    {{ link.linkText }}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5 ml-2 transform transition group-hover:translate-x-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </g-link>
                </div>
              </div>
            </div>
            <div id="image-container" class="sticky block w-3/5">
              <div class="h-full relative overflow-hidden rounded-lg">
                <div
                  :id="'block1' + index + '-image'"
                  v-bind:class="[
                    index == 0
                      ? 'relative h-full w-full flex items-center justify-center bg-white opacity-important'
                      : 'opacity-0 absolute top-0 h-full w-full flex items-center justify-center bg-white transition duration-300',
                  ]"
                  v-for="(block, index) in Data.anaBlock"
                  :key="index + 'image'"
                >
                  <g-image :src="block.image" quality="100" class="object-cover w-full" immediate />
                </div>
              </div>
            </div>
          </div>

          <div class="flex-row items-start flex lg:hidden">
            <div class="flex justify-between flex-col pl-0 w-full">
              <div class="pb-20 flex flex-col" v-for="(block, index) in Data.anaBlock" :key="index + 'mobile'">
                <h2 class="mb-4 text-4xl lg:text-5xl font-medium text-title">{{ block.title }}</h2>
                <p class="mb-4 text-xl">{{ block.subtext }}</p>

                <div class="mt-10 h-96 relative w-full flex items-center justify-center bg-white overflow-hidden rounded-lg">
                  <g-image :src="block.image" quality="100" class="object-cover w-full" immediate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="spacer" class="hidden md:flex"></div>
    <div id="parallax-under" class="overflow-hidden bg-primary md:h-full top-0 z-0 w-full">
      <div class="contain pt-28">
        <h2 class="text-2xl lg:text-5xl font-medium mb-16 text-center text-primary-100">What industry leading voices are saying:</h2>

        <div class="py-4 mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div class="flex flex-col justify-around bg-white rounded-lg shadow-xl border px-8 py-16" v-for="testi in $page.posts.edges" :key="testi.id">
              <div class="w-full max-w-xs px-16 mb-8">
                <g-image :src="testi.node.logo" class="w-full" />
              </div>
              <p class="text-body text-xl pb-16">"{{ testi.node.blurb }}"</p>
              <div class="flex flex-row items-center space-x-4">
                <div class="h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                  <g-image :src="testi.node.image" class="w-full h-full object-cover object-top" />
                </div>
                <div class="flex flex-col text-title">
                  <h4 class="font-bold">{{ testi.node.name }}</h4>
                  <div class="flex flex-col justify-content-center">
                    <p class="text-base">{{ testi.node.title }}</p>
                    <p class="text-sm">{{ testi.node.position }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center pb-10">
          <g-link to="/testimonials/" class="btn btn-light">See full testimonials</g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<!-- QUERIES -->
<page-query>
query{
  posts: allTestimonials(filter: { featured: { eq: true }}){
    edges{
      node{
        id
        title
        featured
        blurb
        name
        position
        image
        logo
      }
    }
  }
}
</page-query>

<script>
import IndexBanner from '~/components/IndexBanner';
import Data from '~/_settings/landing.json';
import Flow from '~/components/icons/Flow';
import ITransf from '@/components/icons/ITransf';
import IExpect from '@/components/icons/IExpect';
import IGuar from '@/components/icons/IGuar';
import ITax from '@/components/icons/ITax';
import ITarget from '@/components/icons/ITarget';
import Lottie from 'vue-lottie';
import supportAnimation from '@/assets/animation/support.json';
import networkAnimation from '@/assets/animation/network.json';

import INew from '@/components/icons/INew';
import IChina from '@/components/icons/IChina';
import IEnv from '@/components/icons/IEnv';
import ICheck from '@/components/icons/ICheck';
import ICal from '@/components/icons/ICal';
import IndexFlowGraph from '~/components/IndexFlowGraph';
import IndexDropGraph from '~/components/IndexDropGraph';
import IndexRepsGraph from '~/components/IndexRepsGraph';
import IndexTrusted from '~/components/IndexTrusted';

export default {
  metaInfo: {
    title: 'ABANA | African Textile & Apparel Marketplace',
    meta: [
      {
        name: 'description',
        content:
          "Africa's Textile and Apparel Industry, at your fingertips. ABANA is an online Sourcing & E-Commerce Platform that shines a light on the Indian Ocean & African Textile & Apparel industry and connects it to the World.",
      },
    ],
  },
  components: {
    Lottie,
    IndexBanner,
    box1: IChina,
    box2: ICheck,
    box3: IEnv,
    box4: ICal,
    IndexFlowGraph,
    IndexDropGraph,
    IndexRepsGraph,
    IndexTrusted,
    Flow,
  },
  data() {
    return {
      Data,
      networkAnimationData: { animationData: networkAnimation },
      supportAnimationData: { animationData: supportAnimation },
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    var width = window.innerWidth;
    if (width > 768) {
      var footer = document.querySelector('footer');
      var over = document.getElementById('parallax-over');
      var spacer = document.getElementById('spacer');
      var under = document.getElementById('parallax-under');
      footer.classList.add('fixed');
      under.classList.add('fixed');
      under.classList.add('opacity-0');
      spacer.style.height = under.getBoundingClientRect().height + footer.getBoundingClientRect().height + 'px';
      window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
          under.classList.remove('opacity-0');
        } else {
          under.classList.add('opacity-0');
        }
        if (over.getBoundingClientRect().bottom > 1) {
          spacer.classList.remove('fixed');
          footer.classList.add('fixed');
          under.classList.add('fixed');
        }
        if (over.getBoundingClientRect().bottom <= 1) {
          spacer.classList.add('fixed');
          footer.classList.remove('fixed');
          under.classList.remove('fixed');
        }
      });
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    isBlockScrolled(el) {
      var block = el.getBoundingClientRect();
      return block.top <= window.innerHeight * 0.5;
    },
    stickyElement() {
      var blocks = document.querySelectorAll('.block-item');
      blocks.forEach((block, index) => {
        let imageBlock = document.getElementById(block.id + '-image');

        if (index % 10 != 0) {
          if (this.isBlockScrolled(block)) {
            imageBlock.classList.remove('opacity-0');
          } else {
            imageBlock.classList.add('opacity-0');
          }
        }
      });
    },
    handleScroll() {
      this.stickyElement();
    },
  },
};
</script>

<style lang="scss" scoped>
footer,
#parallax-under {
  @media (max-width: $break-md) {
    position: static !important;
  }
}

#banner-image {
  width: 125%;
}

#image-container {
  height: calc(100vh - 11.875rem);
  top: 90px;
  padding: 3.75rem 0;
}

.home-links a {
  margin-right: 1rem;
}

#boxTitle {
  text-align: center;
  margin-bottom: 1rem;
}

#boxSub {
  margin: auto auto;
  color: $subtitle-dark;
  margin-bottom: 2rem;
  font-weight: 500;
  text-align: center;
}

.box-row {
  display: flex;
  flex-direction: column;
  @media (min-width: $break-md) {
    flex-direction: row;
  }
}
</style>
