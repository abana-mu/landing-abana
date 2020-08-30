<template>
  <OneSection>
    <h1 data-aos="fade-up">Matching & Marketplace</h1>
    <h1 data-aos="fade-up">{{Data.header.Title}}</h1>
    <p data-aos="fade-up" data-aos-delay="100">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum
      illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.
    </p>
  </OneSection>
</template>

<script>
import Data from "~/_settings/matching.json";

export default {
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
