// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import {
  NavbarPlugin, CardPlugin, ButtonPlugin, LayoutPlugin, SidebarPlugin, TabsPlugin, BootstrapVueIcons, FormRadioPlugin
} from 'bootstrap-vue';

import DefaultLayout from '~/layouts/Default.vue';

import 'aos/dist/aos.css';
import '~/assets/_styles.scss';

import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(NavbarPlugin);
  Vue.use(CardPlugin);
  Vue.use(ButtonPlugin);
  Vue.use(LayoutPlugin);
  Vue.use(SidebarPlugin);
  Vue.use(TabsPlugin);
  Vue.use(BootstrapVueIcons);
  Vue.use(VueSimpleMarkdown);
  Vue.use(FormRadioPlugin);
}