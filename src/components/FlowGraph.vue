<!-- HTML -->
<template>
  <b-container fluid class="pb-5 mobile-fluid">
    <h2 class="pt-5 pb-2 px-4 px-md-0 text-center">{{title}}</h2>
    <p class="flow-subtitle pb-5">{{subtitle}}</p>
    <div class="flow-graph d-none d-md-flex">
      <div class="sources">
        <g-link class="source-item" to="/sourcing-buyers">
          <h3>Sourcing Buyers</h3>
          <p>One-Liner</p>
        </g-link>
        <g-link class="source-item" to="/product-buyers">
          <h3>Product Buyers</h3>
          <p>One-Liner</p>
        </g-link>
      </div>
      <img class="flow-image" src="../assets/images/abana-flow.svg" />
      <div class="destinations">
        <g-link class="dest-item" to="/sourcing-buyers">
          <h3>Makers</h3>
          <p>One-Liner</p>
        </g-link>
        <g-link class="dest-item" to="/product-buyers">
          <h3>Input Suppliers</h3>
          <p>One-Liner</p>
        </g-link>
        <g-link class="dest-item" to="/sourcing-buyers">
          <h3>Service Providers</h3>
          <p>One-Liner</p>
        </g-link>
      </div>
    </div>
    <div class="flow-graph d-flex d-md-none">
      <div class="sources-mobile">
        <g-link class="source-item" to="/sourcing-buyers">
          <h3>Sourcing Buyers</h3>
          <p>One-Liner</p>
        </g-link>
        <g-link class="source-item" to="/product-buyers">
          <h3>Product Buyers</h3>
          <p>One-Liner</p>
        </g-link>
      </div>
      <img class="flow-image-mobile" src="../assets/images/abana-flow-source.svg" />
    </div>
    <div class="flow-graph d-flex d-md-none">
      <img class="flow-image-mobile" src="../assets/images/abana-flow-dest.svg" />
      <div class="destinations-mobile">
        <g-link class="dest-item" to="/sourcing-buyers">
          <h3>Makers</h3>
          <p>One-Liner</p>
        </g-link>
        <g-link class="dest-item" to="/product-buyers">
          <h3>Input Suppliers</h3>
          <p>One-Liner</p>
        </g-link>
        <g-link class="dest-item" to="/sourcing-buyers">
          <h3>Service Providers</h3>
          <p>One-Liner</p>
        </g-link>
      </div>
    </div>
  </b-container>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
.flow-graph {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  p,
  h3 {
    margin: 0;
  }
}

.flow-subtitle {
  margin: auto auto;
  margin-bottom: 2rem;
  font-weight: 500;
  text-align: center;
}

.mobile-fluid {
  @media (max-width: $break-m) {
    padding-right: 0;
    padding-left: 0;
  }
}

.flow-image {
  width: 70%;
  @media (min-width: $break-l) {
    width: 50%;
  }
}

.sources {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 15%;

  @media (min-width: $break-l) {
    width: 25%;
  }
}

.destinations {
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;

  @media (min-width: $break-l) {
    width: 25%;
  }
}

.source-item {
  text-align: right;
  display: block;
  padding: 10px 30px 10px 0px;
  border-right: 2.5px solid #d4009a;
  &:hover {
    text-decoration: none;
  }
}

.dest-item {
  display: block;
  padding: 10px 0 10px 30px;
  border-left: 2.5px solid #ffcf15;

  &:hover {
    text-decoration: none;
  }
}

.flow-image-mobile {
  width: 70%;
}

.sources-mobile {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  padding: 35px 0;
  .source-item {
    padding: 10px 10px 10px 0px;
  }
}

.destinations-mobile {
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  .dest-item {
    padding: 10px 0 10px 10px;
  }
}
</style>
