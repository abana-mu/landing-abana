<template>
  <Layout class="one-section-layout container">
    <h1>{{ Data.header.title }}</h1>
    <p>{{ Data.header.subtext }}</p>
  </Layout>
</template>

<script>
import Data from "~/_settings/sustainability.json";

export default {
  metaInfo: {
    title: "Sustainability",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
