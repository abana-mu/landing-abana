// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

import '~/assets/_styles.scss';
import 'aos/dist/aos.css';

import { NavbarPlugin } from 'bootstrap-vue';
import { ButtonPlugin } from 'bootstrap-vue';
import { LayoutPlugin } from 'bootstrap-vue';
import { SidebarPlugin } from 'bootstrap-vue';
import { BootstrapVueIcons } from 'bootstrap-vue';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(NavbarPlugin);
  Vue.use(ButtonPlugin);
  Vue.use(LayoutPlugin);
  Vue.use(SidebarPlugin);
  Vue.use(BootstrapVueIcons);
}
