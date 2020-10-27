<template>
  <Layout>
    <div class="height-restriction">
      <div class="header">
        <h1 class="title">Thanks for registering!</h1>
        <p class="subtitle">
          We will be in touch shortly. We look forward to starting a partnership
          together.
        </p>
      </div>
      <div class="mt-5 text-center">
        <g-link to="/">
          <b-button variant="primary">Back Home</b-button>
        </g-link>
      </div>
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
        content:
          'Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.',
      },
    ],
  },
};
</script>

<style lang="scss">
.height-restriction {
  min-height: calc(100vh - 390px);
}
</style>
