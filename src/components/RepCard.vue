<template>
  <div class="rep-card">
    <b-row class="rep-header-no-image d-flex">
      <b-col cols="12" lg="9" class="d-flex flex-row">
        <div class="header-text d-flex flex-column align-items-start">
          <h3>{{ data.name }}</h3>
          <span class="m-0">
            <!-- Geo Alt -->
            <svg
              class="h-5 w-5 mr-2 inline-flex items-center"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            {{ data.location }}
          </span>
        </div>
      </b-col>
      <b-col cols="12" lg="3" class="p-0">
        <div class="d-flex rep-button justify-content-center mt-3 mt-lg-0">
          <a href="mailto:support@abana.mu" class="btn btn-ghost">E-mail</a>
        </div>
      </b-col>
    </b-row>

    <div class="rep-content d-flex flex-column">
      <p>
        <!-- Globe2 -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="mr-3 h-5 w-5 inline-flex items-center text-icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
          />
        </svg>
        {{ data.coverage }}
      </p>
      <p>
        <!-- Briefcase -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="mr-3 h-5 w-5 inline-block text-icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        {{ data.company }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
.rep-card {
  background-color: $white;
  border-radius: 5px;
  overflow: hidden;
  margin: 0.75rem;
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2);
  border: 1px solid $border;
}

.rep-banner {
  height: 150px;
  width: 100%;
  overflow: hidden;
}

.rep-header {
  align-items: center;
  padding: 1.5rem 1rem;
  position: relative;
  align-items: flex-start;

  .header-text {
    padding-left: 106px;
    @media (min-width: $break-m) {
      padding-left: 116px;
    }
  }
}

.rep-header-no-image {
  align-items: center;
  padding: 1.5rem 2rem;
  position: relative;
  align-items: flex-start;
}

.rep-content {
  background-color: $grey-light;
  border-top: 1px solid $border;
  padding: 1rem 2rem;
  p,
  a {
    margin-bottom: 0.25rem;
    color: $text-body;
  }
}

.avatar {
  position: absolute;
  top: -50px;

  img {
    vertical-align: middle;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 4px solid $white;
    @media (min-width: $break-m) {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
