<template>
  <Layout>
    <div class="contain">
      <div class="my-12 text-center max-w-2xl mx-auto">
        <h1 class="font-medium text-title text-5xl mb-4">{{ Data.header.title }}</h1>
        <p class="text-lg text-subtitle">{{ Data.header.subtext }}</p>
      </div>
      <div class="mt-5 mb-24">
        <vue-simple-markdown :source="Data.content"></vue-simple-markdown>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/terms.json';
export default {
  data() {
    return {
      Data,
    };
  },
  metaInfo: {
    title: 'Terms',
    meta: [
      {
        name: 'description',
        content: 'As textile buyers and sellers ourselves, we know how important your privacy is. Find out about our terms here.',
      },
    ],
  },
};
</script>
