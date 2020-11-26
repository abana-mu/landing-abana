<template>
  <div class="main">
    <TheNavbar />
    <div class="layout">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "~/components/TheNavbar";
import TheFooter from "~/components/TheFooter";

export default {
  components: {
    TheNavbar,
    TheFooter,
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
