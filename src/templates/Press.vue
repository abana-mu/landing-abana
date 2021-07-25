<!-- HTML -->
<template>
  <Layout>
    <div class="my-20 contain">
      <g-link to="/press/" class="block hover:underline text-lg mb-10">
        <!-- Arrow left-short -->
        <svg class="h-5 w-5 mr-2 inline-flex" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5h-5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          /></svg
        >Back
      </g-link>
      <h1 class=" text-center font-medium text-title text-4xl mb-8">{{ $page.thisPost.title }}</h1>
      <p class="text-center text-subtitle text-xl mb-10">{{ $page.thisPost.excerpt }}</p>
      <p class="text-caption">Posted on: {{ $page.thisPost.date }}</p>

      <div v-html="$page.thisPost.content" class="my-5"></div>

      <p v-if="$page.thisPost.link">
        Original Link:
        <a class="underline" :href="$page.thisPost.link">{{ $page.thisPost.link }}</a>
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
      link
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
