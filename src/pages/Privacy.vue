<template>
  <Layout>
    <div class="my-12 text-center max-w-2xl mx-auto">
      <h1 class="font-medium text-5xl mb-4">{{ Data.header.title }}</h1>
      <p class="text-lg text-subtitle">{{ Data.header.subtext }}</p>
    </div>
    <div class="mt-5 mb-24 contain">
      <vue-simple-markdown :source="Data.content" class="md-text"></vue-simple-markdown>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/privacy.json';
export default {
  data() {
    return {
      Data,
    };
  },
  metaInfo: {
    title: 'Privacy',
    meta: [
      {
        name: 'description',
        content: 'As textile buyers and sellers ourselves, we know how important your privacy is. Find out how we treat your data here.',
      },
    ],
  },
};
</script>
