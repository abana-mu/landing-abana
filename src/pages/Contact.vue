<template>
  <Layout>
    <div class="height-restriction">
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">{{ Data.header.subtext }}</p>
      </div>

      <b-container>
        <b-row class="container-card">
          <b-col class="contact-card">
            <h4 class="mb-3">Want to send us an Email?</h4>
            <p class="mb-3">Send us your questions or comments.</p>
            <b-button size="lg" variant="link" class="p-0">
              help@abana.mu
            </b-button>
          </b-col>
          <b-col class="contact-card">
            <h4 class="mb-3">Want to talk to an Agent?</h4>
            <p class="mb-3">We will respond as soon as we are online!</p>
            <b-button variant="primary"> Start Chatting </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/contact.json";

export default {
  metaInfo: {
    title: "Contact Us",
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
.container-card {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: $break-collapse) {
    flex-direction: row;
  }
}
.contact-card {
  max-width: 20rem;
  height: 20rem;
  padding: 4.5rem 4rem;
  margin: 2rem 1rem 4rem 1rem;

  background-color: $grey-light;
  border-radius: 6px;
}
</style>