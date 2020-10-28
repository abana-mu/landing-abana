<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">
        {{ Data.header.subtext }}
      </p>
      <div class="image-banner">
        <g-image :src="Data.header.image" quality="100" />
      </div>
    </div>

    <section class="mt-5 section-content anchor-links">
      <p class="text-center semi-spaced mb-5 text-small">OUR SOLUTIONS</p>
      <ul>
        <li><a href="#database">Database</a></li>
        <li><a href="#marketplace">Marketplace</a></li>
      </ul>
    </section>

    <hr class="a-keyline" />

    <div class="content mb-5">
      <section id="database" class="linked section-content">
        <OneCol class="mt-5" :data="Data.content.database" />
        <TwoCol :data="Data.content.database.elements" />
      </section>
      <String2 />
      <section id="marketplace" class="linked section-content">
        <OneCol class="mt-5" :data="Data.content.marketplace" image />
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/matching.json';
import OneCol from '~/components/PageElementOneCol';
import TwoCol from '~/components/PageElementTwoCol';
import String1 from '~/components/compIcons/String1';
import String2 from '~/components/compIcons/String2';
import ICheck from '@/components/compIcons/ICheck';

export default {
  components: {
    OneCol,
    TwoCol,
    String1,
    String2,
  },
  metaInfo: {
    title: 'Matching & Marketplace',
    meta: [
      {
        name: 'description',
        content:
          'ABANA illuminates sourcing opportunities in the African Region. Depending on your needs, find and connect with the right seller, buyer or service provider.',
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
