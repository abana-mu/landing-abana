<!-- HTML -->
<template>
  <b-container fluid class="my-5">
    <b-row>
      <b-col
        cols="12"
        lg="6"
        order="1"
        order-lg="0"
        class="flow-section section-container"
      >
        <h3 class="title mb-3">{{ data.title }}</h3>
        <p>{{ data.subtext }}</p>
        <g-link class="col-link" v-if="data.page" :to="data.page">
          {{ data.link }}
          <b-icon-arrow-right-short />
        </g-link>
      </b-col>
      <b-col>
        <div class="svg-container">
          <Flow /></div
      ></b-col>
    </b-row>
  </b-container>
</template>

<!-- SCRIPTS -->
<script>
import Flow from '~/components/compIcons/Flow';
import { BIcon, BIconArrowRightShort } from 'bootstrap-vue';

export default {
  components: {
    Flow,
    BIcon,
    BIconArrowRightShort,
  },
  props: {
    data: Object,
  },
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
.flow-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  .title,
  .subtitle {
    margin: 0;
    text-align: left;
  }
}

.svg-container {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media (min-width: $break-s) {
    width: 80%;
  }
  @media (min-width: $break-collapse) {
    width: 100%;
    margin-bottom: 0rem;
  }
}
</style>
