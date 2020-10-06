<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">{{ Data.header.subtext }}</p>
    </div>
    <b-container class="my-5">
      <vue-simple-markdown
        :source="Data.content"
        class="md-text"
      ></vue-simple-markdown>
    </b-container>
  </Layout>
</template>



<script>
import Data from "~/_settings/privacy.json";
export default {
  data() {
    return {
      Data,
    };
  },
  metaInfo: {
    title: "Privacy",
  },
};
</script>
