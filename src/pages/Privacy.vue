<template>
  <Layout>
    <h1 data-aos="fade-up">{{ Data.header.title }}</h1>
    <p data-aos="fade-up" data-aos-delay="100">{{ Data.header.subtext }}</p>
  </Layout>
</template>

<script>
import Data from '~/_settings/privacy.json';

export default {
  metaInfo: {
    title: 'Privacy',
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
