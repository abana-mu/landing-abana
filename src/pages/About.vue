<template>
  <Layout>
    <div class="contain my-20 text-center">
      <h1 class="font-medium text-title text-5xl mb-4">{{ Data.header.title }}</h1>
      <p class="text-lg text-subtitle max-w-2xl mx-auto">{{ Data.header.subtext }}</p>
    </div>
    <String2 />
    <div class="contain">
      <div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex justify-center pb-12">
          <g-image class="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96" immediate src="~/assets/images/arif.png" quality="90" blur="40" />
        </div>

        <div>
          <h2 class="mb-3 text-4xl font-medium">
            Arif Currimjee -
            <span class="text-primary">Founder</span>
          </h2>
          <vue-simple-markdown :source="Data.arif" class="text-body text-lg"></vue-simple-markdown>
        </div>
      </div>
      <String1 />
      <div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="flex justify-center pb-12 order-2">
          <g-image class="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96" immediate src="~/assets/images/dirk.png" quality="90" blur="40" />
        </div>

        <div>
          <h2 class="mb-3 text-4xl font-medium">
            Dirk Robens -
            <span class="blue">CEO</span>
          </h2>
          <vue-simple-markdown :source="Data.dirk" class="text-body text-lg"></vue-simple-markdown>
        </div>
      </div>
    </div>

    <section v-for="(row, index) in Data.elements" :key="index" class="contain my-32">
      <div class="grid grid-cols-3">
        <h2 class="tracking-widest font-medium col-span-1 text-4xl">{{ row.title }}</h2>
        <div class="col-span-2">
          <vue-simple-markdown :source="row.subtext" class="text-body text-lg"></vue-simple-markdown>
        </div>
      </div>
    </section>

    <div class="max-w-3xl mx-auto">
      <g-image src="~/assets/images/cdm.jpg" quality="100" class="w-full rounded" />
    </div>

    <section class="my-24">
      <h2 class="mt-5 mb-8 text-center text-3xl font-medium">Join us on our adventure!</h2>
      <div class="text-center mb-5">
        <a href="https://app.abana.mu/register-buyer">
          <div class="btn btn-primary">Join Now</div>
        </a>
      </div>
    </section>
  </Layout>
</template>

<script>
import Data from '~/_settings/aboutus.json';
import Logo from '@/components/icons/Logo';
import String2 from '~/components/icons/String2';
import String1 from '~/components/icons/String1';

export default {
  metaInfo: {
    title: Data.header.title,
    meta: [
      {
        name: 'description',
        content: Data.header.subtext,
      },
    ],
  },
  components: {
    Logo,
    String2,
    String1,
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss">
.blue {
  color: $blue;
}
</style>
