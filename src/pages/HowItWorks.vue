<template>
  <Layout class="one-section-tight-layout">
    <div>
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">{{ Data.header.subtext }}</p>
      </div>
      <section class="section-content">
        <div v-for="category in Data.categories" :key="category.title" class="mb-5">
          <h3 class="how-title mb-3">{{ category.title }}</h3>
          <div
            v-for="(tutorial, index) in category.tutorial"
            :key="tutorial.title"
            class="how-collapse"
          >
            <span v-on:click="toggle(category.title + index)" class="cursor-pointer">
              {{ tutorial.title }}
              <!-- Chevron-Down -->
              <svg
                class="h-5 w-5 ml-3 inline-flex"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>

            <div :id="category.title + index" class="mt-2 hidden">
              <div class="video-container-how">
                <div class="flex justify-content-center video-wrapper">
                  <iframe
                    width="840"
                    height="472.5"
                    :src="tutorial.video | youtubize"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    modestbranding
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/tutorials.json";

export default {
  metaInfo: {
    title: "How it Works",
    meta: [
      {
        name: "description",
        content:
          "Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers."
      }
    ]
  },
  data() {
    return {
      Data
    };
  },
  methods: {
    toggle: function(target) {
      document.getElementById(target).classList.toggle("hidden");
    }
  }
};
</script>

<style lang="scss">
.how-title {
  color: $subtitle-dark;
}

.how-collapse {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 20px;

  background-color: $grey-light;
  border: 1px solid $border;
  border-radius: 6px;

  span {
    display: block;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  .video-container-how {
    margin: 1rem auto;
    width: 100%;
    max-width: 800px;
  }
}
</style>
