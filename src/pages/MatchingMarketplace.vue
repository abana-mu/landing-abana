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
      <String1 />
      <section class="section-content">
        <OneCol :data="Data.content.database" />
        <TwoCol :data="Data.content.database.elements" />
      </section>
      <String2 />
      <section class="section-content">
        <OneCol :data="Data.content.marketplace" image />
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
import Imbuy from "~/assets/images/alex.png";
import ICheck from "@/components/compIcons/ICheck";

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
