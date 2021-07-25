<template>
  <Layout>
    <div class="my-20 text-center contain">
      <h1 class="font-medium text-title text-5xl mb-4">{{ Data.header.title }}</h1>
      <p class="text-lg text-subtitle max-w-2xl mx-auto">{{ Data.header.subtext }}</p>
    </div>

    <div class="bg-gray-100">
      <div class="container-card border-t border-b">
        <div class="contact-card">
          <h4 class="mb-3 font-medium text-xl">Want to send us an Email?</h4>
          <p class="mb-6">Send us your questions or comments.</p>
          <a class="text-primary" href="mailto:support@abana.mu">support@abana.mu</a>
        </div>
        <div class="contact-card">
          <h4 class="mb-3 font-medium text-xl">Want to talk to an Agent?</h4>
          <p class="mb-6">We will respond as soon as we are online!</p>
          <a class="btn btn-primary" onclick="window.fcWidget.open();window.fcWidget.show();">Start Chatting</a>
        </div>
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
        content: 'There are plenty of ways to get in touch with us!',
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
.container-card {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
