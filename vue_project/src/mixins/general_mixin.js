import Vue from 'vue'
import helpers from '@/helpers'

Vue.mixin({
    methods: {
        goBack () {
            this.$router.go(-1);
        },

        logError (e) {
            console.log(e);
        },

        getIsActiveDescription (status) {
            return status ? this.$t('active') : this.$t('inactive') ;
        },

        addNewRecord () {
            this.clearForm();
            var current_route = this.$route.path;
            this.$router.push(current_route + '/editorcrate/');
        }
    },

    data () {
        return {
            system: {
                showMessage: (message)=>{ return helpers.showMessage(this, message) },
                confirm: (message)=>{ return helpers.confirm(this, message) },
            }
        }
    }
})
