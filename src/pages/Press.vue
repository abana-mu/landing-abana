<template>
  <Layout>
    <div class="container">
      <div class="header">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">{{ Data.header.subtext }}</p>
      </div>
      <b-row>
        <b-col
          cols="12"
          md="6"
          lg="4"
          class="p-3"
          v-for="press in $page.posts.edges"
          :key="press.id"
        >
          <g-link :to="press.node.path" class="card-link">
            <div>
              <b-card
                :title="press.node.title"
                :img-src="press.node.image"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
                footer="Read"
                footer-tag="footer"
              >
                <b-card-text>
                  <div class="press-date">{{ press.node.date }}</div>
                  {{ press.node.excerpt }}
                </b-card-text>
              </b-card>
            </div>
          </g-link>
        </b-col>
      </b-row>
    </div>
  </Layout>
</template>

<page-query>
query{
  posts: allPress{
    edges{
      node{
        id
        title
        excerpt
        date(format: "DD/MM/YYYY")
        path
        image
      }
    }
  }
}
</page-query>

<script>
import Data from '~/_settings/press.json';

export default {
  components: {},
  metaInfo: {
    title: 'Press',
    meta: [
      {
        name: 'Press',
        content:
          "Listen to what the voices of the press have to say about ABANA's impact in the fashion and textile industry",
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

.card-title {
  margin-bottom: 0.5rem;
}
.press-date {
  color: $info;
  font-size: 14px;
  margin-bottom: 1rem;
}

.card-footer {
  text-align: center;
  color: $text-body;
}
</style>
