<template>
  <Layout>
    <div class="my-20 text-center">
      <h1 class="font-medium text-title text-5xl mb-4">{{ Data.header.title }}</h1>
      <p class="text-lg text-subtitle max-w-2xl mx-auto">{{ Data.header.subtext }}</p>
    </div>

    <div class="content overflow-hidden">
      <div class="flex flex-row -mx-2">
        <g-image src="~/assets/images/picture3-c.jpg" blur="40" class="w-1/3 px-2"></g-image>
        <g-image src="~/assets/images/picture2-c.jpg" blur="40" class="w-1/3 px-2"></g-image>
        <g-image src="~/assets/images/picture1-c.jpg" blur="40" class="w-1/3 px-2"></g-image>
      </div>

      <section class="section-content anchor-links">
        <p class="text-center semi-spaced my-10 text-xl uppercase">EXPLORE THE REASONS</p>
        <ul class="flex flex-col lg:flex-row text-center space-y-10 lg:space-y-0">
          <li>
            <a href="#economic">Economic</a>
          </li>
          <li>
            <a href="#social">Social</a>
          </li>
          <li>
            <a href="#environmental">Environmental</a>
          </li>
        </ul>
      </section>

      <hr class="a-keyline" />

      <section v-for="(row, index) in Data.elements" :id="index" class="linked" :key="index">
        <div class="mt-5">
          <OneCol :data="row" class="why-col section-content py-5" />
          <div class="image"></div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/whyafrica.json";
import TwoCol from "~/components/PageElementTwoCol";
import OneCol from "~/components/PageElementOneCol";

export default {
  components: {
    TwoCol,
    OneCol
  },
  metaInfo: {
    title: "Why Africa",
    meta: [
      {
        name: "description",
        content:
          "ABANA is firstly Africa. The continent is on the verge of a resurgence and we are committed to helping the textile and apparel industry thrive in the region."
      }
    ]
  },
  data() {
    return {
      Data
    };
  }
};
</script>

<style lang="scss">
.image {
  margin-top: 3rem;
  height: 210px;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (min-width: $break-xl) {
    background-attachment: fixed;
  }
}

#economic .image {
  background-image: url("~@/assets/images/picture1-b.jpg");
}

#social .image {
  background-image: url("~@/assets/images/picture3-b.jpg");
}

#environmental .image {
  background-image: url("~@/assets/images/picture2-b.jpg");

  @media (min-width: $break-xl) {
    background-position-y: 100%;
  }
}
</style>
