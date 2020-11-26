<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">
        {{ Data.header.subtext }}
      </p>
      <div class="image-banner">
        <g-image :src="Data.header.image" quality="100" blur="40" width="750" />
      </div>
    </div>
    <div class="content mb-5">
      <String2 />
      <section class="section-content">
        <TwoCol :data="Data.elements" />
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/supplychain.json";
import OneCol from "~/components/PageElementOneCol";
import TwoCol from "~/components/PageElementTwoCol";
import String1 from "~/components/icons/String1";
import String2 from "~/components/icons/String2";

export default {
  components: {
    OneCol,
    TwoCol,
    String1,
    String2,
  },
  metaInfo: {
    title: "Supply Chain Solutions",
    meta: [
      {
        name: "description",
        content:
          "ABANA has a wide array of tailored services to help you grow in the region. From QA to delivery, we can even help with your financing. Get in touch with us to find out more.",
      },
    ],
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
