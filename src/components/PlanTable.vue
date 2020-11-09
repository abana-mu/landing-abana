<!-- HTML -->
<template>
  <div>
    <div
      v-for="categories in data.categories"
      class="category-container"
      :key="categories"
    >
      <div class="plan-category-title">
        {{ categories.title }}
      </div>
      <div
        v-for="features in categories.features"
        :key="features.title"
        class="plan-feature"
      >
        <div class="plan-feature-title">
          {{ features.title }}
          <BIconQuestionCircleFill
            v-if="features.tooltip"
            icon="check-circle"
            aria-hidden="true"
            font-scale="1"
            v-b-tooltip.hover="{
              placement: 'right',
              customClass: 'my-tooltip-class',
            }"
            class="ml-2 tooltip-icon"
            offset="2"
            :title="features.tooltip"
          ></BIconQuestionCircleFill>
        </div>
        <div class="plan-feature-plans d-flex flex-row">
          <div
            v-for="plans in features.plans"
            :key="plans"
            class="feature-plans-options col"
          >
            <b-icon
              v-if="plans === true"
              icon="check-circle"
              aria-hidden="true"
              variant="success"
              font-scale="1.2"
            ></b-icon>
            <div class="icon-no-container" v-else-if="plans === false">
              <b-icon
                icon="x-circle"
                aria-hidden="true"
                class="icon-no"
                font-scale="1.2"
              ></b-icon>
            </div>

            <div v-else class="text-success">{{ plans }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import {
  BIcon,
  BIconCheckCircle,
  BIconXCircle,
  BIconQuestionCircleFill,
} from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconCheckCircle,
    BIconXCircle,
    BIconQuestionCircleFill,
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
.feature {
  &:hover {
    background-color: $primary;
    cursor: default;
  }
}

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

//Category Container
.category-container {
  padding-bottom: 30px;
}

//Category Title
.plan-category-title {
  padding: 0.75rem;
  color: $subtitle-dark;
  border: 1px solid #d7d7f58f;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
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

//Features title
.plan-feature-title {
  width: 40%;
  font-size: 1rem;
}

//Plans container
.plan-feature-plans {
  width: 60%;
  display: flex;
}

.feature-plans-options {
  justify-content: center;
  align-items: center;
  display: flex;
  border-left: 1px solid #d7d7f58f;
  min-height: 3rem;
  padding: 0;
}

.icon-no-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $grey-light;
}

.icon-no {
  color: #cccccc;
}

.tooltip-icon {
  opacity: 0.75;
  cursor: pointer;
}
</style>
