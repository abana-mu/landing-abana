<template>
  <TheNavbar />
</template>

<script>
import Data from '~/_settings/terms.json';
import TheNavbar from '~/components/TheNavbar';

export default {
  components: {
    TheNavbar,
  },

  data() {
    return {
      Data,
    };
  },
  metaInfo: {
    title: 'Terms',
    meta: [
      {
        name: 'description',
        content:
          'As textile buyers and sellers ourselves, we know how important your privacy is. Find out about our terms here.',
      },
    ],
  },
};
</script>
