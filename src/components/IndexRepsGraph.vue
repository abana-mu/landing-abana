<!-- HTML -->
<template>
  <b-container fluid class="my-5">
    <b-row>
      <b-col cols="12" lg="6" order="1" order-lg="0" class="flow-section section-container">
        <h3 class="title mb-3">{{ data.title }}</h3>
        <p>{{ data.subtext }}</p>
        <g-link class="group inline-flex items-center" v-if="data.page" :to="data.page">
          {{ data.link }}
          <!-- Arrow right-short -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="h-5 w-5 ml-2 transform transition group-hover:translate-x-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </g-link>
      </b-col>
      <b-col>
        <div class="svg-container">
          <Reps />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<!-- SCRIPTS -->
<script>
import Reps from "~/components/icons/Reps";

export default {
  components: {
    Reps
  },
  props: {
    data: Object
  }
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
