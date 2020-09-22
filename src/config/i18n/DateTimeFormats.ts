import { DateTimeFormats } from 'vue-i18n';

export const dateTimeFormats: DateTimeFormats = {
  'de-DE': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
    numeric: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },
  },
};
