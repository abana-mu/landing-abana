<template>
  <OneSection>
    <h1 data-aos="fade-up">{{Data.header.title}}</h1>
    <p data-aos="fade-up" data-aos-delay="100">{{Data.header.subtext}}</p>
  </OneSection>
</template>

<script>
import Data from "~/_settings/garmentmakers.json";

export default {
  metaInfo: {
    title: "Garment Makers",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
