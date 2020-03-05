import Vue from 'vue'
import VueI18n from 'vue-i18n'
import es from './es'
import en from './en'

Vue.use(VueI18n)

export let i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es, en 
  }
})