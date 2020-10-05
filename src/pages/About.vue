<template>
  <Layout>
    <div class="header">
      <div class="logo">
        <Logo />
      </div>
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">{{ Data.header.subtext }}</p>
    </div>
    <section
      v-for="(row, index) in Data.elements"
      :key="index"
      class="about-container"
    >
      <b-row>
        <b-col cols="12" md="4">
          <h2 class="spaced">{{ row.title }}</h2>
        </b-col>
        <b-col cols="12" md="8">
          <p>
            <vue-simple-markdown
              :source="row.subtext"
              class="about-text"
            ></vue-simple-markdown>
          </p>
        </b-col>
      </b-row>
    </section>
  </Layout>
</template>

<script>
import Data from "~/_settings/aboutus.json";
import Logo from "@/components/compIcons/Logo";

export default {
  metaInfo: {
    title: "About Us",
  },
  components: {
    Logo,
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-container {
  padding: 0 1rem;
  margin: 10rem auto;
  max-width: 350px;
  @media (min-width: $break-m) {
    max-width: 750px;
  }
  h2 {
    margin-bottom: 3rem;
  }
}
.header {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
}

.about-text {
  font-size: 1rem;
  line-height: 28px;
  letter-spacing: 0.6px;
}

.logo {
  width: 125%;
  margin: 100px auto;
  position: absolute;
  opacity: 0.05;
  z-index: -1;

  @media (min-width: $break-collapse) {
    width: 75%;
  }
}
</style>
