<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
    </div>

    <div class="content mt-5 overflow-hidden">
      <b-row>
        <b-col class="col-4 px-1 px-md-2">
          <g-image
            src="~/assets/images/picture3-c.jpg"
            blur="40"
            class="w-100"
          ></g-image>
        </b-col>
        <b-col class="col-4 px-1 px-md-2">
          <g-image
            src="~/assets/images/picture2-c.jpg"
            blur="40"
            class="w-100"
          ></g-image>
        </b-col>
        <b-col class="col-4 px-1 px-md-2">
          <g-image
            src="~/assets/images/picture1-c.jpg"
            blur="40"
            class="w-100"
          ></g-image>
        </b-col>
      </b-row>

      <section class="mt-5 section-content anchor-links">
        <p class="text-center semi-spaced mb-5 text-small">
          EXPLORE OUR VALUES
        </p>
        <ul>
          <li><a href="#economic">Economic</a></li>
          <li><a href="#social">Social</a></li>
          <li><a href="#environmental">Environmental</a></li>
        </ul>
      </section>

      <hr class="a-keyline" />

      <section
        v-for="(row, index) in Data.elements"
        :id="index"
        class="linked"
        :key="index"
        no-gutters
      >
        <div class="mt-5">
          <OneCol :data="row" class="why-col section-content" />
          <div class="image"></div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/whyafrica.json';
import TwoCol from '~/components/PageElementTwoCol';
import OneCol from '~/components/PageElementOneCol';

export default {
  components: {
    TwoCol,
    OneCol,
  },
  metaInfo: {
    title: 'Why Africa',
    meta: [
      {
        name: 'description',
        content:
          'ABANA is firstly Africa. The continent is on the verge of a resurgence and we are committed to helping the textile and apparel industry thrive in the region.',
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
.why-col {
  max-width: 500px;
  margin: 0 auto;
  h2,
  p {
    text-align: left;
  }
  .text {
    text-align: left !important;
    width: 100% !important;
  }
}

.image {
  margin-top: 3rem;
  height: 250px;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (min-width: $break-collapse) {
    background-attachment: fixed;
  }
}

#economic .image {
  background-image: url('~@/assets/images/picture1-b.jpg');
}

#social .image {
  background-image: url('~@/assets/images/picture3-b.jpg');
}

#environmental .image {
  background-image: url('~@/assets/images/picture2-b.jpg');
}
</style>
