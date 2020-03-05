const SYSTEM_MODULE = 'system';
import {mapActions} from 'vuex'

export default {
    data () {
        return {
            loading: false,
            form_is_valid: false,
            saving: false,
            buttons: [],

            full_dialog: {open: false},

            form_rules: {
                required: [v => !!v || this.$t('field_required')],
                email: [
                    v => /.+@.+\..+|^(?![\s\S])/.test(v) || this.$t('must_be_valid'),
                ],    
            }
        }
    },

    methods: {
        ...mapActions({
              addModalRef : SYSTEM_MODULE + '/addModalRef',
              removeNextModalRef : SYSTEM_MODULE + '/removeNextModalRef',
          }),
    }
}