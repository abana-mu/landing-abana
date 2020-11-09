import '~/assets/_styles.scss';

import {
  CardPlugin,
  ButtonPlugin,
  LayoutPlugin,
  SidebarPlugin,
  TabsPlugin,
  FormRadioPlugin,
  TooltipPlugin
} from 'bootstrap-vue';

import DefaultLayout from '~/layouts/Default.vue';

import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

export default function (Vue, {
  router,
  head,
  isClient
}) {

  Vue.component('Layout', DefaultLayout);
  Vue.use(CardPlugin);
  Vue.use(ButtonPlugin);
  Vue.use(LayoutPlugin);
  Vue.use(SidebarPlugin);
  Vue.use(TabsPlugin);
  Vue.use(VueSimpleMarkdown);
  Vue.use(FormRadioPlugin);
  Vue.use(TooltipPlugin);

  head.meta.push({
    name: 'author',
    content: 'Alexander Currimjee'
  }, {
    name: 'keywords',
    content: 'textile, apparel, africa, ecommerce, b2b'
  });

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