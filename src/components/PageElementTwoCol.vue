<!-- HTML -->
<template>
  <div>
    <div class="col-container">
      <b-row
        v-for="(row, index) in data"
        :key="index"
        no-gutters
        class="two-col"
      >
        <b-col md class="column-text">
          <b-col cols="11" lg="10" class="p-0">
            <div class="col-headers">
              <h3>{{ row.title }}</h3>
              <p v-if="row.subtext">{{ row.subtext }}</p>
            </div>
            <vue-simple-markdown
              :source="row.content"
              class="md-text"
            ></vue-simple-markdown>
          </b-col>
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
  .col-headers {
    margin-bottom: 20px;
    h3 {
      margin: 0;
    }
    p {
      font-style: italic;
      color: $subtitle-dark;
    }
  }
}

.offset {
  margin: 0 auto 50px auto;
  max-width: 900px;
}
</style>



