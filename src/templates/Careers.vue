<!-- HTML -->
<template>
  <Layout>
    <h1>{{ $page.thisJob.title }}</h1>
    <b-button
      variant="primary"
      :href="
        'mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application - ' +
          $page.thisJob.title +
          '&body=Please attach CV and fill the following in as applicable:%0A%0ALinkedin Profile Link:%0A%0AWhy do you want to work here (max. 100 words):'
      "
      >Apply now</b-button
    >
    <p>Location: {{ $page.thisJob.location }}</p>
    <h4>The role you’ll play:</h4>
    <p>{{ $page.thisJob.role }}</p>
    <h4>Your Main Tasks:</h4>
    <vue-simple-markdown :source="$page.thisJob.tasks"></vue-simple-markdown>
    <h4>What you bring to the table:</h4>
    <vue-simple-markdown :source="$page.thisJob.table"></vue-simple-markdown>
    <h4>We are an ambitious start-up and we wish to attract multi-disciplinary and like-minded individuals to the team. You will thrive here if:</h4>
    <vue-simple-markdown :source="$page.thisJob.thrive"></vue-simple-markdown>
    <b-button
      variant="primary"
      :href="
        'mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application - ' +
          $page.thisJob.title +
          '&body=Please attach CV and fill the following in as applicable:%0A%0ALinkedin Profile Link:%0A%0AWhy do you want to work here (max. 100 words):'
      "
      >Apply now</b-button
    >
  </Layout>
</template>

<!-- QUERIES -->
<page-query>
  query Careers ($path: String!) {
    thisJob: careers(path: $path){
      id
      title
      location
      role
      table
      tasks
      thrive
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
<style lang="scss"></style>
