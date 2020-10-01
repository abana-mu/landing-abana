<!-- HTML -->
<template>
  <b-row
    no-gutters
    class="two-col reverse"
    v-bind:class="{ isReverse: reverse }"
  >
    <b-col md class="column-text" v-bind:class="{ isRevLayout: reverse }">
      <b-col cols="11" lg="10" class="p-0">
        <h3>{{ title }}</h3>
        <vue-simple-markdown
          :source="text"
          class="md-text"
        ></vue-simple-markdown
      ></b-col>
    </b-col>
    <b-col md class="column-image">
      <div>
        <!-- <g-image src="~/assets/images/matching.jpg" quality="100" /> -->
      </div>
    </b-col>
  </b-row>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: {
    title: String,
    text: Object,
    image: Boolean,
  },
};
</script>

<!-- QUERIES -->
<page-query>
</page-query>

<!-- STYLING -->
<style lang='scss' scoped>
.isReverse {
  flex-direction: row-reverse;
}

.isRevLayout {
  display: flex;
  @media (min-width: $break-m) {
    justify-content: flex-end;
  }
}

.two-col {
  display: flex;
  align-items: center;
  margin-bottom: 75px;
  @media (min-width: $break-m) {
    margin-bottom: 100px;
  }

  .column-text {
    margin-bottom: 30px;
    @media (min-width: $break-m) {
      margin-bottom: 0px;
    }
  }
  .column-image {
    img {
      border-radius: 4px;
      width: 100%;
    }
  }
  h3 {
    margin-bottom: 20px;
  }
}

.offset {
  margin: 0 auto 50px auto;
  max-width: 900px;
}
</style>