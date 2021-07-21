<template>
  <Layout>
    <div class="my-20 text-center">
      <h1 class="font-medium text-5xl mb-4">{{ Data.header.title }}</h1>
      <p class="text-lg text-subtitle max-w-2xl mx-auto">
        {{ Data.header.subtext }}
      </p>
      <div v-if="Data.header.image" class="mx-auto text-center max-w-5xl">
        <g-image :src="Data.header.image" quality="100" blur="40" width="750" class="mt-12 lg:rounded-md" />
      </div>
    </div>

    <hr class="a-keyline" />

    <div class="my-10 lg:my-20">
      <TwoCol :data="Data.blocks" />
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/fas-cus.json';
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
