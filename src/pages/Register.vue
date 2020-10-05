<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">{{ Data.header.subtext }}</p>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/register.json";

export default {
  metaInfo: {
    title: "Register",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
