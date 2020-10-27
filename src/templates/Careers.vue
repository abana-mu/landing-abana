<!-- HTML -->
<template>
  <Layout>
    <div class="mb-5 container">
      <g-link to="/careers/" class="sidebar-item-level-2-title mb-3">
        <b-icon icon="arrow-left-short" class="mr-2" />Back
      </g-link>
      <h1 class="title">{{ $page.thisJob.title }}</h1>
      <b-button
        v-if="$page.thisJob.filled === 'open'"
        variant="primary"
        :href="
          'mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application - ' +
            $page.thisJob.title +
            '&body=Please attach CV and fill the following in as applicable:%0A%0ALinkedin Profile Link:%0A%0AWhy do you want to work here (max. 100 words):'
        "
        class="my-4"
        >Apply now</b-button
      >
      <p>Location: {{ $page.thisJob.location }}</p>
      <h4 class="mt-5">The role you’ll play:</h4>
      <p>{{ $page.thisJob.role }}</p>
      <h4 class="mt-5">Your Main Tasks:</h4>
      <vue-simple-markdown
        :source="$page.thisJob.tasks"
        class="md-text"
      ></vue-simple-markdown>
      <h4 class="mt-5">What you bring to the table:</h4>
      <vue-simple-markdown
        :source="$page.thisJob.table"
        class="md-text"
      ></vue-simple-markdown>
      <h4 class="mt-5">
        We are an ambitious start-up and we wish to attract multi-disciplinary
        and like-minded individuals to the team. You will thrive here if:
      </h4>
      <vue-simple-markdown
        :source="$page.thisJob.thrive"
        class="md-text"
      ></vue-simple-markdown>
      <b-button
        v-if="$page.thisJob.filled === 'open'"
        variant="primary"
        :href="
          'mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application - ' +
            $page.thisJob.title +
            '&body=Please attach CV and fill the following in as applicable:%0A%0ALinkedin Profile Link:%0A%0AWhy do you want to work here (max. 100 words):'
        "
        class="my-4"
        >Apply now</b-button
      >
    </div>
  </Layout>
</template>

<!-- QUERIES -->
<page-query>
  query Careers ($path: String!) {
    thisJob: careers(path: $path){
      id
      filled
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
import { BIcon, BIconArrowLeftShort } from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconArrowLeftShort,
  },
  metaInfo() {
    return {
      title: this.$page.thisJob.title,
    };
  },
};
</script>

<!-- STYLING -->
<style lang="scss">
.md-text {
  color: $subtitle-dark;
}
</style>
