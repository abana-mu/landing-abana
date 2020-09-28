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

<style lang="scss" scoped></style>
