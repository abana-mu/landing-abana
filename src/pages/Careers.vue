<template>
  <Layout class="container">
    <div class="one-section-header">
      <h1>{{ Data.header.title }}</h1>
      <p>{{ Data.header.subtext }}</p>
    </div>
    <div class="row">
      <div class="col-12 p-3">
        <h4>Open Positions:</h4>
      </div>
      <div class="col-12 mt-3">
        <h4 class="job-dep">Product</h4>
      </div>
      <div v-if="!$page.products.edges.length" class="col-12 p-3">
        <a
          href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application"
          class="card-link"
        >
          <b-card>
            <b-card-text
              >There is nothing here. Get in touch if you think you can help
              us!</b-card-text
            >
          </b-card>
        </a>
      </div>
      <div
        class="col-12 col-lg-6 p-3"
        v-for="job in $page.products.edges"
        :key="job.id"
      >
        <g-link :to="job.node.path" class="card-link">
          <b-card :title="job.node.title" footer-class="footer">
            <b-card-text>{{ job.node.location }} ∙ Full-Time</b-card-text>
            <template v-slot:footer>
              <p>See more</p>
            </template>
          </b-card>
        </g-link>
      </div>

      <div class="col-12 mt-4">
        <h4 class="job-dep">Growth & Sales</h4>
      </div>
      <div v-if="!$page.growth.edges.length" class="col-12 p-3">
        <a
          href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application"
          class="card-link"
        >
          <b-card>
            <b-card-text
              >There is nothing here. Get in touch if you think you can help
              us!</b-card-text
            >
          </b-card>
        </a>
      </div>
      <div
        class="col-12 col-lg-6 p-3"
        v-for="job in $page.growth.edges"
        :key="job.id"
      >
        <g-link :to="job.node.path" class="card-link">
          <b-card :title="job.node.title" footer-class="footer">
            <b-card-text>{{ job.node.location }} ∙ Full-Time</b-card-text>

            <template v-slot:footer>
              <p>See more</p>
            </template>
          </b-card>
        </g-link>
      </div>

      <div class="col-12 mt-4">
        <h4 class="job-dep">Textile & Apparel</h4>
      </div>
      <div v-if="!$page.textile.edges.length" class="col-12 p-3">
        <a
          href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application "
          class="card-link"
        >
          <b-card>
            <b-card-text
              >There is nothing here. Get in touch if you think you can help
              us!</b-card-text
            >
          </b-card>
        </a>
      </div>
      <div
        class="col-12 col-lg-6 p-3"
        v-for="job in $page.textile.edges"
        :key="job.id"
      >
        <g-link :to="job.node.path" class="card-link">
          <b-card :title="job.node.title" footer-class="footer">
            <b-card-text>{{ job.node.location }} ∙ Full-Time</b-card-text>

            <template v-slot:footer>
              <p>See more</p>
            </template>
          </b-card>
        </g-link>
      </div>

      <div class="col-12 mt-4">
        <h4 class="job-dep">Marketing</h4>
      </div>
      <div v-if="!$page.marketing.edges.length" class="col-12 p-3">
        <a
          href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application "
          class="card-link"
        >
          <b-card>
            <b-card-text
              >There is nothing here. Get in touch if you think you can help
              us!</b-card-text
            >
          </b-card>
        </a>
      </div>
      <div
        class="col-12 col-lg-6 p-3"
        v-for="job in $page.marketing.edges"
        :key="job.id"
      >
        <g-link :to="job.node.path" class="card-link">
          <b-card :title="job.node.title" footer-class="footer">
            <b-card-text>{{ job.node.location }} ∙ Full-Time</b-card-text>

            <template v-slot:footer>
              <p>See more</p>
            </template>
          </b-card>
        </g-link>
      </div>

      <div class="col-12 mt-4">
        <h4 class="job-dep">Operations</h4>
      </div>
      <div v-if="!$page.operations.edges.length" class="col-12 p-3">
        <a
          href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application "
          class="card-link"
        >
          <b-card>
            <b-card-text
              >There is nothing here. Get in touch if you think you can help
              us!</b-card-text
            >
          </b-card>
        </a>
      </div>
      <div
        class="col-12 col-lg-6 p-3"
        v-for="job in $page.operations.edges"
        :key="job.id"
      >
        <g-link :to="job.node.path" class="card-link">
          <b-card :title="job.node.title" footer-class="footer">
            <b-card-text>{{ job.node.location }} ∙ Full-Time</b-card-text>

            <template v-slot:footer>
              <p>See more</p>
            </template>
          </b-card>
        </g-link>
      </div>

      <div class="col-12 mt-4">
        <h4 class="job-dep">Engineering</h4>
      </div>
      <div v-if="!$page.engineering.edges.length" class="col-12 p-3">
        <a
          href="mailto:arif.currimjee@abana.mu?cc=dirk.robens@abana.mu&subject=ABANA Job Application "
          class="card-link"
        >
          <b-card>
            <b-card-text
              >There is nothing here. Get in touch if you think you can help
              us!</b-card-text
            >
          </b-card>
        </a>
      </div>
      <div
        class="col-12 col-lg-6 p-3"
        v-for="job in $page.engineering.edges"
        :key="job.id"
      >
        <g-link :to="job.node.path" class="card-link">
          <b-card :title="job.node.title" footer-class="footer">
            <b-card-text>{{ job.node.location }} ∙ Full-Time</b-card-text>

            <template v-slot:footer>
              <p>See more</p>
            </template>
          </b-card>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  products: allCareers(filter:{department:{eq:"Product"}} sortBy: "title" order:ASC){
    edges{
      node{
        title
        location
        path
      }
    }
  }
  growth: allCareers(filter:{department:{eq:"Growth & Sales"}} sortBy: "title" order:ASC){
    edges{
      node{
        title
        location
        path
      }
    }
  }
  textile: allCareers(filter:{department:{eq:"Textile & Apparel Design"}} sortBy: "title" order:ASC){
    edges{
      node{
        title
        location
        path
      }
    }
  }
  marketing: allCareers(filter:{department:{eq:"Marketing & Visuals"}} sortBy: "title" order:ASC){
    edges{
      node{
        title
        location
        path
      }
    }
  }
  operations: allCareers(filter:{department:{eq:"Operations"}} sortBy: "title" order:ASC){
    edges{
      node{
        title
        location
        path
      }
    }
  }
  engineering: allCareers(filter:{department:{eq:"Engineering"}} sortBy: "title" order:ASC){
    edges{
      node{
        title
        location
        path
      }
    }
  }
}
</page-query>

<script>
import Data from "~/_settings/careers.json";

export default {
  components: {},
  metaInfo: {
    title: "Careers",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-link .card {
  -webkit-transition: -webkit-box-shadow 0.3s ease;
  transition: -webkit-box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;
}

.card-link:hover {
  text-decoration: none;
  .card {
    box-shadow: 0 3px 10px rgba(51, 62, 73, 0.18),
      0 6px 17px rgba(51, 62, 73, 0.18);
  }
}

.job-dep {
  color: $primary;
  text-transform: uppercase;
}

.footer {
  text-align: center;
  p {
    margin: 0;
    color: $primary;
  }
}
</style>
