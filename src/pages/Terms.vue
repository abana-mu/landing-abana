<!--

<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ $page.thisTerm.title }}</h1>
      <p class="subtitle">{{ $page.thisTerm.subtext }}</p>

      <div class="text-left" v-html="$page.thisTerm.content" />
    </div>
  </Layout>
</template>

<page-query>
query{
  thisTerm: terms(id: "424ad5694e579fe9324e0a20b214a017"){
    title
    subtext
    content
  }
}
</page-query>
-->
<script>
export default {
  metaInfo: {
    title: "Privacy",
  },
};
</script>
