<template>
  <Layout>
    <HeaderBanner />
    <h2>{{ LandingData.title }}</h2>
  </Layout>
</template>

<script>
import HeaderBanner from '~/components/HeaderBanner';
import LandingData from '~/_settings/landing.json';

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    HeaderBanner,
  },
  data() {
    return {
      LandingData,
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
