<!-- HTML -->
<template>
  <div class="my-5">
    <div>
      <div>
        <div class="svg-container-drop">
          <Drop />
        </div>
      </div>

      <div class="flow-section section-container">
        <h3 class="title mb-3">{{ data.title }}</h3>
        <p>{{ data.subtext }}</p>
        <g-link
          class="inline-flex items-center group"
          v-if="data.page"
          :to="data.page"
        >
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
      </div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import Drop from '~/components/icons/Drop';

export default {
  components: {
    Drop,
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
</style>
