<template>
  <div class="layout">
    <Navbar />
    <slot />
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
    AOS.init({
      once: true,
    });
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
  padding-top: 4rem;

  //Small 578-776
  @media (min-width: $break-s) {
    padding-top: 5rem;
  }

  //Medium 776-992
  @media (min-width: $break-m) {
    padding-top: 7rem;
  }

  //Large 992-1200
  @media (min-width: $break-l) {
    padding-top: 10rem;
  }

  //XLarge 1200-1440
  @media (min-width: $break-xl) {
    padding-top: 11rem;
  }

  //XXLarge 1440+
  @media (min-width: $break-xxl) {
    padding-top: 12rem;
  }
}
</style>
