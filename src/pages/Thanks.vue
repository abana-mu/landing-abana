<template>
  <Layout>
    <div class="my-20 text-center contain">
      <h1 class="font-medium text-5xl mb-5">Thanks for your submission!</h1>
      <p class="text-subtitle">We will be in touch shortly. We look forward to starting a partnership together.</p>
    </div>
    <div class="mt-5 text-center mb-5">
      <div class="btn btn-primary cursor-pointer" @click="goBack()">Go Back</div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Thanks',
    meta: [
      {
        name: 'description',
        content: 'Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.',
      },
    ],
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>
