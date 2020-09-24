<!-- HTML -->
<template>
  <div class="pricing-container">
    <div class="sub-feature">
      <div class="sub-feature-title"></div>
      <template v-for="subs in data.subs">
        <h4 class="sub-plans-options col" :key="subs.name">{{ subs.name }}</h4>
      </template>
    </div>

    <div
      v-for="categories in data.categories"
      :key="categories"
      class="category-container"
    >
      <div class="plan-category-title">{{ categories.title }}</div>
      <div
        v-for="features in categories.features"
        :key="features.title"
        class="plan-feature"
      >
        <div class="plan-feature-title">{{ features.title }}</div>
        <div class="plan-feature-plans d-flex flex-row">
          <div
            v-for="plans in features.plans"
            :key="plans"
            class="feature-plans-options col"
          >
            <div v-if="plans === true">
              <b-icon
                icon="check-circle"
                aria-hidden="true"
                variant="success"
                font-scale="1.2"
              ></b-icon>
            </div>
            <div v-else-if="plans === false">
              <b-icon
                icon="x-circle"
                aria-hidden="true"
                class="icon-no"
                font-scale="1.2"
              ></b-icon>
            </div>
            <div v-else>{{ plans }}</div>
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
.feature {
  &:hover {
    background-color: $primary;
    cursor: default;
  }
}

.pricing-container {
  margin: 0 2rem;
  @media (min-width: $break-l) {
    margin: 0 4rem;
  }
}

//Category Container
.category-container {
  padding-bottom: 30px;
}

//Category Title
.plan-category-title {
  padding-bottom: 4px;
  margin-bottom: 8px;
  color: $text-light-on-light;
  border-bottom: 1px solid $text-light-on-dark;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

//Features Row
.plan-feature {
  display: flex;
  padding: 5px 20px;
  border-radius: 5px;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
}

//sub title
.sub-feature-title {
  width: 30%;
  margin: 0;
}

//sub Row
.sub-feature {
  display: flex;

  padding: 5px 20px;
}

.sub-plans-options {
  text-align: center;
  margin: 0;
}

//Features title
.plan-feature-title {
  width: 30%;
}

//Plans container
.plan-feature-plans {
  width: 70%;
  display: flex;
}

.feature-plans-options {
  text-align: center;
}

.icon-no {
  color: #c7c7c7;
}
</style>
