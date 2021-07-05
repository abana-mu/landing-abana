import '~/assets/_styles.scss';
require('~/assets/tailwindcss.scss');

import { CardPlugin, LayoutPlugin, SidebarPlugin, TabsPlugin, FormRadioPlugin } from 'bootstrap-vue';

import createPopper from '@popperjs/core';
import DefaultLayout from '~/layouts/Default.vue';

import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(CardPlugin);
  Vue.use(LayoutPlugin);
  Vue.use(SidebarPlugin);
  Vue.use(TabsPlugin);
  Vue.use(VueSimpleMarkdown);
  Vue.use(FormRadioPlugin);

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

  /*
  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/lineto-circular-book.f25f54b0.ttf',
    as: 'font',
    type: "font/ttf",
    crossorigin: '',
  },
    {
      rel: 'preload',
      href: '/assets/fonts/lineto-circular-medium.d71f06b9.ttf',
      as: 'font',
      type: "font/ttf",
      crossorigin: '',
    });
    */
}
