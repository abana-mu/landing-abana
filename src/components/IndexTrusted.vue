<!-- HTML -->
<template>
  <div class="text-center my-4 py-4 pb-5">
    <div class="contain grid grid-cols-1 md:grid-cols-8 mb-6 items-center">
      <p class="col-span-1 text-lg font-medium">Trusted by:</p>

      <VueSlickCarousel v-bind="settings" class="col-span-1 md:col-span-7 px-6">
        <div v-for="n in Math.ceil(data.length / 4)" :key="n">
          <div class="grid grid-cols-2 sm:grid-cols-4 items-center">
            <div class="trusted-logos" v-for="logo in range(n)" :key="logo.name">
              <a :href="logo.link" target="_blank">
                <g-image :src="logo.image" blur="40" quality="75" :alt="logo.title" class="trusted-image" />
              </a>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <g-link to="/testimonials" class="underline text-gray-400 hover:text-gray-500">Read our Testimonials</g-link>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  components: { VueSlickCarousel },

  props: {
    data: Array,
    control: Boolean,
  },
  data() {
    return {
      settings: {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 4000,
      },
    };
  },
  methods: {
    range: function(n) {
      return this.data.slice((n - 1) * 4, (n - 1) * 4 + 4);
    },
  },
};
</script>

<!-- STYLING -->
<style lang="scss">
.slick-prev {
  left: 0;
  background-image: url("data:image/svg+xml,%3Csvg fill='none' stroke='%23aaa' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E") !important;
  &:before {
    content: none;
    color: #9ca3af;
  }
}

.slick-next {
  right: 0;
  background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='%23aaa' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'%3E%3C/path%3E%3C/svg%3E") !important;

  &:before {
    content: none;
    color: #9ca3af;
  }
}

.slick-disabled {
  opacity: 25%;
}

.trusted-image {
  max-height: 50px;
  max-width: 80%;
  width: auto;
  opacity: 0.6;
  filter: grayscale(1);
}

.trusted-logos {
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: $break-lg) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  a {
    display: block;
  }
}
</style>
