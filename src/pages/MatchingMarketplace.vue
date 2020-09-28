<template>
  <Layout class="one-section-layout">
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">
        {{ Data.header.subtext }}
      </p>
      <div class="image-banner">
        <g-image immediate src="~/assets/images/matching.jpg" quality="100" />
      </div>
    </div>
    <div class="content">
      <String2 />
      <section class="section-content">
        <OneCol
          :title="Data.database.title"
          :text="Data.database.subtext"
          image
        />
      </section>
      <String1 />
      <section class="section-content">
        <OneCol
          :title="Data.marketplace.title"
          :text="Data.marketplace.subtext"
        />
        <TwoCol
          :title="Data.marketsuppliers.title"
          :text="Data.marketsuppliers.subtext"
        />
        <TwoCol
          :title="Data.marketbuyers.title"
          :text="Data.marketbuyers.subtext"
          reverse
        />
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/matching.json";
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
    title: "Matching & Marketplace",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
