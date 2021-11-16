import AOS from 'aos';
import 'aos/dist/aos.css';

import '~/assets/_styles.scss';
require('~/assets/tailwindcss.scss');

import DefaultLayout from '~/layouts/Default.vue';
import VueSimpleMarkdown from 'vue-simple-markdown';

import GraphikRegular from '~/assets/fonts/GraphikRegular.otf';
import GraphikLight from '~/assets/fonts/GraphikLight.otf';
import GraphikMedium from '~/assets/fonts/GraphikMedium.otf';
import GraphikSemibold from '~/assets/fonts/GraphikSemibold.otf';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueSimpleMarkdown);


  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return { x: 0, y: 0 };
    }
  };

  if (process.isClient) {
    AOS.init({
      once: true,
    });
  }

  Vue.filter('youtubize', function(value) {
    if (!value) return '';
    value = value.replace('watch?v=', '/embed/');
    return value;
  });

  head.link.push(
    { rel: 'preload', href: GraphikRegular, as: 'font', crossorigin: true },
    { rel: 'preload', href: GraphikLight, as: 'font', crossorigin: true },
    { rel: 'preload', href: GraphikMedium, as: 'font', crossorigin: true },
    { rel: 'preload', href: GraphikSemibold, as: 'font', crossorigin: true }
  );

  head.meta.push(
    {
      name: 'author',
      content: 'Alexander Currimjee',
    },
    {
      name: 'keywords',
      content: 'textile, apparel, africa, ecommerce, b2b',
    },
    {
      name: 'google-site-verification',
      content: '4q1hsMo4vL51uybJMFbN29WcJSoj9un8kdo5LDDpGrg',
    }
  );
}
