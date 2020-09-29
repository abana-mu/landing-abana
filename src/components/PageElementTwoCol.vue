<!-- HTML -->
<template>
  <div>
    <b-row no-gutter class="one-col">
      <b-col cols="12" class="offset text-center">
        <h2 class="spaced">{{ data.title }}</h2>
        <p>{{ data.subtext }}</p>
      </b-col>
    </b-row>
    <div class="col-container">
      <b-row
        v-for="row in data.content"
        :key="row.title"
        no-gutters
        class="two-col"
      >
        <b-col md class="column-text">
          <b-col cols="11" lg="10" class="p-0">
            <h3>{{ row.title }}</h3>
            <vue-simple-markdown
              :source="row.subtext"
              class="md-text"
            ></vue-simple-markdown
          ></b-col>
        </b-col>
        <b-col md class="column-image">
          <div>
            <g-image src="~/assets/images/matching.jpg" quality="100" />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<!-- QUERIES -->
<page-query>
</page-query>

<!-- STYLING -->
<style lang='scss' scoped>
.two-col {
  display: flex;
  align-items: center;
  margin-bottom: 75px;
  @media (min-width: $break-m) {
    margin-bottom: 100px;
  }

  &:nth-child(2n) {
    flex-direction: row-reverse;

    .column-text {
      display: flex;
      @media (min-width: $break-m) {
        justify-content: flex-end;
      }
    }
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



