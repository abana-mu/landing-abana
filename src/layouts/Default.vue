<template>
  <div class="main">
    <Navbar />
    <div class="layout">
      <slot />
      <!--  <Footer /> -->
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  components: {
    Navbar,
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
  margin: 56px auto 100px auto;
  //XSmall -578
  padding-top: 2rem;

  //Small 578-776
  @media (min-width: $break-s) {
    padding-top: 4rem;
  }

  //Large 992-1200
  @media (min-width: $break-l) {
    margin-top: 80px;
  }
}
</style>
