<template>
  <Layout class="index-layout">
    <div v-if="modal">
      <Modal :title="Data.popup.title" :description="Data.popup.text" :cta="Data.popup.cta" :warning="Data.popup.warning" :close="closeModal" :id="1" />
    </div>

    <div id="parallax-over" class="relative z-1 bg-white">
      <div id="banner" class="relative w-full flex flex-col md:flex-row justify-center bg-white">
        <div class="contain relative lg:h-full w-full flex flex-col justify-between z-10 ">
          <div class="z-0 absolute opacity-50 right-0 top-0 w-full lottie-banner">
            <Lottie :options="animationData" />
          </div>
          <div class="z-10 w-full pt-24 pb-20 h-full text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <vue-simple-markdown
              :source="Data.header.title"
              class="marketing text-4xl lg:text-5xl lg:leading-normal font-light mb-6 max-w-5xl mx-auto text-title text-center mb-20"
            ></vue-simple-markdown>

            <div class="contain text-center">
              <g-link to="/registration/" class="btn-xl btn-primary">Register as a free buyer</g-link>
            </div>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden text-center text-gray-50 m-0 z-10">
        <svg class="w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 64" preserveAspectRatio="none">
          <path fill="currentColor" d="M1366,64H0V.0337c205,0,709,55.6648,1366,55.6648Z"></path>
        </svg>
      </div>

      <div class="bg-gray-50 z-10 relative">
        <div class="contain py-24">
          <div>
            <div class="text-primary tracking-wide font-medium text-lg mb-4">Who are we</div>
            <div class="text-2xl font-medium mb-10 max-w-4xl">
              {{ Data.who.title }}
            </div>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <div class="p-10 bg-white shadow-xl rounded-xl">
              <g-image class="mx-auto mb-4 h-16 w-16" src="~/assets/images/database.svg" />
              <div class="text-lg">{{ Data.who.box1 }}</div>
            </div>
            <div class="p-10 bg-white shadow-xl rounded-xl">
              <g-image class="mx-auto mb-4 h-16 w-16" src="~/assets/images/direct.svg" />
              <div class="text-lg">{{ Data.who.box2 }}</div>
            </div>
            <div class="p-10 bg-white shadow-xl rounded-xl">
              <g-image class="mx-auto mb-4 h-16 w-16" src="~/assets/images/opportunities.svg" />
              <div class="text-lg">{{ Data.who.box3 }}</div>
            </div>
            <div class="p-10 bg-white shadow-xl rounded-xl">
              <g-image class="mx-auto mb-4 h-16 w-16" src="~/assets/images/grow.svg" />
              <div class="text-lg">{{ Data.who.box4 }}</div>
            </div>
          </div>
          <div class="contain text-center">
            <g-link to="/registration/" class="btn-lg btn-primary">Register as a free buyer</g-link>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden text-center text-gray-50 m-0">
        <svg class="w-full transform rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 64" preserveAspectRatio="none">
          <path fill="currentColor" d="M1366,64H0V.0337c205,0,709,55.6648,1366,55.6648Z"></path>
        </svg>
      </div>

      <div class="contain-tight py-28">
        <div class="text-4xl lg:text-5xl mb-4 font-bold text-title text-center mb-24">{{ Data.vad.title }}</div>

        <div class="space-y-20">
          <div class="grid md:grid-cols-2 items-center gap-10">
            <div class="flex flex-col">
              <div class="text-2xl font-medium text-primary mb-4">{{ Data.vad.title1 }}</div>
              <div class="text-lg">
                {{ Data.vad.text1 }}
              </div>
            </div>
            <div class="">
              <g-image :src="Data.vad.image1" quality="100" width="750" class="rounded-md w-full shadow-xl" />
            </div>
          </div>

          <div class="grid md:grid-cols-2 items-center gap-10">
            <div class="flex flex-col">
              <div class="text-2xl font-medium text-primary mb-4">{{ Data.vad.title2 }}</div>
              <div class="text-lg">
                {{ Data.vad.text2 }}
              </div>
            </div>
            <div class="">
              <g-image :src="Data.vad.image2" quality="100" width="750" class="rounded-md w-full shadow-xl" />
            </div>
          </div>

          <div class="grid md:grid-cols-2 items-center gap-10">
            <div class="flex flex-col">
              <div class="text-2xl font-medium text-primary mb-4">{{ Data.vad.title3 }}</div>
              <div class="text-lg">
                {{ Data.vad.text3 }}
              </div>
            </div>
            <div class="">
              <g-image :src="Data.vad.image3" quality="100" width="750" class="rounded-md w-full shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 border-t border-b">
        <div class="contain-tight py-28">
          <div class="text-4xl lg:text-5xl mb-4 font-bold text-title text-center mb-8">{{ Data.tp.title }}</div>
          <vue-simple-markdown :source="Data.tp.text" class="marketing text-2xl text-center" data-aos="fade-up" data-aos-duration="800"></vue-simple-markdown>
        </div>
      </div>
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

    <div class="bg-gray-50 border-t border-b">
      <div class="contain my-12">
        <IndexTrusted :data="TrustedData.trusted" class="w-full max-w-screen-lg mx-auto" />
      </div>
    </div>

    <div class="contain text-center my-20">
      <g-link to="/registration/" class="btn-2xl btn-primary">Register as a free buyer</g-link>
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
import Data from '~/_settings/promo-buyer.json';
import TrustedData from '~/_settings/landing.json';
import Lottie from 'vue-lottie';
import Animation from '@/assets/animation/landing.json';
import IndexTrusted from '~/components/IndexTrusted';
import Modal from '~/components/Modal';

export default {
  metaInfo: {
    title: 'ABANA | African Textile & Apparel Marketplace',
    meta: [
      {
        name: 'description',
        content: 'Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.',
      },
    ],
  },
  components: {
    Lottie,
    IndexTrusted,
    Modal,
  },
  data() {
    return {
      Data,
      TrustedData,
      animationData: { animationData: Animation },
      modal: false,
      opened: false,
    };
  },
  mounted() {
    var width = window.innerWidth;
    var that = this;
    var height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

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

        if (window.scrollY > height / 2 && !localStorage.opened) {
          that.openModal();
        }
      });
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
    openModal() {
      this.modal = true;
      localStorage.opened = true;
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

.lottie-banner {
  min-width: 800px;
  margin: 0 auto;
}

.home-links a {
  margin-right: 1rem;
}

.box-row {
  display: flex;
  flex-direction: column;
  @media (min-width: $break-md) {
    flex-direction: row;
  }
}
</style>
