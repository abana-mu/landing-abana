<template>
  <Layout class="index-layout">
    <!-- HEADER -->
    <HeaderBanner
      :title="Data.header.title"
      :subtext="Data.header.subtext"
      :cta="Data.header.cta"
    />
    <DiagonalBreaker colorTop="white" colorBottom="blue" class="mt-4" />
    <!-- BOX -->
    <div class="back-blue overflow-hidden">
      <b-container fluid class="box-container">
        <div class="box">
          <h2 id="boxTitle">{{ Data.boxes.boxTitle }}</h2>
          <p id="boxSub">{{ Data.boxes.boxSubtitle }}</p>

          <b-container class="examples">
            <b-row>
              <b-col cols="12" md="6" class="box-item" data-aos="fade-right">
                <div class="box-image">
                  <ITransf />
                </div>
                <div class="box-text">
                  <h4 class="box-item-title">{{ Data.boxes.boxTextTitle1 }}</h4>
                  <p class="box-item-text">{{ Data.boxes.boxText1 }}</p>
                </div>
              </b-col>
              <b-col cols="12" md="6" class="box-item" data-aos="fade-left">
                <div class="box-image">
                  <IExpect />
                </div>
                <div class="box-text">
                  <h4 class="box-item-title">{{ Data.boxes.boxTextTitle2 }}</h4>
                  <p class="box-item-text">{{ Data.boxes.boxText2 }}</p>
                </div>
              </b-col>
              <b-col cols="12" md="6" class="box-item" data-aos="fade-right">
                <div class="box-image">
                  <INew />
                </div>
                <div class="box-text">
                  <h4 class="box-item-title">{{ Data.boxes.boxTextTitle3 }}</h4>
                  <p class="box-item-text">{{ Data.boxes.boxText3 }}</p>
                </div>
              </b-col>
              <b-col cols="12" md="6" class="box-item" data-aos="fade-left">
                <div class="box-image">
                  <ITax />
                </div>
                <div class="box-text">
                  <h4 class="box-item-title">{{ Data.boxes.boxTextTitle4 }}</h4>
                  <p class="box-item-text">{{ Data.boxes.boxText4 }}</p>
                </div>
              </b-col>
              <b-col cols="12" md="6" class="box-item" data-aos="fade-right">
                <div class="box-image">
                  <IGuar />
                </div>
                <div class="box-text">
                  <h4 class="box-item-title">{{ Data.boxes.boxTextTitle5 }}</h4>
                  <p class="box-item-text">
                    {{ Data.boxes.boxText5 }}
                    <g-link to="/about">About us...</g-link>
                  </p>
                </div>
              </b-col>
              <b-col cols="12" md="6" class="box-item" data-aos="fade-left">
                <div class="box-image">
                  <ITarget />
                </div>
                <div class="box-text">
                  <h4 class="box-item-title">{{ Data.boxes.boxTextTitle6 }}</h4>
                  <p class="box-item-text">{{ Data.boxes.boxText6 }}</p>
                </div>
              </b-col>
            </b-row>
          </b-container>

          <div class="box-button">
            <g-link to="/why-africa">
              <b-button variant="outline-secondary">Why Africa?</b-button>
            </g-link>
          </div>
        </div>
      </b-container>
    </div>
    <DiagonalBreaker colorTop="blue" colorBottom="white" />
    <!-- FLOW -->
    <div class>
      <FlowGraph :title="Data.flow.title" :subtitle="Data.flow.subtitle" />
    </div>
  </Layout>
</template>

<!-- QUERIES -->
<page-query>


</page-query>

<script>
import HeaderBanner from "~/components/HeaderBanner";
import DiagonalBreaker from "~/components/DiagonalBreaker";
import Data from "~/_settings/landing.json";
import ITransf from "@/components/compIcons/ITransf";
import IExpect from "@/components/compIcons/IExpect";
import IGuar from "@/components/compIcons/IGuar";
import ITax from "@/components/compIcons/ITax";
import ITarget from "@/components/compIcons/ITarget";
import INew from "@/components/compIcons/INew";
import FlowGraph from "~/components/FlowGraph";

export default {
  metaInfo: {
    title: "ABANA | African Textile & Apparel Marketplace",
  },
  components: {
    DiagonalBreaker,
    HeaderBanner,
    ITransf,
    IExpect,
    IGuar,
    ITax,
    ITarget,
    INew,
    FlowGraph,
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

#boxTitle {
  text-align: center;
  margin-bottom: 1rem;
  color: white;
}

#boxSub {
  margin: auto auto;
  margin-bottom: 2rem;
  font-weight: 500;
  color: $subtitle-light;
  text-align: center;
}

.examples {
  padding: 3rem 0 1rem 0;
}

.box-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4rem;
  padding: 0;
  @media (min-width: $break-s) {
    padding: 0 2rem;
  }
}

.box-img {
  width: 75px;
  margin-right: 1.5rem;
}

.box-item-title {
  color: white;
  margin-bottom: 0.25rem;
  font-weight: 500;
  //font-size: 1.3rem;
}
.box-item-text {
  color: $subtitle-light;
  margin: 0;
  font-size: 1rem;
}

.box {
  padding: 2rem 0;
  border-radius: 3px;
  .box-button {
    text-align: center;
  }
  a {
    color: $blue;
  }
  @media (min-width: $break-l) {
    padding: 3rem 3rem;
  }
}
</style>
