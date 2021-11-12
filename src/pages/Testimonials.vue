<template>
  <Layout>
    <div class="contain">
      <div class="my-20 text-center">
        <h1 class="font-medium text-5xl">{{ Data.header.title }}</h1>
        <p class="text-lg text-subtitle max-w-2xl mx-auto">{{ Data.header.subtext }}</p>
      </div>

      <div class="mb-5 testimonial-container" v-for="testi in $page.posts.edges" :key="testi.id">
        <div
          class="flex flex-col lg:flex-row p-10 rounded-xl border"
          style="background-color:#f6f9fc;"
        >
          <div class="text-center flex flex-col items-center mb-5 lg:mb-0 lg:w-1/5">
            <div class="w-24 h-24 lg:h-32 lg:w-32 rounded-full overflow-hidden flex-shrink-0 mb-6">
              <g-image :src="testi.node.image" class="w-full h-full object-cover object-top" />
            </div>
            <h4 class="text-xl font-medium">{{ testi.node.name }}</h4>
            <p>{{ testi.node.subtitle }}</p>
            <p class="text-lg">{{ testi.node.position }}</p>
            <div class="w-44 lg:w-4/5 my-8">
              <g-image :src="testi.node.logo" class="w-full" />
            </div>
            <h3 class="italic text-xl font-medium mb-4">{{ testi.node.title }}</h3>
          </div>

          <div class="lg:pl-14 lg:w-4/5">
            <vue-simple-markdown :source="testi.node.quote" class="text-body text-lg mb-4"></vue-simple-markdown>

            <g-link
              :to="testi.node.path"
              class="card-link"
              v-if="testi.node.caseStudy"
            >Read the Case Study</g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  posts: allTestimonials{
    edges{
      node{
        id
        title
        subtitle
        path
        quote
        name
        position
        image
        logo
        caseStudy
      }
    }
  }
}
</page-query>

<script>
import Data from "~/_settings/testimonials.json";

export default {
  components: {},
  metaInfo: {
    title: "Testimonials",
    meta: [
      {
        name: "Testimonials",
        content:
          "Listen to what the voices of the industry have to say about ABANA's impact in the fashion and textile industry"
      }
    ]
  },
  data() {
    return {
      Data
    };
  }
};
</script>

<style lang="scss" scoped>
.testimonial-container:nth-child(even) .text-side {
  order: 2;
}

.testimonial-container:nth-child(odd) .text-side {
  order: 2;
  @media (min-width: $break-collapse) {
    order: inherit;
  }
}

.text-side {
  padding: 64px 20px;
  width: 100%;
  @media (min-width: $break-collapse) {
    width: 60%;
    padding: 64px;
  }
}

.image-side {
  width: 100%;
  position: relative;
  @media (min-width: $break-collapse) {
    width: 40%;
    padding: 24px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
</style>
