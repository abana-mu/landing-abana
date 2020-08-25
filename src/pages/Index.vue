<template>
  <Layout>
    <!-- HEADER -->
    <HeaderBanner :title="Data.title" :subtext="Data.subtext" :cta="Data.cta" />
    <DiagonalBreaker colorTop="white" colorMiddle="darkblue" colorBottom="blue" />
    <!-- BOX -->
    <div class="back-blue">
      <b-container fluid class="box-container">
        <div id="box">
          <h2>{{Data.boxTitle}}</h2>
          <p>{{Data.boxSubtitle}}</p>

          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="12" md="6">
                <p>{{Data.boxTextTitle1}}</p>
                <p>{{Data.boxText1}}</p>
              </b-col>
              <b-col cols="12" md="6">
                <p>{{Data.boxTextTitle2}}</p>
                <p>{{Data.boxText2}}</p>
              </b-col>
              <b-col cols="12" md="6">
                <p>{{Data.boxTextTitle3}}</p>
                <p>{{Data.boxText3}}</p>
              </b-col>
              <b-col cols="12" md="6">
                <p>{{Data.boxTextTitle4}}</p>
                <p>{{Data.boxText4}}</p>
              </b-col>
              <b-col cols="12" md="6">
                <p>{{Data.boxTextTitle5}}</p>
                <p>{{Data.boxText5}}</p>
              </b-col>
              <b-col cols="12" md="6">
                <p>{{Data.boxTextTitle6}}</p>
                <p>{{Data.boxText6}}</p>
              </b-col>
            </b-row>
          </b-container>

          <g-link to="/why-africa">
            <b-button variant="outline-primary">Why Africa?</b-button>
          </g-link>
        </div>
      </b-container>
    </div>
    <DiagonalBreaker colorTop="blue" colorMiddle="darkblue" colorBottom="white" />
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
}

#box {
  padding: 3rem 3rem;
  border-radius: 3px;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: white;
  }

  .boxText {
    margin: auto auto;
    margin-bottom: 2rem;
    color: $text-light-on-dark;
    text-align: center;
  }

  @media (min-width: $break-m) {
  }

  @media (min-width: $break-l) {
  }

  @media (min-width: $break-xl) {
  }
}
</style>
