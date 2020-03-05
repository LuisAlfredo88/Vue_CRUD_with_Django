import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import es from '../i18n/vuetify/es.ts'
import en from '../i18n/vuetify/en.ts'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        current: 'es',
        locales: { es, en},
    },    

    icons: {
        iconfont: 'mdi',
    },
});
