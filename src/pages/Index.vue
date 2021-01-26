<template>
  <Layout class="index-layout">
    <!-- HEADER -->
    <IndexBanner
      :title="Data.header.title"
      :subtext="Data.header.subtext"
      :cta="Data.header.cta"
    />

    <!-- Trusted By -->

    <div class="trusted my-4 py-4 pb-5">
      <h4 class="m-0 mr-5">Trusted by:</h4>
      <!-- <div class="trusted-logos">
          <g-image src="~/assets/images/EDB_logo.png" blur="40" quality="100" />
          <g-image src="~/assets/images/gov_logo.png" blur="40" quality="100" />
        </div> -->
      <div class="logo-container">
        <b-row>
          <b-col
            class="trusted-logos"
            v-for="logo in Data.trusted"
            :key="logo.title"
            cols="6"
            lg
          >
            <a :href="logo.link" target="_blank">
              <g-image
                :src="logo.image"
                blur="40"
                quality="100"
                :alt="logo.title"
              />
            </a>
          </b-col>
        </b-row>
      </div>
    </div>

    <!-- BOX -->
    <div class="back-grey overflow-hidden bordered my-4 py-4">
      <b-container fluid class="box-container">
        <div class="box">
          <h2 class="title">{{ Data.boxes.header.title }}</h2>
          <p class="subtitle">{{ Data.boxes.header.subtext }}</p>

          <b-container class="examples">
            <b-row>
              <b-col
                v-for="(box, index) in Data.boxes.boxes"
                :key="box.title"
                cols="12"
                md="6"
                class="box-item"
              >
                <component :is="index" class="box-image"></component>
                <div class="box-text">
                  <h4>{{ box.title }}</h4>
                  <p class="box-item-text">{{ box.content }}</p>
                </div>
              </b-col>
            </b-row>
          </b-container>

          <div class="box-button">
            <g-link to="/why-africa">
              <b-button variant="outline-primary">Why Africa?</b-button>
            </g-link>
          </div>
        </div>
      </b-container>
    </div>

    <!-- FLOW -->
    <div class="py-4">
      <IndexFlowGraph :data="Data.flow" />
    </div>

    <div class="pb-4">
      <IndexDropGraph :data="Data.drop" />
    </div>

    <div class="pb-4 mb-5">
      <IndexRepsGraph :data="Data.reps" />
    </div>
  </Layout>
</template>

<!-- QUERIES -->
<page-query>


</page-query>

<script>
import IndexBanner from '~/components/IndexBanner';
import Data from '~/_settings/landing.json';
import ITransf from '@/components/icons/ITransf';
import IExpect from '@/components/icons/IExpect';
import IGuar from '@/components/icons/IGuar';
import ITax from '@/components/icons/ITax';
import ITarget from '@/components/icons/ITarget';
import INew from '@/components/icons/INew';
import IChina from '@/components/icons/IChina';
import IEnv from '@/components/icons/IEnv';
import ICheck from '@/components/icons/ICheck';
import ICal from '@/components/icons/ICal';
import IndexFlowGraph from '~/components/IndexFlowGraph';
import IndexDropGraph from '~/components/IndexDropGraph';
import IndexRepsGraph from '~/components/IndexRepsGraph';

export default {
  metaInfo: {
    title: 'ABANA | African Textile & Apparel Marketplace',
    meta: [
      {
        name: 'description',
        content:
          'Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.',
      },
    ],
  },
  components: {
    IndexBanner,
    box1: IChina,
    box2: ICheck,
    box3: IEnv,
    box4: ICal,
    IndexFlowGraph,
    IndexDropGraph,
    IndexRepsGraph,
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

#boxTitle {
  text-align: center;
  margin-bottom: 1rem;
}

#boxSub {
  margin: auto auto;
  color: $subtitle-dark;
  margin-bottom: 2rem;
  font-weight: 500;
  text-align: center;
}

.trusted {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: $break-l) {
    flex-direction: row;
  }

  color: #a4a4a4;
  h4 {
    color: #a4a4a4;
  }
  img {
    max-height: 40px;
    @media (min-width: $break-l) {
      max-height: 50px;
    }
    width: auto;
    margin-right: 30px;
    opacity: 0.6;
    filter: grayscale(1);
  }
}

.trusted-logos {
  text-align: center;
  margin-top: 20px;
  @media (min-width: $break-l) {
    margin-top: 0;
  }
}

.logo-container {
  display: flex;
  flex-direction: row;
}

.examples {
  padding: 1rem 0;
}

.box-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  padding: 0;
  @media (min-width: $break-s) {
    padding: 0 2rem;
  }
}

.box-text {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.box-img {
  width: 60px;
  margin-bottom: 1.5rem;
}

.box-item-text {
  max-width: 400px;
  margin: 0;
  font-size: 1rem;
}

.box {
  padding: 2rem 0;
  border-radius: 3px;
  .box-button {
    text-align: center;
  }
  @media (min-width: $break-l) {
    padding: 3rem 3rem;
  }
}
</style>
