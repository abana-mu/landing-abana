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

    <section class="section-content anchor-links">
      <p class="text-center semi-spaced mb-10 text-xl">OUR SOLUTIONS</p>
      <ul>
        <li><a href="#database">Database</a></li>
        <li><a href="#marketplace">Marketplace</a></li>
      </ul>
    </section>

    <hr class="a-keyline" />

    <div class="contain my-20">
      <TwoCol :data="Data.blocks" />
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
import IRegister from '@/components/icons/IRegister';
import IApprove from '@/components/icons/IApprove';
import IComplete from '@/components/icons/IComplete';
import IBegin from '@/components/icons/IBegin';

export default {
  components: {
    OneCol,
    TwoCol,
    String1,
    String2,
    IRegister,
    IApprove,
    IComplete,
    IBegin,
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
