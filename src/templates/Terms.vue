<!-- HTML -->
<template>
  <Layout> </Layout>
</template>

<!-- QUERIES -->
<page-query>
query{
  thisTerm: terms(id: "29cad7070c6e9322f40cf5ebdded9be1"){
    title
    subtext
    content
  }
}
</page-query>

<!-- SCRIPTS -->
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.thisJob.title,
    };
  },
};
</script>

<!-- STYLING -->
<style lang="scss">
</style>
