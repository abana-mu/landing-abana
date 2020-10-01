<template>
  <Layout class="container">
    <h1>{{ Data.header.title }}</h1>
    <p>{{ Data.header.subtext }}</p>
  </Layout>
</template>

<script>
import Data from "~/_settings/contact.json";

export default {
  metaInfo: {
    title: "Contact Us",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
