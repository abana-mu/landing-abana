<template>
  <Layout>
    <div class="contain">
      <div class="banner-container">
        <div class="product-banner overlay">
          <h1 class="font-medium text-titleOnDark text-4xl md:text-5xl mb-4" data-aos="fade-up" data-aos-duration="1000">{{ Data.header.title }}</h1>
        </div>
        <g-image :src="Data.header.image" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
      </div>
    </div>
    <div class="contain text-center my-20">
      <p class="max-w-4xl mx-auto text-lg">{{ Data.header.intro }}</p>
      <a href="#form" class="flex btn-lg btn-primary my-10 max-w-xs mx-auto text-center ">Get a quote</a>
    </div>
    <div class="contain mb-10">
      <h2 class="text-center text-title text-3xl font-medium mb-8">End-to-End Sourcing Solutions</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in Data.services" :key="service.title">
          <div class="col-span-1 h-full flex flex-col py-8 px-8 bg-gray-50 rounded-lg">
            <img class="w-16 mb-4" :src="service.icon" alt="Workcation" />
            <h3 class="font-medium text-xl mb-4">{{ service.title }}</h3>
            <p>
              {{ service.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="contain my-12">
      <IndexTrusted :data="Data.partners" :read="false" title="Our partners" class="w-full max-w-screen-lg mx-auto" />
    </div>

    <div class="relative overflow-hidden text-center text-secondary-400 m-0 z-10">
      <svg class="w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 64" preserveAspectRatio="none">
        <path fill="currentColor" d="M1366,64H0V.0337c205,0,709,55.6648,1366,55.6648Z" />
      </svg>
    </div>

    <div class="bg-secondary-400 -mb-px -mt-px relative z-10">
      <div class="contain py-12">
        <h2 class="text-center text-titleOnDark text-3xl font-medium mb-8">Africa, the next sourcing destination</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="why in Data.africa" :key="why.title">
            <div class="col-span-1 flex flex-col items-center py-4 px-4 bg-gray-50 rounded-lg text-center">
              <g-image class="w-16 mb-4" :src="why.icon" :alt="why.title" />
              <h3 class="font-medium text-xl mb-4">{{ why.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-hidden text-center bg-gray-50 text-secondary-400 m-0">
      <svg class="w-full transform rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 64" preserveAspectRatio="none">
        <path fill="currentColor" d="M1366,64H0V.0337c205,0,709,55.6648,1366,55.6648Z" />
      </svg>
    </div>

    <div class="bg-gray-50">
      <div class="contain py-12 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-4 flex-wrap justify-between">
        <a :href="logo.link" class="flex justify-center p-2" v-for="logo in Data.compliance" :key="logo.name">
          <g-image class="compliance-image" :src="logo.image" :alt="logo.name" />
        </a>
      </div>
    </div>

    <div class="pt-16 text-center bg-gray-50">
      <h2 class="text-3xl lg:text-4xl font-medium text-center pb-10">About us</h2>
    </div>
    <div>
      <div class="pb-12 bg-white sm:pb-16">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-50" />
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6">Brands</dt>
                  <dd class="order-1 text-5xl font-extrabold text-primary-300">{{ Data.about.brands }}</dd>
                </div>
                <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6">Manufacturers</dt>
                  <dd class="order-1 text-5xl font-extrabold text-primary-300">{{ Data.about.manu }}</dd>
                </div>
                <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt class="order-2 mt-2 text-lg leading-6">Years</dt>
                  <dd class="order-1 text-5xl font-extrabold text-primary-300">{{ Data.about.years }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <a href="#form" class="flex btn-lg btn-primary my-10 max-w-xs mx-auto text-center ">Get a quote</a>
      </div>
    </div>

    <div class="mx-auto px-4 xs:px-5 sm:px-6 lg:px-10 xl:px-24 2xl:px-10 max-w-screen-2xl mb-10">
      <h2 class="text-3xl font-medium text-center mb-10">Our product line</h2>
      <p class="max-w-4xl mx-auto text-lg">{{ Data.products.text }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 text-center mb-6">
        <div class="col-span-1">
          <g-image :src="Data.products.image1" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
        <div class="col-span-1">
          <g-image :src="Data.products.image2" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
        <div class="col-span-1">
          <g-image :src="Data.products.image3" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
        <div class="col-span-1">
          <g-image :src="Data.products.image4" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
        <div class="col-span-1">
          <g-image :src="Data.products.image5" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
        <div class="col-span-1">
          <g-image :src="Data.products.image6" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
        <div class="col-span-1">
          <g-image :src="Data.products.image7" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
        <div class="col-span-1">
          <g-image :src="Data.products.image8" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
        <div class="col-span-1">
          <g-image :src="Data.products.image9" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
      </div>
    </div>

    <div class="contain my-12">
      <IndexTrusted :data="Data.trusted" :read="false" title="Brands who trust us" class="w-full max-w-screen-lg mx-auto" />
    </div>

    <div class="contain my-12">
      <h2 class="text-3xl font-medium text-center mb-10">Our factories</h2>

      <VueSlickCarousel v-bind="settings" class="px-6 w-full mb-4">
        <div class="company-image-container" v-for="image in Data.comPics" :key="image.image">
          <g-image :src="image.image" :alt="image.image" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
        </div>
      </VueSlickCarousel>
    </div>

    <div id="form" class="bg-gray-50 border border-r-0 border-l-0 mb-10 py-24">
      <div class="contain ">
        <div class="bg-white border border-r-0 border-l-0 sm:border-r sm:border-l sm:rounded-lg p-10 -mx-5 sm:m-0">
          <h2 class="text-3xl font-medium">Get a <span class="text-primary">quick</span> quote / estimate</h2>
          <p class="mt-1 max-w-2xl text-base text-gray-500">Use a permanent address where you can receive mail.</p>
          <form name="quote" method="post" v-on:submit.prevent="handleSubmit" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="quote" />
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label for="name" class="block text-sm font-medium text-gray-700"> First name </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    v-model="formData.name"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="surname" class="block text-sm font-medium text-gray-700"> Last name </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    autocomplete="surname"
                    v-model="formData.surname"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    v-model="formData.email"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="company" class="block text-sm font-medium text-gray-700"> Your Company </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    v-model="formData.company"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p class="mt-1 text-sm text-gray-500 italic">Optional</p>
              </div>

              <div class="sm:col-span-3">
                <label for="price" class="block text-sm font-medium text-gray-700"> Target Price </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="price"
                    v-model="formData.price"
                    id="price"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p class="mt-1 text-sm text-gray-500 italic">Optional</p>
              </div>

              <div class="sm:col-span-2">
                <label for="product" class="block text-sm font-medium text-gray-700"> Product</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="product"
                    id="product"
                    v-model="formData.product"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p class="mt-1 text-sm text-gray-500 italic">Optional</p>
              </div>

              <div class="sm:col-span-2">
                <label for="material" class="block text-sm font-medium text-gray-700"> Material </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="material"
                    id="material"
                    v-model="formData.material"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p class="mt-1 text-sm text-gray-500 italic">Optional</p>
              </div>

              <div class="sm:col-span-2">
                <label for="quantity" class="block text-sm font-medium text-gray-700"> Quantity</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    v-model="formData.quantity"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p class="mt-1 text-sm text-gray-500 italic">Optional</p>
              </div>

              <div class="sm:col-span-4">
                <label for="destination" class="block text-sm font-medium text-gray-700">Destination </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    v-model="formData.destination"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p class="mt-1 text-sm text-gray-500 italic">Optional</p>
              </div>

              <div class="sm:col-span-6">
                <label for="other" class="block text-sm font-medium text-gray-700"> Other Info </label>
                <div class="mt-1">
                  <textarea
                    id="other"
                    name="other"
                    rows="4"
                    v-model="formData.other"
                    class="shadow-sm focus:ring-primary-300 focus:border-primary-300 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">Brief description what you are looking for.</p>
              </div>
            </div>
            <div class="w-full text-center mt-6">
              <button type="submit" class="btn-lg btn-primary w-full sm:w-60">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/promo-agency.json';
import IndexTrusted from '~/components/IndexTrusted';

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  components: {
    IndexTrusted,
    VueSlickCarousel,
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
  created() {
    //window.scrollTo(0, 0);
  },
  mounted() {
    //window.scrollTo(0, 0);
  },
  data() {
    return {
      Data,
      settings: {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 4000,
      },
      formData: {},
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push('/thanks'))
        .catch((error) => alert(error));
    },
  },
};
</script>
<style scoped>
.overlay {
  background-color: rgba(6, 7, 55, 0.53);
}

.company-image-container {
  display: relative;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
}

.compliance-image {
  max-height: 50px;
  width: auto;
}
</style>
