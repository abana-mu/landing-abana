import '~/assets/_styles.scss';

import {
  CardPlugin,
  ButtonPlugin,
  LayoutPlugin,
  SidebarPlugin,
  TabsPlugin,
  FormRadioPlugin
} from 'bootstrap-vue';

import DefaultLayout from '~/layouts/Default.vue';

import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(CardPlugin);
  Vue.use(ButtonPlugin);
  Vue.use(LayoutPlugin);
  Vue.use(SidebarPlugin);
  Vue.use(TabsPlugin);
  Vue.use(VueSimpleMarkdown);
  Vue.use(FormRadioPlugin);

  head.meta.push({
    name: 'author',
    content: 'Alexander Currimjee'
  }, {
    name: 'keywords',
    content: 'textile, apparel, africa, ecommerce, b2b'
  })

  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/lineto-circular-book.ttf'
  }, {
    rel: 'preload',
    href: '/assets/fonts/lineto-circular-medium.ttf'
  })
}