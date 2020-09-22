import Vue from 'vue';
import '@/config/plugins/VueCompositionApi';
import i18n from '@/config/plugins/VueI18n';
import App from '@/app/App.vue';

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app');
