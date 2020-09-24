<template>
  <Layout>
    <h1 data-aos="fade-up">{{ Data.header.title }}</h1>
    <p data-aos="fade-up" data-aos-delay="100">{{ Data.header.subtext }}</p>
  </Layout>
</template>

<script>
import Data from '~/_settings/partner.json';

export default {
  metaInfo: {
    title: 'Partnerships',
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
