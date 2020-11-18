<template>
  <Layout class="one-section-tight-layout">
    <div class="height-restriction">
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">
          {{ Data.header.subtext }}
        </p>
      </div>
      <section class="section-content">
        <div
          v-for="category in Data.categories"
          :key="category.title"
          class="mb-5"
        >
          <h3 class="how-title mb-3">{{ category.title }}</h3>
          <div
            v-for="(tutorial, index) in category.tutorial"
            :key="tutorial.title"
            class="how-collapse"
          >
            <span v-b-toggle="category.title + index">
              {{ tutorial.title }}
              <BIconChevronDown class="ml-3" />
            </span>

            <b-collapse :id="category.title + index" class="mt-2">
              <div class="video-container-how">
                <div class="d-flex justify-content-center video-wrapper">
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
            </b-collapse>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/tutorials.json";
import { BCollapse } from "bootstrap-vue";
import { BIcon, BIconChevronDown } from "bootstrap-vue";

export default {
  components: {
    BCollapse,
    BIcon,
    BIconChevronDown,
  },
  metaInfo: {
    title: "How it Works",
    meta: [
      {
        name: "description",
        content:
          "Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.",
      },
    ],
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss">
.height-restriction {
  min-height: calc(100vh - 390px);
}

.how-title {
  color: $subtitle-dark;
}

.how-collapse {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 20px;

  background-color: $grey-light;
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

.b-icon {
  transition: all ease 0.2s;
}

.not-collapsed {
  .b-icon {
    transform: rotate(180deg);
  }
}
</style>
