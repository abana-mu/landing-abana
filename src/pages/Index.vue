<template>
  <Layout>
    <b-container fluid>
      <HeaderBanner :title="Data.title" :subtext="Data.subtext" :cta="Data.cta" />
    </b-container>
    <DiagonalBreaker colorTop="white" colorBottom="beige" direction="right" />
    <b-container fluid class="back-beige box-container">
      <div id="box">
        <h2>For Fashion Professionals, by Fashion Professionals</h2>
        <p>
          The Global Apparel Industry is facing its biggest
          <b>disruption</b> in a generation:
        </p>

        <p>
          New DTC players, online distribution channels, and changes in customer expectations and behaviours are
          <b>transforming</b> the whole value chain as we've known it.
        </p>

        <p>
          ABANA helps all buyers
          <b>(re)discover</b> Mauritius, Madagascar and Africa’s know-how in fashion-related manufacturing and take advantage of the Region’s duty-free access to the EU, US and China (Mauritius & Madagascar).
        </p>

        <p>
          Our team brings over
          <b>30 years of experience</b> in manufacturing, sourcing and branding. We understand the distinct needs of all buyers and manufacturers, and provide frictionless, innovative solutions to your specific challenges.
        </p>
        <g-link to="/about">
          <b-button variant="outline-primary" href="about-us">About Us</b-button>
        </g-link>
      </div>
    </b-container>
    <DiagonalBreaker colorTop="beige" colorBottom="white" direction="right" />
  </Layout>
</template>

<!-- QUERIES -->
<page-query>


</page-query>

<script>
import HeaderBanner from "~/components/HeaderBanner";
import DiagonalBreaker from "~/components/DiagonalBreaker";
import Data from "~/_settings/landing.json";

export default {
  metaInfo: {
    title: "ABANA | African Textile & Apparel Marketplace",
  },
  components: {
    DiagonalBreaker,
    HeaderBanner,
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
.box-container {
  padding: 2rem 0;
  @media (min-width: $break-s) {
    padding: 3rem 0;
  }
}

#box {
  position: relative;
  background-color: white;
  padding: 3rem 3rem;
  border-radius: 3px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 22px 25px 0 rgba(0, 0, 0, 0.1);

  h2 {
    margin: auto auto;
    margin-bottom: 3rem;
  }

  p {
    margin: auto auto;
    margin-bottom: 2rem;
  }

  @media (min-width: $break-m) {
    width: 80%;
    padding: 5rem 6rem;
  }

  @media (min-width: $break-l) {
    width: 80%;
    padding: 5rem 10rem;
  }
}
</style>
