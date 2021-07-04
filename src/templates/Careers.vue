<!-- HTML -->
<template>
  <Layout>
    <div class="mb-5 container">
      <g-link to="/careers/" class="sidebar-item-level-2-title mb-3">
        <!-- Arrow left-short -->
        <svg class="h-5 w-5 mr-2 inline-flex" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5h-5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          /></svg
        >Back
      </g-link>
      <h1 class="title">{{ $page.thisJob.title }}</h1>
      <a
        v-if="$page.thisJob.filled === 'open'"
        :href="
          'mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application - ' +
            $page.thisJob.title +
            '&body=Please attach CV and fill the following in as applicable:%0A%0ALinkedin Profile Link:%0A%0AWhy do you want to work here (max. 100 words):'
        "
        class="btn btn-primary my-4"
      >
        Apply now
      </a>
      <p>Location: {{ $page.thisJob.location }}</p>
      <h4 class="mt-5">The role you’ll play:</h4>
      <p>{{ $page.thisJob.role }}</p>
      <h4 class="mt-5">Your Main Tasks:</h4>
      <vue-simple-markdown :source="$page.thisJob.tasks" class="md-text"></vue-simple-markdown>
      <h4 class="mt-5">What you bring to the table:</h4>
      <vue-simple-markdown :source="$page.thisJob.table" class="md-text"></vue-simple-markdown>
      <h4 class="mt-5">
        We are an ambitious start-up and we wish to attract multi-disciplinary and like-minded individuals to the team. You will thrive here if:
      </h4>
      <vue-simple-markdown :source="$page.thisJob.thrive" class="md-text"></vue-simple-markdown>
      <a
        v-if="$page.thisJob.filled === 'open'"
        :href="
          'mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application - ' +
            $page.thisJob.title +
            '&body=Please attach CV and fill the following in as applicable:%0A%0ALinkedin Profile Link:%0A%0AWhy do you want to work here (max. 100 words):'
        "
        class="btn btn-primarymy-4"
        >Apply now</a
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
.md-text {
  color: $subtitle-dark;
}
</style>
