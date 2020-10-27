<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
    </div>

    <div class="content mt-5 overflow-hidden">
      <b-row>
        <b-col class="col-4 px-1 px-md-2">
          <g-image
            class="w-100"
            immediate
            src="~/assets/images/picture7.jpg"
          ></g-image>
        </b-col>
        <b-col class="col-4 px-1 px-md-2">
          <g-image
            class="w-100"
            immediate
            src="~/assets/images/picture9.jpg"
          ></g-image>
        </b-col>
        <b-col class="col-4 px-1 px-md-2">
          <g-image
            class="w-100"
            immediate
            src="~/assets/images/picture8.jpg"
          ></g-image>
        </b-col>
      </b-row>

      <section class="mt-5 section-content anchor-links">
        <p class="text-center semi-spaced mb-5 text-small">
          EXPLORE OUR VALUES
        </p>
        <ul class="break-col">
          <li><a href="#opp">Africa, an Opportunity</a></li>
          <li><a href="#sus">Fashion For Good</a></li>
          <li><a href="#com">Commitments & Purpose</a></li>
        </ul>
      </section>

      <hr class="a-keyline" />

      <div class="mb-5">
        <section id="opp" class="linked section-content">
          <div class="sus-title">
            <p>{{ Data.content.solutions.title }}</p>
            <p>{{ Data.content.solutions.subtext }}</p>
          </div>
          <TwoCol :data="Data.content.solutions.elements" />
        </section>
        <String2 />
        <section id="sus" class="linked section-content">
          <div class="sus-title">
            <p>{{ Data.content.sustainability.title }}</p>
            <p>{{ Data.content.sustainability.subtext }}</p>
          </div>
          <TwoCol :data="Data.content.sustainability.elements" />
        </section>
        <String1 />
        <section id="com" class="linked section-content">
          <div class="sus-title">
            <p>{{ Data.content.commitment.title }}</p>
          </div>
          <vue-simple-markdown
            :source="Data.content.commitment.content"
            class="text mt-4"
          ></vue-simple-markdown>
          <div class="image-banner">
            <g-image :src="Data.content.commitment.image" quality="100" />
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
import String1 from '~/components/compIcons/String1';
import String2 from '~/components/compIcons/String2';

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

<style lang="scss" scoped>
.sus-title {
  margin: 4rem 0 8rem 0;
  p {
    text-align: center;
    margin: 0;
    font-size: $f28;
    color: $grey-dark;
    letter-spacing: 3px;
    @media (min-width: $break-collapse) {
      font-size: $f32;
    }
  }
}

.sustainability {
  color: red;
  h2 {
    text-align: center;
    margin: 4rem 0 6rem 0;
    font-size: $f28;
    color: $grey-dark;
    letter-spacing: 3px;
    font-weight: 400;
    @media (min-width: $break-collapse) {
      font-size: $f32;
    }
  }
}

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

.break-col {
  display: flex;
  flex-direction: column;
  @media (max-width: $break-collapse) {
    align-items: center;
    li {
      margin: 10px 0;
    }
  }

  @media (min-width: $break-collapse) {
    flex-direction: row;
  }
}

.image {
  margin-top: 3rem;
  height: 250px;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: $break-collapse) {
    background-attachment: fixed;
  }
}

.text {
  margin: 0 auto;
  max-width: 650px;
  margin-bottom: 8rem;
}

.image-banner {
  text-align: center;
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
