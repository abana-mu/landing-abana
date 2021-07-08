<template>
  <Layout class="index-layout">
    <!-- HEADER -->
    <IndexBanner :title="Data.header.title" :subtext="Data.header.subtext" :cta="Data.header.cta" class="contain" />

    <IndexTrusted :data="Data.trusted" :control="Data.trustedBool" />

    <!-- BOX -->
    <div class="bg-gray-50 overflow-hidden border my-4 py-4">
      <div class="py-8 rounded lg:p-12 text-center">
        <h2 class="text-title font-medium text-3xl mb-4">{{ Data.boxes.header.title }}</h2>
        <p class="text-caption text-lg">{{ Data.boxes.header.subtext }}</p>

        <div class="py-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(box, index) in Data.boxes.boxes"
              :key="box.title"
              cols="12"
              md="6"
              class="flex flex-col items-center text-center p-0 max-w-2xl mx-auto mb-1 sm:px-4 md:px-8"
            >
              <component :is="index" class="h-24 w-24 rounded-full overflow-hidden mb-6"></component>
              <div class="flex flex-col">
                <h4 class="text-title text-xl font-medium mb-2">{{ box.title }}</h4>
                <p class="m-0 max-w-lg">{{ box.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <g-link to="/why-africa" class="btn btn-ghost">
            Why Africa?
          </g-link>
        </div>
      </div>
    </div>

    <!-- FLOW -->
    <div class="py-4 contain">
      <IndexFlowGraph :data="Data.flow" />
    </div>

    <div class="pb-4 contain">
      <IndexDropGraph :data="Data.drop" />
    </div>

    <div class="pb-4 mb-5 contain">
      <IndexRepsGraph :data="Data.reps" />
    </div>

    <div class="back-grey overflow-hidden bordered mt-4 py-4">
      <div class="py-8 rounded lg:p-12">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-8">Leading voices of the Industry</h2>

        <div class="py-4 max-w-screen-lg mx-auto">
          <div class="flex flex-col md:flex-row">
            <div
              class="flex flex-col items-center text-center p-0 max-w-lg mx-auto mb-1 sm:px-4 md:px-8"
              v-for="testi in $page.posts.edges"
              :key="testi.id"
            >
              <p class="text-body text-xl italic bg-white px-4 pt-8 pb-16 border rounded">"{{ testi.node.blurb }}"</p>
              <div class="-mt-14 flex flex-col items-center text-center">
                <div class="h-24 w-24 rounded-full overflow-hidden mb-6">
                  <g-image :src="testi.node.image" class="w-full h-full object-cover object-top" />
                </div>
                <div class="flex flex-col">
                  <h4 class="mb-1 font-bold">{{ testi.node.name }}</h4>
                  <div class="flex flex-col justify-content-center">
                    <p class="mb-0">{{ testi.node.position }}</p>
                    <p>{{ testi.node.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center">
          <g-link to="/testimonials" class="btn btn-ghost">
            See full testimonials
          </g-link>
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

.box-row {
  display: flex;
  flex-direction: column;
  @media (min-width: $break-m) {
    flex-direction: row;
  }
}
</style>
