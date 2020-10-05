<!-- HTML -->
<template>
  <div>
    <div
      v-for="categories in data.categories"
      class="category-container"
      :key="categories"
    >
      <div class="plan-category-title">{{ categories.title }}</div>
      <div
        v-for="features in categories.features"
        :key="features.title"
        class="plan-feature"
      >
        <div class="plan-feature-title">{{ features.title }}</div>
        <div class="plan-feature-plans d-flex flex-row">
          <div class="feature-plans-options col" v-if="type === 'Basic'">
            <b-icon
              v-if="features.plans.basic === true"
              icon="check-circle"
              aria-hidden="true"
              variant="success"
              font-scale="1.2"
            ></b-icon>
            <div
              class="icon-no-container"
              v-else-if="features.plans.basic === false"
            >
              <b-icon
                icon="x-circle"
                aria-hidden="true"
                class="icon-no"
                font-scale="1.2"
              ></b-icon>
            </div>
            <div v-else class="text-success">
              {{ features.plans.basic }}
            </div>
          </div>
          <div class="feature-plans-options col" v-else-if="type === 'Member'">
            <b-icon
              v-if="features.plans.member === true"
              icon="check-circle"
              aria-hidden="true"
              variant="success"
              font-scale="1.2"
            ></b-icon>
            <div
              class="icon-no-container"
              v-else-if="features.plans.member === false"
            >
              <b-icon
                icon="x-circle"
                aria-hidden="true"
                class="icon-no"
                font-scale="1.2"
              ></b-icon>
            </div>
            <div v-else class="text-success">
              {{ features.plans.member }}
            </div>
          </div>
          <div class="feature-plans-options col" v-else-if="type === 'Growth'">
            <b-icon
              v-if="features.plans.growth === true"
              icon="check-circle"
              aria-hidden="true"
              variant="success"
              font-scale="1.2"
            ></b-icon>
            <div
              class="icon-no-container"
              v-else-if="features.plans.growth === false"
            >
              <b-icon
                icon="x-circle"
                aria-hidden="true"
                class="icon-no"
                font-scale="1.2"
              ></b-icon>
            </div>
            <div v-else class="text-success">
              {{ features.plans.growth }}
            </div>
          </div>
          <div class="feature-plans-options col" v-else>
            <b-icon
              v-if="features.plans.pro === true"
              icon="check-circle"
              aria-hidden="true"
              variant="success"
              font-scale="1.2"
            ></b-icon>
            <div
              class="icon-no-container"
              v-else-if="features.plans.pro === false"
            >
              <b-icon
                icon="x-circle"
                aria-hidden="true"
                class="icon-no"
                font-scale="1.2"
              ></b-icon>
            </div>
            <div v-else class="text-success">
              {{ features.plans.pro }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import { BIcon, BIconCheckCircle, BIconXCircle } from "bootstrap-vue";

export default {
  components: {
    BIcon,
    BIconCheckCircle,
    BIconXCircle,
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
  padding: 0px 0 0 20px;
  align-items: center;
  border: 1px solid #d7d7f58f;
  border-top: none;
  &:hover {
    background-color: $grey-light;
  }
}

//Features title
.plan-feature-title {
  width: 70%;
  font-size: 1rem;
}

//Plans container
.plan-feature-plans {
  width: 30%;
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
</style>
