<template>
  <Layout class="index-layout">
    <!-- HEADER -->
    <IndexBanner
      :title="Data.header.title"
      :subtext="Data.header.subtext"
      :cta="Data.header.cta"
    />

    <!-- Trusted By --

    <div class="trusted my-4 py-4 pb-5">
      <h4 class="m-0 mr-5">Trusted by:</h4>

      <div class="logo-container">
        <div>
          <div
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
          </div>
        </div>
      </div>
    </div>

    -->

    <IndexTrusted :data="Data.trusted" :control="Data.trustedBool" />

    <!-- BOX -->
    <div class="back-grey overflow-hidden bordered my-4 py-4">
      <div class="box-container">
        <div class="box">
          <h2 class="title">{{ Data.boxes.header.title }}</h2>
          <p class="subtitle">{{ Data.boxes.header.subtext }}</p>

          <div class="examples">
            <div>
              <div
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
              </div>
            </div>
          </div>

          <div class="box-button">
            <g-link to="/why-africa">
              <div class="btn btn-ghost">Why Africa?</div>
            </g-link>
          </div>
        </div>
      </div>
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

    <div class="back-grey overflow-hidden bordered mt-4 py-4">
      <div class="box-container">
        <div class="box">
          <h2 class="title mb-5">Leading voices of the Industry</h2>

          <div class="examples">
            <div class="box-row">
              <div
                class="box-item"
                v-for="testi in $page.posts.edges"
                :key="testi.id"
              >
                <p class="blurb">"{{ testi.node.blurb }}"</p>
                <div class="testi-person">
                  <div class="box-image">
                    <g-image :src="testi.node.image" />
                  </div>
                  <div class="box-text">
                    <h4 class="mb-1 font-weight-bold">{{ testi.node.name }}</h4>
                    <div class="d-flex flex-column justify-content-center">
                      <p class="mb-0">{{ testi.node.position }}</p>
                      <p>{{ testi.node.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="box-button">
            <g-link to="/testimonials">
              <div class="btn btn-ghost">See full testimonials</div>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<!-- QUERIES -->
<page-query>
query{
  posts: allTestimonials(filter: { featured: { eq: true }}){
    edges{
      node{
        id
        title
        featured
        blurb
        name
        position
        image
      }
    }
  }
}
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
import IndexTrusted from '~/components/IndexTrusted';

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
    IndexTrusted,
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

.examples {
  padding: 1rem 0;
}

.blurb {
  color: $text-body;
  font-size: $f20;
  font-style: italic;
  background-color: white;
  padding: 32px 16px 64px;
  border-radius: 8px;
  border: 1px solid $border;
}
.testi-person {
  margin-top: -55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.box-row {
  display: flex;
  flex-direction: column;
  @media (min-width: $break-m) {
    flex-direction: row;
  }
}

.box-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 4rem;
  @media (min-width: $break-m) {
    padding: 0 2rem;
  }
  @media (min-width: $break-s) {
    padding: 0 1rem;
  }
}

.box-text {
  display: flex;
  flex-direction: column;
}

.box-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
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
