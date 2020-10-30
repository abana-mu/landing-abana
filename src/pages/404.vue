<template>
  <Layout>
    <section class="foOfo text-center">
      <Oops class="oops-image" />
      <h2 class="red">Oops!</h2>
      <p>We couldn't find the page you were looking for</p>
      <b-button to="/" variant="primary">Go Back Home</b-button>
    </section>
  </Layout>
</template>


<script>
import Oops from "~/components/compIcons/Oops";

export default {
  components: {
    Oops
  }
};
</script>

<style scoped lang="scss">
.red {
  color: $primary;
}
.foOfo {
  min-height: calc(100vh - 400px);
}

.oops-image {
  width: 300px;
  .oops-2 {
    fill: $primary;
  }
}
</style>



