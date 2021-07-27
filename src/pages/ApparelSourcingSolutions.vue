<template>
  <Layout>
    <div class="contain mt-8 mb-20">
      <div class="relative h-96 rounded-lg overflow-hidden">
        <div class="overlay px-5 absolute w-full h-full flex flex-col justify-center items-center text-center">
          <h1 class="font-medium text-titleOnDark text-4xl md:text-5xl mb-4" data-aos="fade-up" data-aos-duration="1000">{{ Data.header.title }}</h1>
          <p class="text-lg text-titleOnDark max-w-2xl mx-auto text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            {{ Data.header.subtext }}
          </p>
        </div>
        <g-image :src="Data.header.image" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
      </div>
    </div>

    <hr class="a-keyline" />

    <div class="my-10 lg:my-20">
      <TwoCol isGrey :data="Data.blocks" />
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/app-sou-sol.json';
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
  created() {
    //window.scrollTo(0, 0);
  },
  mounted() {
    //window.scrollTo(0, 0);
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
