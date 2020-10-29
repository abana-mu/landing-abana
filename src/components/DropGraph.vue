<!-- HTML -->
<template>
  <b-container fluid class="my-5">
    <b-row>
      <b-col>
        <div class="svg-container-drop">
          <Drop />
        </div>
      </b-col>

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
          <b-icon-arrow-right-short class="arrow-anim" />
        </g-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<!-- SCRIPTS -->
<script>
import Drop from '~/components/compIcons/Drop';
import { BIcon, BIconArrowRightShort } from 'bootstrap-vue';

export default {
  components: {
    Drop,
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
  .title,
  .subtitle {
    margin: 0;
    text-align: left;
  }
}

.svg-container-drop {
  width: 90%;

  margin: 0 auto;
  margin-bottom: 2rem;

  @media (min-width: $break-s) {
    width: 50%;
  }
  @media (min-width: $break-collapse) {
    width: 50%;
    margin-bottom: 0rem;
  }
  @media (min-width: $break-l) {
    width: 60%;
  }
}

.col-link {
  &:hover {
    .b-icon {
      transition: ease-out 0.2s;
      margin-left: 1rem;
    }
  }
  .b-icon {
    margin-left: 0.5rem;
  }
}
</style>
