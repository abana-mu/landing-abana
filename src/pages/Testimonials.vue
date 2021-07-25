<template>
  <Layout>
    <div class="contain">
      <div class="my-20 text-center">
        <h1 class="font-medium text-5xl">{{ Data.header.title }}</h1>
        <p class="text-lg text-subtitle max-w-2xl mx-auto">{{ Data.header.subtext }}</p>
      </div>
      <div class="mb-5 p-3 testimonial-container" v-for="testi in $page.posts.edges" :key="testi.id">
        <div class="flex flex-col lg:flex-row" :style="`background-color:` + testi.node.color">
          <div class="text-side">
            <h3 class="text-2xl font-medium mb-4">{{ testi.node.title }}</h3>
            <p>{{ testi.node.subtitle }}</p>
            <vue-simple-markdown :source="testi.node.quote" class="text-body text-lg mb-4"></vue-simple-markdown>
            <h4 class="text-xl mb-2">{{ testi.node.name }}</h4>
            <p class="text-lg">{{ testi.node.position }}</p>
            <g-link :to="testi.node.path" class="card-link" v-if="testi.node.caseStudy">Read the Case Study</g-link>
          </div>
          <div class="image-side">
            <g-image :src="testi.node.image" />
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
