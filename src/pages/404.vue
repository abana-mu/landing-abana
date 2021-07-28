<template>
  <Layout>
    <section class="min-h-96 py-24 text-center flex flex-col items-center justify-center">
      <Oops class="w-full max-w-sm" />
      <h2 class="text-4xl font-medium text-primary mb-4">Oops!</h2>
      <p class="mb-8">We couldn't find the page you were looking for</p>
      <a to="/" class="btn btn-primary">Go Back Home</a>
    </section>
  </Layout>
</template>

<script>
import Oops from '~/components/icons/Oops';

export default {
  components: {
    Oops,
  },
};
</script>
