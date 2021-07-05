<!-- HTML -->
<template>
  <div>
    <div class="col-container">
      <div
        v-for="(row, index) in data"
        :key="index"
        :id="index"
        no-gutters
        class="two-col"
      >
        <div lg class="column-text">
          <div cols="11" lg="10" class="p-0">
            <div class="col-headers">
              <h3>{{ row.title }}</h3>
              <p v-if="row.subtext">{{ row.subtext }}</p>
            </div>
            <vue-simple-markdown
              :source="row.content"
              class="md-text"
            ></vue-simple-markdown>
            <g-link
              class="group inline-flex items-center"
              v-if="row.page"
              :to="row.page"
            >
              {{ row.link }}
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
        <div lg class="column-image d-flex justify-content-center">
          <div class="col-img-container">
            <g-image :src="row.image" quality="100" blur="40" width="750" />
          </div>
        </div>
      </div>
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

.col-img-container {
  width: 100%;
  @media (min-width: $break-s) {
    width: 75%;
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
