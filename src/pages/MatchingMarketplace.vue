<template>
  <Layout class="one-section-layout">
    <div class="header section-content">
      <h1 class="title" data-aos="fade-up">{{ Data.header.title }}</h1>
      <p class="subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ Data.header.subtext }}
      </p>
      <div class="image-banner">
        <g-image
          immediate
          data-aos="fade-up"
          src="~/assets/images/matching.jpg"
          quality="100"
        />
      </div>
    </div>
    <div class="content">
      <section class="section-content">
        <OneCol />
      </section>
      <section class="section-content">
        <TwoCol />
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/matching.json";
import OneCol from "~/components/PageElementOneCol";
import TwoCol from "~/components/PageElementTwoCol";

export default {
  components: {
    OneCol,
    TwoCol,
  },
  metaInfo: {
    title: "Matching & Marketplace",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
