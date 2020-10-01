<!-- HTML -->
<template>
  <b-container class="pb-5">
    <h2 class="title pt-5 pb-2 px-4 px-md-0">{{ title }}</h2>
    <p class="subtitle">{{ subtitle }}</p>

    <div class="svg-container">
      <Flow />
    </div>
  </b-container>
</template>

<!-- SCRIPTS -->
<script>
import Flow from "~/components/compIcons/Flow";

export default {
  components: {
    Flow,
  },
  props: ["title", "subtitle"],
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
.svg-container {
  width: 100%;
  margin: 0 auto;
  @media (min-width: $break-collapse) {
    width: 70%;
  }
}
</style>
