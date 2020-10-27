<template>
  <Layout class="one-section-tight-layout">
    <div class="height-restriction">
      <div class="header">
        <h1 class="title mb-4">{{ Data.header.title }}</h1>
      </div>

      <div class="back-grey">
        <b-row class="freelancer-container-card">
          <b-col class="contact-card">
            <h3 class="mb-3 text-center">{{ Data.subtitle }}</h3>
            <vue-simple-markdown
              v-if="Data.content"
              :source="Data.content"
              class="text mt-4 text-center"
            ></vue-simple-markdown>
            <div class="mt-4 text-center w-100">
              <a
                href="mailto:arif@abana.mu?cc=arif.currimjee@gmail.com,dirk.robens@abana.mu&subject=ABANA | Freelancer Application&body=(Please attach your CV)"
              >
                <b-button size="lg" variant="primary">
                  arif@abana.mu
                </b-button>
              </a>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/freelancers.json';

export default {
  metaInfo: {
    title: 'Freelancers',
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss">
.height-restriction {
  min-height: calc(100vh - 390px);
}
.freelancer-container-card {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid $border;

  @media (min-width: $break-collapse) {
    flex-direction: row;
  }
  .contact-card {
    max-width: 50rem;

    padding: 4.5rem 4rem;
    margin: 3rem auto;
    background-color: $white;
    border-radius: 6px;
    border: 1px solid $border;
  }
}
</style>
