<template>
  <OneSection>
    <h1 data-aos="fade-up" class="text-center">{{Data.header.title}}</h1>
    <p data-aos="fade-up" data-aos-delay="100">{{Data.header.subtext}}</p>
  </OneSection>
</template>

<script>
import Data from "~/_settings/plans.json";

export default {
  metaInfo: {
    title: "Plans",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>