<template>
  <Layout>
    <div class="header">
      <h1>{{ Data.header.title }}</h1>
      <p>{{ Data.header.subtext }}</p>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/inputsuppliers.json";

export default {
  metaInfo: {
    title: "Input Suppliers",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
