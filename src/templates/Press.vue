<!-- HTML -->
<template>
  <Layout>
    <div class="mb-5 container">
      <g-link to="/press/" class="sidebar-item-level-2-title mb-3">
        <b-icon icon="arrow-left-short" class="mr-2" />Back
      </g-link>
      <h1 class="title">{{ $page.thisPost.title }}</h1>
      <p class="excerpt">{{ $page.thisPost.excerpt }}</p>
      <p class="date">Posted on: {{ $page.thisPost.date }}</p>

      <div v-html="$page.thisPost.content" class="my-5"></div>

      <p v-if="$page.thisPost.link">
        Original Link: <a class="original-link" href="#">edienodien</a>
      </p>
    </div>
  </Layout>
</template>

<!-- QUERIES -->
<page-query>
  query Press ($path: String!) {
    thisPost: press(path: $path){
      id
      title
      excerpt
      date(format: "DD/MM/YYYY")
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
.excerpt {
  color: $info;
  text-align: center;
}

.original-link {
  text-decoration: underline;
}

.date {
  color: $info;
}
</style>
