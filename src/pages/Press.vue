<template>
  <Layout>
    <div class="container">
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">{{ Data.header.subtext }}</p>
      </div>
      <div class="grid grid-cols-2 gap-10 mb-4">
        <div v-for="press in $page.posts.edges" :key="press.id">
          <g-link :to="press.node.path" class="hover:no-underline relative flex flex-col break-words bg-white border rounded overflow-hidden transition duration-300 hover:shadow-glow">
            <g-image :src="press.node.image" class="w-full" />
            <div class="flex flex-col flex-1 p-3">
              <div class="mb-2">{{ press.node.title }}</div>
              <div class="text-sm text-subtitle mb-1">{{ press.node.date }}</div>
              <div class="">{{ press.node.excerpt }}</div>
            </div>
            <div class="bg-gray-100 border-t py-3 px-5 text-center ">
              <div class="mb-2">Read</div>
            </div>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  posts: allPress{
    edges{
      node{
        id
        title
        excerpt
        date(format: "DD/MM/YYYY")
        path
        image
      }
    }
  }
}
</page-query>

<script>
import Data from '~/_settings/press.json';

export default {
  components: {},
  metaInfo: {
    title: 'Press',
    meta: [
      {
        name: 'Press',
        content: "Listen to what the voices of the press have to say about ABANA's impact in the fashion and textile industry",
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
