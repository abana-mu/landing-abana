<template>
  <Layout class="container">
    <h1>{{ Data.header.title }}</h1>
    <p>{{ Data.header.subtext }}</p>
  </Layout>
</template>

<script>
import Data from "~/_settings/partner.json";

export default {
  metaInfo: {
    title: "Partnerships",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
