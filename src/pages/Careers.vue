<template>
  <Layout>
    <h1>Careers</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum
      illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.
    </p>
    <ul>
      <li v-for="job in $page.products.edges" :key="job.id">
        <g-link :to="job.node.path">{{ job.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query{
products: allCareers(filter:{department:{eq:"Product"}} sortBy: "title" order:ASC){
  edges{
    node{
      title
      path
    }
  }
}}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Careers',
  },
};
</script>
