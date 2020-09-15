// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import OneSection from '~/layouts/OneSection';
import OneSectionTight from '~/layouts/OneSectionTight';

import '~/assets/_styles.scss';
import 'aos/dist/aos.css';

import { NavbarPlugin } from 'bootstrap-vue';
import { CardPlugin } from 'bootstrap-vue';
import { ButtonPlugin } from 'bootstrap-vue';
import { LayoutPlugin } from 'bootstrap-vue';
import { SidebarPlugin } from 'bootstrap-vue';
import { TabsPlugin } from 'bootstrap-vue';
import { BootstrapVueIcons } from 'bootstrap-vue';
import { FormRadioPlugin } from 'bootstrap-vue';

import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('OneSection', OneSection);
  Vue.component('OneSectionTight', OneSectionTight);
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
