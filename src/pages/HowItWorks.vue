<template>
  <Layout class="one-section-tight-layout">
    <div class="height-restriction">
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">
          {{ Data.header.subtext }}
        </p>
      </div>
      <section class="section-content">
        <div v-for="category in Data.categories" :key="category.title">
          <h2>{{ category.title }}</h2>
          <div
            v-for="(tutorial, index) in category.tutorial"
            :key="tutorial.title"
          >
            <h3 v-b-toggle="category.title + index">{{ tutorial.title }}</h3>
            <b-collapse :id="category.title + index" class="mt-2">
              {{ tutorial.title }}
            </b-collapse>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/tutorials.json';
import { BCollapse } from 'bootstrap-vue';

export default {
  components: {
    BCollapse,
  },
  metaInfo: {
    title: 'How it Works',
    meta: [
      {
        name: 'description',
        content:
          'Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.',
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

<style lang="scss">
.height-restriction {
  min-height: calc(100vh - 390px);
}
</style>
