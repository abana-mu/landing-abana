<!-- HTML -->
<template>
  <Layout>
    <div class="mb-5 container">
      <g-link to="/testimonials/" class="sidebar-item-level-2-title mb-3">
        <b-icon icon="arrow-left-short" class="mr-2" />Back
      </g-link>
      <div class="d-flex flex-row">
        <div
          class="text-side"
          :style="`background-color:` + $page.thisPost.color"
        >
          <h3>{{ $page.thisPost.title }}</h3>
          <p>{{ $page.thisPost.subtitle }}</p>
          <vue-simple-markdown
            :source="$page.thisPost.quote"
            class="mb-5"
          ></vue-simple-markdown>
          <h4>{{ $page.thisPost.name }}</h4>
          <p>{{ $page.thisPost.position }}</p>
          <g-link :to="$page.thisPost.path" class="card-link"
            >Case Study</g-link
          >
        </div>
        <div class="image-side">
          <g-image class="w-100" :src="$page.thisPost.image" />
        </div>
      </div>
      <div>
        <div v-html="$page.thisPost.content" class="my-5"></div>
      </div>
    </div>
  </Layout>
</template>

<!-- QUERIES -->
<page-query>
  query Testimonials ($path: String!) {
    thisPost: testimonials(path: $path){
      id
      title
      subtitle
      path
      quote
      name
      position
      color
      image
      content
    }
  }
</page-query>

<!-- SCRIPTS -->
<script>
import { BIcon, BIconArrowLeftShort } from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconArrowLeftShort,
  },
  metaInfo() {
    return {
      title: this.$page.thisPost.title,
    };
  },
};
</script>

<!-- STYLING -->
<style lang="scss">
.text-side {
  padding: 64px;
  width: 50%;
}

.image-side {
  width: 50%;
}
</style>
