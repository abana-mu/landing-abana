<template>
  <Layout>
    <div class="header">
      <h1>{{ Data.header.title }}</h1>
      <p>{{ Data.header.subtext }}</p>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/sourcingbuyers.json";

export default {
  metaInfo: {
    title: "Sourcing Buyers",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
