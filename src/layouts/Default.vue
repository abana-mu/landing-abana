<template>
  <div class="main">
    <Navbar />
    <div class="layout">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default {
  components: {
    Navbar,
    Footer,
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
  margin: 56px auto 0 auto;
  //XSmall -578
  padding-top: 2rem;
  padding-bottom: 100px;

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
