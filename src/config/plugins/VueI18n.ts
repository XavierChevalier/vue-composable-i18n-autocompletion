import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { dateTimeFormats } from '@/config/i18n/DateTimeFormats';
import { numberFormats } from '@/config/i18n/NumberFormats';
import { messages } from '@/config/i18n/Messages';

Vue.use(VueI18n);

export default new VueI18n({
  messages,
  dateTimeFormats,
  numberFormats,
});
