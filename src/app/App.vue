<template>
  <div id="app">
    hello {{ i18n. }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  setI18n,
  useI18n,
} from 'vue-composable';
import deDe from '@/locales/de-DE.json';

@Component({
  setup() {
    setI18n({
      locale: 'de-DE',
      fallback: 'de-DE',
      messages: {
        'de-DE': deDe,
      },
    });

    return {
      ...useI18n(),
    };
  },
})
export default class App extends Vue {
}
</script>
