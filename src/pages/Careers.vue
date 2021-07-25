<template>
  <Layout>
    <div class="contain">
      <div class="my-20 text-center">
        <h1 class="font-medium text-title text-5xl mb-4">{{ Data.header.title }}</h1>
        <p class="text-lg text-subtitle max-w-2xl mx-auto">{{ Data.header.subtext }}</p>
      </div>
      <h4 class="text-xl font-medium py-3">Open Positions:</h4>
      <div class="mb-10">
        <h4 class="text-primary uppercase font-medium text-2xl mb-3">Product</h4>
        <div v-if="!$page.products.edges.length" class="w-full">
          <a
            href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application"
            class="hover:no-underline relative flex flex-col break-words bg-white border rounded overflow-hidden transition duration-300 hover:shadow-glow"
          >
            <div class="flex flex-col flex-1 p-3">
              <div class="">There is nothing here. Get in touch if you think you can help us!</div>
            </div>
          </a>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div v-for="job in $page.products.edges" :key="job.id" v-bind:class="{ 'opacity-40': job.node.filled === 'filled' }">
            <g-link
              :to="job.node.path"
              :class="{ 'bg-gray-100 text-caption': job.node.filled === 'filled' }"
              class="hover:no-underline relative flex flex-col break-words border rounded overflow-hidden transition duration-300 hover:shadow-glow"
            >
              <div class="flex flex-col flex-1 p-5">
                <div class="mb-2 font-medium text-xl">{{ job.node.title }}</div>
                <div class="">{{ job.node.location }} ∙ Full-Time</div>
              </div>
              <div
                :class="{ 'bg-gray-100 text-caption': job.node.filled === 'filled', 'bg-gray-50 ': job.node.filled === 'open' }"
                class="border-t py-3 px-5 text-center text-body"
              >
                <p v-if="job.node.filled === 'open'">See more</p>
                <p v-else class="font-medium">Position Filled</p>
              </div>
            </g-link>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h4 class="text-primary uppercase font-medium text-2xl mb-3">Growth & Sales</h4>
        <div v-if="!$page.growth.edges.length" class="w-full">
          <a
            href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application"
            class="hover:no-underline relative flex flex-col break-words bg-white border rounded overflow-hidden transition duration-300 hover:shadow-glow"
          >
            <div class="flex flex-col flex-1 p-3">
              <div class="">There is nothing here. Get in touch if you think you can help us!</div>
            </div>
          </a>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div v-for="job in $page.growth.edges" :key="job.id" v-bind:class="{ 'opacity-40': job.node.filled === 'filled' }">
            <g-link
              :to="job.node.path"
              :class="{ 'bg-gray-50 text-caption': job.node.filled === 'filled' }"
              class="hover:no-underline relative flex flex-col break-words border rounded overflow-hidden transition duration-300 hover:shadow-glow"
            >
              <div class="flex flex-col flex-1 p-5">
                <div class="mb-2 font-medium text-xl">{{ job.node.title }}</div>
                <div class="">{{ job.node.location }} ∙ Full-Time</div>
              </div>
              <div
                :class="{ 'bg-gray-100 text-caption': job.node.filled === 'filled', 'bg-gray-50 ': job.node.filled === 'open' }"
                class="border-t py-3 px-5 text-center text-caption"
              >
                <p v-if="job.node.filled === 'open'">See more</p>
                <p v-else>Position Filled</p>
              </div>
            </g-link>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h4 class="text-primary uppercase font-medium text-2xl mb-3">Textile & Apparel</h4>
        <div v-if="!$page.textile.edges.length" class="w-full">
          <a
            href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application"
            class="hover:no-underline relative flex flex-col break-words bg-white border rounded overflow-hidden transition duration-300 hover:shadow-glow"
          >
            <div class="flex flex-col flex-1 p-3">
              <div class="">There is nothing here. Get in touch if you think you can help us!</div>
            </div>
          </a>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div v-for="job in $page.textile.edges" :key="job.id" v-bind:class="{ 'opacity-40': job.node.filled === 'filled' }">
            <g-link
              :to="job.node.path"
              :class="{ 'bg-gray-50 text-caption': job.node.filled === 'filled' }"
              class="hover:no-underline relative flex flex-col break-words border rounded overflow-hidden transition duration-300 hover:shadow-glow"
            >
              <div class="flex flex-col flex-1 p-5">
                <div class="mb-2 font-medium text-xl">{{ job.node.title }}</div>
                <div class="">{{ job.node.location }} ∙ Full-Time</div>
              </div>
              <div
                :class="{ 'bg-gray-100 text-caption': job.node.filled === 'filled', 'bg-gray-50 ': job.node.filled === 'open' }"
                class="border-t py-3 px-5 text-center text-caption"
              >
                <p v-if="job.node.filled === 'open'">See more</p>
                <p v-else>Position Filled</p>
              </div>
            </g-link>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h4 class="text-primary uppercase font-medium text-2xl mb-3">Marketing</h4>
        <div v-if="!$page.marketing.edges.length" class="w-full">
          <a
            href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application"
            class="hover:no-underline relative flex flex-col break-words bg-white border rounded overflow-hidden transition duration-300 hover:shadow-glow"
          >
            <div class="flex flex-col flex-1 p-3">
              <div class="">There is nothing here. Get in touch if you think you can help us!</div>
            </div>
          </a>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div v-for="job in $page.marketing.edges" :key="job.id" v-bind:class="{ 'opacity-40': job.node.filled === 'filled' }">
            <g-link
              :to="job.node.path"
              :class="{ 'bg-gray-50 text-caption': job.node.filled === 'filled' }"
              class="hover:no-underline relative flex flex-col break-words border rounded overflow-hidden transition duration-300 hover:shadow-glow"
            >
              <div class="flex flex-col flex-1 p-5">
                <div class="mb-2 font-medium text-xl">{{ job.node.title }}</div>
                <div class="">{{ job.node.location }} ∙ Full-Time</div>
              </div>
              <div
                :class="{ 'bg-gray-100 text-caption': job.node.filled === 'filled', 'bg-gray-50 ': job.node.filled === 'open' }"
                class="border-t py-3 px-5 text-center text-caption"
              >
                <p v-if="job.node.filled === 'open'">See more</p>
                <p v-else>Position Filled</p>
              </div>
            </g-link>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h4 class="text-primary uppercase font-medium text-2xl mb-3">Textile & Apparel</h4>
        <div v-if="!$page.operations.edges.length" class="w-full">
          <a
            href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application"
            class="hover:no-underline relative flex flex-col break-words bg-white border rounded overflow-hidden transition duration-300 hover:shadow-glow"
          >
            <div class="flex flex-col flex-1 p-3">
              <div class="">There is nothing here. Get in touch if you think you can help us!</div>
            </div>
          </a>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div v-for="job in $page.operations.edges" :key="job.id" v-bind:class="{ 'opacity-40': job.node.filled === 'filled' }">
            <g-link
              :to="job.node.path"
              :class="{ 'bg-gray-50 text-caption': job.node.filled === 'filled' }"
              class="hover:no-underline relative flex flex-col break-words border rounded overflow-hidden transition duration-300 hover:shadow-glow"
            >
              <div class="flex flex-col flex-1 p-5">
                <div class="mb-2 font-medium text-xl">{{ job.node.title }}</div>
                <div class="">{{ job.node.location }} ∙ Full-Time</div>
              </div>
              <div
                :class="{ 'bg-gray-100 text-caption': job.node.filled === 'filled', 'bg-gray-50 ': job.node.filled === 'open' }"
                class="border-t py-3 px-5 text-center text-caption"
              >
                <p v-if="job.node.filled === 'open'">See more</p>
                <p v-else>Position Filled</p>
              </div>
            </g-link>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h4 class="text-primary uppercase font-medium text-2xl mb-3">Engineering</h4>
        <div v-if="!$page.engineering.edges.length" class="w-full">
          <a
            href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application"
            class="hover:no-underline relative flex flex-col break-words bg-white border rounded overflow-hidden transition duration-300 hover:shadow-glow"
          >
            <div class="flex flex-col flex-1 p-3">
              <div class="">There is nothing here. Get in touch if you think you can help us!</div>
            </div>
          </a>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div v-for="job in $page.engineering.edges" :key="job.id" v-bind:class="{ 'opacity-40': job.node.filled === 'filled' }">
            <g-link
              :to="job.node.path"
              :class="{ 'bg-gray-50 text-caption': job.node.filled === 'filled' }"
              class="hover:no-underline relative flex flex-col break-words border rounded overflow-hidden transition duration-300 hover:shadow-glow"
            >
              <div class="flex flex-col flex-1 p-5">
                <div class="mb-2 font-medium text-xl">{{ job.node.title }}</div>
                <div class="">{{ job.node.location }} ∙ Full-Time</div>
              </div>
              <div
                :class="{ 'bg-gray-100 text-caption': job.node.filled === 'filled', 'bg-gray-50 ': job.node.filled === 'open' }"
                class="border-t py-3 px-5 text-center text-caption"
              >
                <p v-if="job.node.filled === 'open'">See more</p>
                <p v-else>Position Filled</p>
              </div>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  products: allCareers(filter:{department:{eq:"Product"}} sortBy: "title" order:ASC){
    edges{
      node{
        filled
        title
        location
        path
      }
    }
  }
  growth: allCareers(filter:{department:{eq:"Growth & Sales"}} sortBy: "title" order:ASC){
    edges{
      node{
        filled
        title
        location
        path
      }
    }
  }
  textile: allCareers(filter:{department:{eq:"Textile & Apparel Design"}} sortBy: "title" order:ASC){
    edges{
      node{
        filled
        title
        location
        path
      }
    }
  }
  marketing: allCareers(filter:{department:{eq:"Marketing & Visuals"}} sortBy: "title" order:ASC){
    edges{
      node{
        filled
        title
        location
        path
      }
    }
  }
  operations: allCareers(filter:{department:{eq:"Operations"}} sortBy: "title" order:ASC){
    edges{
      node{
        filled
        title
        location
        path
      }
    }
  }
  engineering: allCareers(filter:{department:{eq:"Engineering"}} sortBy: "title" order:ASC){
    edges{
      node{
        filled
        title
        location
        path
      }
    }
  }
}
</page-query>

<script>
import Data from '~/_settings/careers.json';

export default {
  components: {},
  metaInfo: {
    title: 'Careers',
    meta: [
      {
        name: 'description',
        content:
          'We are always on the lookout for talent that wants to help us grow and disrupt the Textile & Apparel industry! Find out more about the job openings we have',
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
