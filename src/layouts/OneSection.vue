<template>
  <div class="layout">
    <Navbar />
    <b-container fluid>
      <slot />
    </b-container>
    <!--  <Footer /> -->
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import AOS from "aos";

export default {
  components: {
    Navbar,
  },
  mounted() {
    AOS.init();
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.layout {
  margin: 0 auto;
  //XSmall -578
  padding-top: 7rem;

  //XLarge 1200-1440
  @media (min-width: $break-xl) {
    padding-top: 8rem;
  }

  //XXLarge 1440+
  @media (min-width: $break-xxl) {
    padding-top: 9rem;
  }
}
</style>
