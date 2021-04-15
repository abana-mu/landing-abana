<!-- HTML -->
<template>
  <div class="col-container">
    <b-row no-gutters class="one-col">
      <b-col cols="12" class="offset p-0">
        <h2 class="spaced">{{ data.title }}</h2>
        <p class="subtitle">{{ data.subtext }}</p>
        <vue-simple-markdown v-if="data.content" :source="data.content" class="text mt-4"></vue-simple-markdown>
      </b-col>
      <b-col v-if="data.image" cols="12" class="text-center">
        <div class="image-banner">
          <g-image :src="data.image" quality="100" blur="40" width="750" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: {
    data: Object,
    image: Boolean
  }
};
</script>

<!-- QUERIES -->
<page-query>
</page-query>

<!-- STYLING -->
<style lang='scss' scoped>
.one-col {
  //margin-top: 150px;

  .text {
    text-align: left;
    max-width: 650px;
    margin: 0 auto;
    @media (min-width: $break-collapse) {
      text-align: center;
    }

    @media (min-width: $break-s) and (max-width: $break-l) {
      margin: 0 auto;
      width: 90%;
    }
  }
}

.offset {
  text-align: center;
  margin: 0 auto 00px auto;
  max-width: 900px;
  .subtitle {
    margin-bottom: 1rem;
  }
}
.image-banner {
  margin-top: 50px;
}
</style>