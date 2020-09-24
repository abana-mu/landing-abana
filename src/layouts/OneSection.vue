<template>
  <div class="main">
    <Navbar />
    <div class="layout">
      <b-container fluid>
        <slot />
      </b-container>
      <!--  <Footer /> -->
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import AOS from 'aos';

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

<style lang="scss" scoped></style>
