<template>
  <Layout>
    <div class="contain mt-8 mb-10 md:mb-20">
      <div class="banner-container">
        <div class="product-banner overlay">
          <h1 class="banner-title" data-aos="fade-up" data-aos-duration="1000">{{ Data.header.title }}</h1>
          <p class="banner-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{{ Data.header.subtext }}</p>
        </div>
        <g-image :src="Data.header.image" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
      </div>
    </div>
    <div class="contain text-center">
      <g-link to="/registration/" class="btn-2xl btn-primary">Register as a free buyer</g-link>
    </div>
    <div class="my-5 lg:my-10">
      <TwoCol isGrey :data="Data.blocks" />
    </div>
    <div class="contain text-center">
      <g-link to="/registration/" class="btn-2xl btn-primary my-10">Register as a free buyer</g-link>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/dig-pla.json';
import OneCol from '~/components/PageElementOneCol';
import TwoCol from '~/components/PageElementTwoCol';
import String1 from '~/components/icons/String1';
import String2 from '~/components/icons/String2';
import ICheck from '@/components/icons/ICheck';

export default {
  components: {
    OneCol,
    TwoCol,
    String1,
    String2,
  },
  metaInfo: {
    title: Data.header.title,
    meta: [
      {
        name: 'description',
        title: Data.header.subtext,
      },
    ],
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style scoped>
.overlay {
  background-color: rgba(6, 7, 55, 0.53);
}
</style>
