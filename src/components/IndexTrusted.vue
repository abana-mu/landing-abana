<!-- HTML -->
<template>
  <div>
    <div v-if="control" class="trusted  container my-4 py-4 pb-5">
      <h4 class="m-0 mb-4 mb-lg-0 mr-lg-5">Trusted by:</h4>
      <b-carousel
        id="trusted-carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="n in Math.ceil(data.length / 4)" :key="n">
          <div class="logo-container">
            <b-row>
              <b-col
                class="trusted-logos"
                v-for="logo in range(n)"
                :key="logo.name"
                cols="6"
                lg="3"
              >
                <a :href="logo.link" target="_blank">
                  <g-image
                    :src="logo.image"
                    blur="40"
                    quality="100"
                    :alt="logo.title"
                  />
                </a>
              </b-col>
            </b-row>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue';

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
  props: {
    data: Object,
    control: Boolean,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    range: function(n) {
      return this.data.slice((n - 1) * 4, (n - 1) * 4 + 4);
    },
  },
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
.carousel {
  width: 100%;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: flex;
  align-items: center;
}

.carousel-item {
  min-height: 150px;
}

.carousel-caption {
  width: 100%;
}

.carousel-caption {
  right: inherit;
  bottom: inherit;
  left: inherit;

  padding-top: 0px;
  padding-bottom: 0px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  z-index: 11;
  background-color: white;
  opacity: 1;
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='%23aaa' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'%3E%3C/path%3E%3C/svg%3E");
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3Csvg fill='none' stroke='%23aaa' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E");
}

.trusted {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: $break-l) {
    flex-direction: row;
  }

  color: #a4a4a4;
  h4 {
    color: #a4a4a4;
    flex-shrink: 0;
  }
  img {
    max-height: 50px;
    max-width: 100%;
    width: auto;
    opacity: 0.6;
    filter: grayscale(1);
  }
}

.trusted-logos {
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (min-width: $break-l) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  a {
    display: block;
  }
}

.logo-container {
  display: flex;
  flex-direction: row;
  .row {
    margin: 0 40px;
    width: 100%;
  }
}
</style>
