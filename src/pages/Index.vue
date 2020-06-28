<template>
  <Layout>
    <HeaderBanner />
  </Layout>
</template>

<script>
import HeaderBanner from "~/components/HeaderBanner";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    HeaderBanner
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
