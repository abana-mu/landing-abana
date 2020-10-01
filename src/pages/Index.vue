<template>
  <Layout class="index-layout">
    <!-- HEADER -->
    <HeaderBanner
      :title="Data.header.title"
      :subtext="Data.header.subtext"
      :cta="Data.header.cta"
    />
    <DiagonalBreaker colorTop="white" colorBottom="grey" class="mt-4" />
    <!-- BOX -->
    <div class="back-grey overflow-hidden">
      <b-container fluid class="box-container">
        <div class="box">
          <h2 class="title">{{ Data.boxes.header.title }}</h2>
          <p class="subtitle">{{ Data.boxes.header.subtext }}</p>

          <b-container class="examples">
            <b-row>
              <b-col
                v-for="(box, index) in Data.boxes.boxes"
                :key="box.title"
                cols="12"
                md="6"
                class="box-item"
              >
                <component :is="index" class="box-image"></component>
                <div class="box-text">
                  <h4>{{ box.title }}</h4>
                  <p class="box-item-text">{{ box.content }}</p>
                </div>
              </b-col>
            </b-row>
          </b-container>

          <div class="box-button">
            <g-link to="/why-africa">
              <b-button variant="outline-primary">Why Africa?</b-button>
            </g-link>
          </div>
        </div>
      </b-container>
    </div>
    <DiagonalBreaker colorTop="grey" colorBottom="white" />
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
import IChina from "@/components/compIcons/IChina";
import IEnv from "@/components/compIcons/IEnv";
import ICheck from "@/components/compIcons/ICheck";
import ICal from "@/components/compIcons/ICal";
import FlowGraph from "~/components/FlowGraph";

export default {
  metaInfo: {
    title: "ABANA | African Textile & Apparel Marketplace",
  },
  components: {
    DiagonalBreaker,
    HeaderBanner,
    box1: IChina,
    box2: ICheck,
    box3: IEnv,
    box4: ICal,
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
}

#boxSub {
  margin: auto auto;
  color: $subtitle-dark;
  margin-bottom: 2rem;
  font-weight: 500;
  text-align: center;
}

.examples {
  padding: 3rem 0 1rem 0;
}

.box-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  padding: 0;
  @media (min-width: $break-s) {
    padding: 0 2rem;
  }
}

.box-text {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.box-img {
  width: 60px;
  margin-bottom: 1.5rem;
}

.box-item-text {
  max-width: 400px;
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
