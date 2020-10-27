<template>
  <Layout class="one-section-tight-layout">
    <div class="height-restriction">
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">{{ Data.header.subtext }}</p>
      </div>

      <div class="back-grey">
        <b-row class="container-card">
          <b-col class="contact-card">
            <h4 class="mb-3">Want to send us an Email?</h4>
            <p class="mb-3">Send us your questions or comments.</p>
            <b-button size="lg" variant="link" class="p-0">
              <a href="mailto:arif@abana.mu">arif@abana.mu</a>
            </b-button>
          </b-col>
          <b-col class="contact-card">
            <h4 class="mb-3">Want to talk to an Agent?</h4>
            <p class="mb-3">We will respond as soon as we are online!</p>
            <b-button
              variant="primary"
              onclick="window.fcWidget.open();window.fcWidget.show();"
            >
              Start Chatting
            </b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/contact.json';

export default {
  metaInfo: {
    title: 'Contact Us',
    meta: [
      {
        name: 'description',
        content:
          'Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.',
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
.height-restriction {
  min-height: calc(100vh - 390px);
}
.container-card {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid $border;

  @media (min-width: $break-collapse) {
    flex-direction: row;
  }
  .contact-card {
    max-width: 20rem;
    height: 20rem;
    padding: 4.5rem 4rem;
    margin: 3rem 1rem 3rem 1rem;

    background-color: $white;
    border-radius: 6px;
    border: 1px solid $border;
  }
}
</style>
