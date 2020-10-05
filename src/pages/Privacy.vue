<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ $page.thisTerm.title }}</h1>
      <p class="subtitle">{{ $page.thisTerm.subtext }}</p>

      <div class="post__content" v-html="$page.thisTerm.content" />
    </div>
  </Layout>
</template>

<page-query>
query{
  thisTerm: terms(id: "29cad7070c6e9322f40cf5ebdded9be1"){
    title
    subtext
    content
  }
}
</page-query>



<script>
import Data from "~/_settings/privacy.json";

export default {
  metaInfo: {
    title: "Privacy",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>
