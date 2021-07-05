import '~/assets/_styles.scss';
require('~/assets/tailwindcss.scss');

import DefaultLayout from '~/layouts/Default.vue';

import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueSimpleMarkdown);

  Vue.filter('youtubize', function(value) {
    if (!value) return '';
    value = value.replace('watch?v=', '/embed/');
    return value;
  });

  head.meta.push(
    {
      name: 'author',
      content: 'Alexander Currimjee',
    },
    {
      name: 'keywords',
      content: 'textile, apparel, africa, ecommerce, b2b',
    }
  );
}
