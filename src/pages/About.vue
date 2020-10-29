<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">{{ Data.header.subtext }}</p>
    </div>
    <String2 />
    <section>
      <b-container fluid>
        <b-row class="about-row">
          <b-col cols="12" lg>
            <div class="about-image-container">
              <g-image
                immediate
                src="~/assets/images/arif.png"
                quality="90"
                blur="40"
              />
            </div>
          </b-col>
          <b-col cols="12" lg>
            <h2 class="mb-3">
              Arif Currimjee - <span class="red">Founder</span>
            </h2>
            <vue-simple-markdown
              :source="Data.arif"
              class="about-text"
            ></vue-simple-markdown>
          </b-col>
        </b-row>
        <String1 />
        <b-row class="about-row">
          <b-col cols="12" lg order-lg="1">
            <div class="about-image-container">
              <g-image
                immediate
                src="~/assets/images/dirk.png"
                quality="90"
                blur="40"
              />
            </div>
          </b-col>
          <b-col cols="12" lg>
            <h2 class="mb-3">Dirk Robens - <span class="blue">CEO</span></h2>
            <vue-simple-markdown
              :source="Data.dirk"
              class="about-text"
            ></vue-simple-markdown
          ></b-col>
        </b-row>
      </b-container>
    </section>

    <section
      v-for="(row, index) in Data.elements"
      :key="index"
      class="about-container"
    >
      <b-row>
        <b-col cols="12" md="4">
          <h2 class="spaced">{{ row.title }}</h2>
        </b-col>
        <b-col cols="12" md="8">
          <p>
            <vue-simple-markdown
              :source="row.subtext"
              class="about-text"
            ></vue-simple-markdown>
          </p>
        </b-col>
      </b-row>
    </section>

    <div class="image-container">
      <g-image src="~/assets/images/cdm.jpg" quality="100" />
    </div>

    <section>
      <h2 class="mt-5 mb-4 text-center">Join us on our adventure!</h2>
      <div class="text-center mb-5">
        <g-link to="/Register/">
          <b-button size="md" variant="primary">Pre-Register Now </b-button>
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<script>
import Data from '~/_settings/aboutus.json';
import Logo from '@/components/compIcons/Logo';
import String2 from '~/components/compIcons/String2';
import String1 from '~/components/compIcons/String1';

export default {
  metaInfo: {
    title: 'About Us',
    meta: [
      {
        name: 'description',
        content:
          'More than 65 years of combined textile sector experience as Makers and Buyers, working with industry-leading companies. Find our more about our team',
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
.about-image-container {
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  img {
    width: 250px;
    height: 250px;
    @media (min-width: $break-m) {
      width: 300px;
      height: 300px;
    }
    @media (min-width: $break-l) {
      width: 75%;
      height: 75%;
    }
  }
}

.red {
  color: $primary;
}

.blue {
  color: #607aff;
}

.about-row {
  margin: 3rem 0;
}

.about-container {
  padding: 0 1rem;
  margin: 10rem auto 5rem auto;

  max-width: 350px;
  @media (min-width: $break-m) {
    max-width: 750px;
  }
  h2 {
    font-size: $f32;
    margin-bottom: 1rem;
    @media (min-width: $break-m) {
      margin-bottom: 3rem;
    }
  }
}
.image-container {
  max-width: 750px;
  margin: 0 auto;
  border-radius: 6px;
  img {
    width: 100%;
    border-radius: 6px;
  }
}

.about-text {
  font-size: 1rem;
  line-height: 28px;
  letter-spacing: 0.6px;
}
</style>
