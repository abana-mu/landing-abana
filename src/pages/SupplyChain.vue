<template>
  <OneSection>
    <h1 data-aos="fade-up">{{Data.header.title}}</h1>
    <p data-aos="fade-up" data-aos-delay="100">{{Data.header.subtext}}</p>
  </OneSection>
</template>

<script>
import Data from "~/_settings/supplychain.json";

export default {
  metaInfo: {
    title: "Supply Chain Solutions",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
