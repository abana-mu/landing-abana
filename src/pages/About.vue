<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">{{ Data.header.subtext }}</p>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/aboutus.json";

export default {
  metaInfo: {
    title: "About Us",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
