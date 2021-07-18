<template>
  <Layout>
    <div class="my-20 text-center">
      <h1 class="font-medium text-5xl">{{ Data.header.title }}</h1>
    </div>

    <div class="content overflow-hidden">
      <div class="flex flex-row -mx-2">
        <g-image src="~/assets/images/picture7.jpg" blur="40" class="w-1/3 px-2" immediate="false" quality="100"></g-image>

        <g-image src="~/assets/images/picture9.jpg" blur="40" class="w-1/3 px-2" immediate="false" quality="100"></g-image>

        <g-image src="~/assets/images/picture8.jpg" blur="40" class="w-1/3 px-2" immediate="false" quality="100"></g-image>
      </div>

      <section class="section-content anchor-links">
        <p class="text-center semi-spaced my-10 text-xl">
          EXPLORE OUR VALUES
        </p>
        <ul class="flex flex-col lg:flex-row text-center space-y-10 lg:space-y-0">
          <li><a href="#opp">Africa, an Opportunity</a></li>
          <li><a href="#sus">Fashion For Good</a></li>
          <li><a href="#com">Commitments & Purpose</a></li>
        </ul>
      </section>

      <hr class="a-keyline" />

      <div class="mb-5">
        <section id="opp" class="linked section-content">
          <div class="mt-16 mb-32">
            <p class="text-center text-2xl text-subtitle tracking-widest lg:text-4xl">{{ Data.content.solutions.title }}</p>
            <p class="text-center text-2xl text-subtitle tracking-widest lg:text-4xl">{{ Data.content.solutions.subtext }}</p>
          </div>
          <TwoCol :data="Data.content.solutions.elements" />
        </section>
        <String2 />
        <section id="sus" class="linked section-content">
          <div class="mt-16 mb-32">
            <p class="text-center text-2xl text-subtitle tracking-widest lg:text-4xl">{{ Data.content.sustainability.title }}</p>
            <p class="text-center text-2xl text-subtitle tracking-widest lg:text-4xl">{{ Data.content.sustainability.subtext }}</p>
          </div>
          <TwoCol :data="Data.content.sustainability.elements" />
        </section>
        <String1 />
        <section id="com" class="linked section-content">
          <div class="my-16">
            <p class="text-center text-2xl text-subtitle tracking-widest lg:text-4xl">{{ Data.content.commitment.title }}</p>
          </div>
          <vue-simple-markdown :source="Data.content.commitment.content" class="max-w-2xl mx-auto text-base text-body mt-4 mb-16"></vue-simple-markdown>
          <div class="w-full">
            <g-image :src="Data.content.commitment.image" quality="100" class="rounded mx-auto " />
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/sustainability.json';
import TwoCol from '~/components/PageElementTwoCol';
import OneCol from '~/components/PageElementOneCol';
import String1 from '~/components/icons/String1';
import String2 from '~/components/icons/String2';

export default {
  components: {
    TwoCol,
    OneCol,
    String1,
    String2,
  },
  metaInfo: {
    title: 'Sustainability',
    meta: [
      {
        name: 'description',
        content: "A sustainable future is at the core of ABANA's mission. There are no simple solutions but many creative opportunities. Find out more about our commitments.",
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
