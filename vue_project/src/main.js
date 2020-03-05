//Importing prototypes
import '@/helpers/prototypes';

import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "@/store/store"
import Admin from './layouts/Admin.vue'
import Landing from './layouts/Landing.vue'
import Blank from './layouts/Blank.vue'
import vuetify from '@/plugins/vuetify'
import moment from 'moment'
import "./registerServiceWorker"
import '@/mixins/general_mixin'
import '@/plugins'

//Importing languages
import {i18n} from '@/i18n'

//Loading layouts
Vue.component('landing-layout', Landing)
Vue.component('admin-layout', Admin)
Vue.component('blank-layout', Blank)

Vue.config.productionTip = false;

Vue.filter('format_date', function (value) {
    if(value == '0000-00-00') return '00-00-0000';
    return value ? moment(value).format('DD-MM-YYYY') : '';
});

Vue.filter('currency', function (value) {
    return parseFloat(value || 0.00).format();
});

new Vue({
    router,
    store,
    vuetify,
    beforeCreate() {
        this.$store.commit('initialiseStore');
		this.$store.dispatch('auth/loadInitialData');
    },
    i18n,
    render: h => h(App)
}).$mount("#app");
