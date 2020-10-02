<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">
        {{ Data.header.subtext }}
      </p>
      <div class="image-banner">
        <g-image :src="Data.header.image" quality="100" />
      </div>
    </div>
    <div class="content">
      <String2 />
      <section class="section-content">
        <TwoCol :data="Data.elements" />
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/ecommerce.json";
import OneCol from "~/components/PageElementOneCol";
import TwoCol from "~/components/PageElementTwoCol";
import String1 from "~/components/compIcons/String1";
import String2 from "~/components/compIcons/String2";

export default {
  components: {
    OneCol,
    TwoCol,
    String1,
    String2,
  },
  metaInfo: {
    title: "E-commerce",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
