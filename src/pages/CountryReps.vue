<template>
  <Layout class="one-section-tight-layout">
    <div>
      <div class="my-20 text-center">
        <h1 class="font-medium text-title text-5xl mb-4">{{ Data.header.title }}</h1>
        <p class="text-lg text-subtitle max-w-2xl mx-auto">{{ Data.header.subtext }}</p>
      </div>

      <div id="tabs" class="mx-auto">
        <div
          class="bg-secondary-400 grid grid-cols-2 gap-4 sm:gap-0 sm:flex sm:flex-row justify-center py-4"
        >
          <a
            class="btn-price text-center"
            v-on:click="activetab = index"
            v-bind:class="[activetab === index ? 'active' : '']"
            v-for="(count, index) in Count"
            :key="count.index"
          >{{ count.name }}</a>
        </div>
        <div class="max-w-5xl mx-auto">
          <div v-for="(tab, index) in Count" :key="index">
            <div v-if="activetab === index" class="grid grid-cols-1 md:grid-cols-2">
              <div v-for="reps in tab.data" :key="reps.name">
                <RepCard :data="reps" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/countryreps.json";
import EUData from "~/_settings/eureps.json";
import AFData from "~/_settings/afreps.json";
import AMData from "~/_settings/amreps.json";
import ASData from "~/_settings/asreps.json";
import RepCard from "~/components/RepCard";
import String2 from "~/components/icons/String2";

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
        { name: "Europe", data: EUData.reps },
        { name: "Africa", data: AFData.reps },
        { name: "America", data: AMData.reps },
        { name: "Asia", data: ASData.reps }
      ],
      activetab: 0
    };
  }
};
</script>

<style lang="scss">
.rep-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
