<template>
  <Layout>
    <div class="contain">
      <div class="my-20 text-center">
        <h1 class="font-medium text-5xl">{{ Data.header.title }}</h1>
        <p class="text-lg text-subtitle max-w-2xl mx-auto">{{ Data.header.subtext }}</p>
      </div>

      <!-- <div class="py-4 mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            <div
              class="flex flex-col justify-around bg-white rounded-lg shadow-xl border px-8 py-16"
              v-for="testi in $page.posts.edges"
              :key="testi.id"
            >
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
        </div> -->

      <div class="mb-5 testimonial-container" v-for="testi in $page.posts.edges" :key="testi.id">
        <div class="flex flex-col lg:flex-row p-10 rounded-xl border" :style="`background-color:` + testi.node.color">
          <div class="text-center flex flex-col items-center mb-10">
            <div class="w-32 h-32 lg:h-64 lg:w-64  rounded-full overflow-hidden flex-shrink-0 mb-6">
              <g-image :src="testi.node.image" class="w-full h-full object-cover object-top" />
            </div>
            <h3 class="italic text-xl font-medium mb-4">{{ testi.node.title }}</h3>
            <p>{{ testi.node.subtitle }}</p>
            <h4 class="text-xl font-medium">{{ testi.node.name }}</h4>
            <p class="text-lg">{{ testi.node.position }}</p>
          </div>

          <div class="lg:pl-14">
            <vue-simple-markdown :source="testi.node.quote" class="text-body text-lg mb-4"></vue-simple-markdown>

            <g-link :to="testi.node.path" class="card-link" v-if="testi.node.caseStudy">Read the Case Study</g-link>
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
        color
        image
        caseStudy
      }
    }
  }
}
</page-query>

<script>
import Data from '~/_settings/testimonials.json';

export default {
  components: {},
  metaInfo: {
    title: 'Testimonials',
    meta: [
      {
        name: 'Testimonials',
        content: "Listen to what the voices of the industry have to say about ABANA's impact in the fashion and textile industry",
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
