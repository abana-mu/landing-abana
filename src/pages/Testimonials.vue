<template>
  <Layout>
    <div class="container-fluid">
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">{{ Data.header.subtext }}</p>
      </div>
      <b-row>
        <b-col
          cols="12"
          class="mb-5 p-3 testimonial-container"
          v-for="testi in $page.posts.edges"
          :key="testi.id"
        >
          <div
            class="testimonial"
            :style="`background-color:` + testi.node.color"
          >
            <div class="text-side">
              <h3>{{ testi.node.title }}</h3>
              <p>{{ testi.node.subtitle }}</p>
              <vue-simple-markdown
                :source="testi.node.quote"
                class="mb-5"
              ></vue-simple-markdown>
              <h4>{{ testi.node.name }}</h4>
              <p>{{ testi.node.position }}</p>
              <g-link
                :to="testi.node.path"
                class="card-link"
                v-if="testi.node.caseStudy"
                >Read the Case Study</g-link
              >
            </div>
            <div class="image-side">
              <g-image :src="testi.node.image" />
            </div>
          </div>
        </b-col>
      </b-row>
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
    title: 'Press',
    meta: [
      {
        name: 'Press',
        content:
          'We are always on the lookout for talent that wants to help us grow and disrupt the Textile & Apparel industry! Find out more about the job openings we have',
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

.testimonial {
  display: flex;
  flex-direction: column;
  @media (min-width: $break-collapse) {
    flex-direction: row;
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
