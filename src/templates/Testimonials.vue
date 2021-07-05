<!-- HTML -->
<template>
  <Layout>
    <div class="mb-5 container">
      <g-link to="/testimonials/" class="sidebar-item-level-2-title mb-3">
        <!-- Arrow left-short -->
        <svg class="h-5 w-5 mr-2 inline-flex" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5h-5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" /></svg
        >Back
      </g-link>
      <div class="flex flex-row">
        <div class="text-side" :style="`background-color:` + $page.thisPost.color">
          <h3>{{ $page.thisPost.title }}</h3>
          <p>{{ $page.thisPost.subtitle }}</p>
          <vue-simple-markdown :source="$page.thisPost.quote" class="mb-5"></vue-simple-markdown>
          <h4>{{ $page.thisPost.name }}</h4>
          <p>{{ $page.thisPost.position }}</p>
          <g-link :to="$page.thisPost.path" class="card-link">Case Study</g-link>
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
export default {
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
