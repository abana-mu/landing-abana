<template>
  <Layout>
    <div class="my-20 text-center contain">
      <h1 class="font-medium text-title text-5xl mb-4">{{ Data.header.title }}</h1>
    </div>

    <div class="bg-gray-100">
      <div class="freelancer-container-card contain border-t border-b">
        <div class="contact-card">
          <h3 class="mb-3 text-center text-2xl font-medium">{{ Data.subtitle }}</h3>
          <vue-simple-markdown v-if="Data.content" :source="Data.content" class="text mt-4 text-center"></vue-simple-markdown>
          <div class="mt-4 text-center w-100">
            <a
              href="mailto:support@abana.mu?cc=arif.currimjee@gmail.com,dirk.robens@abana.mu&subject=ABANA | Freelancer Application&body=(Please attach your CV)"
            >
              <div class="btn-lg btn-primary">support@abana.mu</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/freelancers.json';

export default {
  metaInfo: {
    title: 'Freelancers',
    meta: [
      {
        name: 'description',
        content:
          'If you have skills relevant to the Textile & Apparel eco-system (design, technical, advisory, etc.) become part of the ABANA network.',
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

<style lang="scss">
.freelancer-container-card {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: $break-collapse) {
    flex-direction: row;
  }
  .contact-card {
    max-width: 50rem;

    padding: 2rem;
    margin: 3rem auto;
    background-color: $white;
    border-radius: 6px;
    border: 1px solid $border;
    @media (min-width: $break-collapse) {
      padding: 4.5rem 4rem;
    }
  }
}
</style>
