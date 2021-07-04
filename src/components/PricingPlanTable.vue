<!-- HTML -->
<template>
  <div>
    <div
      v-for="categories in data.categories"
      class="p-8"
      :key="categories.title"
    >
      <div
        class="plan-category-title p-3 border text-sm font-medium uppercase text-subtitle tracking-wide"
      >
        {{ categories.title }}
      </div>
      <div
        v-for="(features, index) in categories.features"
        :key="index"
        class="flex py-0 px-5 items-center border-b border-l border-r hover:bg-gray-50"
      >
        <div class="text-base w-2/5">
          {{ features.title }}
          <BIconQuestionCircleFill
            v-if="features.tooltip"
            icon="check-circle"
            aria-hidden="true"
            font-scale="1"
            :id="features.title"
            class="ml-2 tooltip-icon"
            offset="2"
          ></BIconQuestionCircleFill>

          <b-tooltip :target="features.title" placement="right">
            {{ features.tooltip }}
          </b-tooltip>
        </div>
        <div class="flex w-3/5 flex-row">
          <div
            v-for="(plans, index) in features.plans"
            :key="index"
            class="h-12 min-h-full flex justify-center items-center border-l p-0 col"
          >
            <!-- Check circle -->
            <svg
              v-if="plans === true"
              class="h-5 w-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
              />
            </svg>

            <!-- X circle -->
            <svg
              v-else-if="plans === false"
              class="h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>

            <div v-else class="text-green-500">{{ plans }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import { BIcon, BIconQuestionCircleFill } from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconQuestionCircleFill,
  },
  props: {
    data: Object,
    type: String,
  },
};
</script>

<!-- QUERIES -->
<page-query>
</page-query>

<!-- STYLING -->
<style lang="scss" scoped>
.pricing-container {
  margin: 0 2rem;

  @media (min-width: $break-m) {
    margin: 0 4rem;
  }
  @media (min-width: $break-l) {
    margin: 0 7rem;
  }
  @media (min-width: $break-xl) {
    margin: 0 10rem;
  }
}

//Features Row
.plan-feature {
  display: flex;
  padding: 0px 20px;
  align-items: center;
  border: 1px solid #d7d7f58f;
  border-top: none;
  &:hover {
    background-color: $grey-light;
  }
}

.tooltip-icon {
  opacity: 0.75;
  cursor: pointer;
}
</style>
