<template>
  <Layout>
    <!-- HEADER -->
    <HeaderBanner :title="Data.title" :subtext="Data.subtext" :cta="Data.cta" />
    <DiagonalBreaker colorTop="white" colorBottom="beige" direction="right" />
    <!-- BOX -->
    <div class="back-beige">
      <b-container fluid class="box-container">
        <div id="box">
          <h2>{{Data.boxTitle}}</h2>
          <vue-simple-markdown :source="Data.boxText" class="boxText"></vue-simple-markdown>
          <g-link to="/why-africa">
            <b-button variant="outline-primary">Why Africa?</b-button>
          </g-link>
        </div>
      </b-container>
    </div>
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

  .boxText {
    margin: auto auto;
    margin-bottom: 2rem;
  }

  @media (min-width: $break-m) {
    width: 80%;
    padding: 5rem 6rem;
  }

  @media (min-width: $break-l) {
    padding: 5rem 7rem;
  }

  @media (min-width: $break-xl) {
    padding: 5rem 10rem;
  }
}
</style>
