<template>
  <Layout class="one-section-tight-layout">
    <div class="height-restriction">
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">{{ Data.header.subtext }}</p>
        <div class="image-banner"></div>
      </div>

      <section class="back-grey d-none d-sm-block bordered">
        <b-tabs align="center" class="country-rep-tab" lazy>
          <div v-for="(country, index) in Count" :key="index">
            <b-tab v-if="country.data" :title="country.name">
              <div class="rep-container">
                <b-row no-gutters>
                  <b-col v-for="(reps, index) in country.data" :key="index" cols="12" md="6">
                    <RepCard :data="reps" />
                  </b-col>
                </b-row>
              </div>
            </b-tab>
          </div>
        </b-tabs>
      </section>

      <div v-for="(country, index) in Count" :key="index" class="d-sm-none">
        <div v-if="country.data" class="rep-container">
          <h2 class="text-center">{{ country.name }}</h2>
          <b-row no-gutters>
            <b-col v-for="(reps, index) in country.data" :key="index" cols="12" md="6">
              <RepCard :data="reps" />
            </b-col>
          </b-row>
          <String2 />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/countryreps.json";
import RepCard from "~/components/RepCard";
import String2 from "~/components/compIcons/String2";

export default {
  metaInfo: {
    title: "Country Reps",
    meta: [
      {
        name: "description",
        content:
          "Need help with onboarding or general services? Our network of country representatives is ever-growing and offers support services in the main producing and buying markets. Find a rep near you!"
      }
    ]
  },
  components: {
    RepCard,
    String2
  },
  data() {
    return {
      Data,
      Count: [
        { name: "Europe", data: Data.eu_reps },
        { name: "Africa", data: Data.af_reps },
        { name: "America", data: Data.am_reps }
      ]
    };
  }
};
</script>

<style lang="scss">
.height-restriction {
  min-height: calc(100vh - 390px);
}
.rep-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.country-rep-tab .nav-tabs {
  padding: 10px 0;
}
</style>
