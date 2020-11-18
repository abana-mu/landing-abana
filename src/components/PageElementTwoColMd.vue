<!-- HTML -->
<template>
  <div>
    <div class="col-container">
      <b-row
        v-for="(row, index) in data"
        :key="index"
        :id="index"
        no-gutters
        class="two-col"
      >
        <b-col lg class="column-text">
          <b-col cols="11" lg="10" class="p-0">
            <div class="col-headers">
              <h3>{{ row.title }}</h3>
              <p v-if="row.subtext">{{ row.subtext }}</p>
            </div>
            <vue-simple-markdown
              :source="row.content"
              class="md-text"
            ></vue-simple-markdown>
            <g-link class="col-link" v-if="row.page" :to="row.page"
              >{{ row.link }}<b-icon-arrow-right-short class="arrow-anim"
            /></g-link>
          </b-col>
        </b-col>
        <b-col lg class="column-image">
          <div>
            <g-image :src="row.image" quality="100" blur="40" width="750" />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import { BIcon, BIconArrowRightShort } from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconArrowRightShort,
  },
  props: {
    data: Object,
  },
};
</script>

<!-- QUERIES -->
<page-query>
</page-query>

<!-- STYLING -->
<style lang="scss" scoped>
.two-col {
  display: flex;
  align-items: center;
  margin-bottom: 8rem;
  margin-top: 35px;
  @media (min-width: $break-m) {
    margin-bottom: 8rem;
    margin-top: 8rem;
  }


  .column-text {
    margin-bottom: 30px;
    @media (min-width: $break-m) {
      margin-bottom: 0px;
    }
  }
  .column-image {
    margin-left: 0px;
    margin-right: 0px;
    @media (min-width: $break-collapse) {
      margin-left: 50px;
      margin-right: 0px;
    }
    img {
      border-radius: 6px;
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

.md-text {
  margin-bottom: 1rem;
}

.offset {
  margin: 0 auto 50px auto;
  max-width: 900px;
}
</style>
