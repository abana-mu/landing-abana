<!-- HTML -->
<template>
  <div class="my-4 py-4 pb-5 flex flex-col items-center justify-center w-full space-y-6 md:space-y-10">
    <p class="text-lg font-medium text-title tracking-widest">Trusted by:</p>
    <VueSlickCarousel v-bind="settings" class="px-6 w-full mb-4">
      <div v-for="n in Math.ceil(data.length / 4)" :key="n">
        <div class="grid grid-cols-2 sm:grid-cols-4 items-center">
          <div class="trusted-logos" v-for="logo in range(n)" :key="logo.name">
            <a :href="logo.link" target="_blank" class="flex justify-center">
              <g-image :src="logo.image" blur="40" quality="75" :alt="logo.title" class="trusted-image" />
            </a>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <g-link to="/testimonials" class="group inline-flex items-center text-body hover:underline hover:text-title">
      Read what they are saying
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="h-5 w-5 ml-2 transform transition group-hover:translate-x-2"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
    </g-link>
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
  filter: grayscale(200%) contrast(250%);
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
}
</style>
